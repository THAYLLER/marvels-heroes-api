import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as crypto from 'crypto';

@Injectable()
export class HeroesService {
  private readonly marvelApiUrl =
    'https://gateway.marvel.com/v1/public/characters';
  private readonly publicKey = '536ae430abee13423ba70d672d325108';
  private readonly privateKey = '60a3c7c98ab05fac75febdc857e46562f70b58ed';
  private favorites = [];

  async searchHeroes(name: string) {
    const timestamp = Number(new Date());
    const hash = crypto
      .createHash('md5')
      .update(timestamp + this.privateKey + this.publicKey)
      .digest('hex');

    const response = await axios.get(
      `${this.marvelApiUrl}?nameStartsWith=${name}&ts=${timestamp}&apikey=${this.publicKey}&hash=${hash}`,
    );
    return response.data.data.results;
  }

  addFavorite(hero) {
    this.favorites.push(hero);
  }

  getFavorites() {
    return this.favorites;
  }

  removeFavorite(heroId: string) {
    this.favorites = this.favorites.filter((hero) => hero.id !== heroId);
  }
}
