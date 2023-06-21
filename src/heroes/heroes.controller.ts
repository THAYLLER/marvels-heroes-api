import { Controller, Get, Post, Query, Body, Delete } from '@nestjs/common';
import { HeroesService } from './heroes.service';

@Controller('heroes')
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) {}

  @Get('search')
  async search(@Query('name') name: string) {
    const heroes = await this.heroesService.searchHeroes(name);
    return heroes;
  }

  @Post('favorite')
  addFavorite(@Body() hero) {
    this.heroesService.addFavorite(hero);
    return { success: true };
  }

  @Get('favorites')
  getFavorites() {
    const favorites = this.heroesService.getFavorites();
    return favorites;
  }

  @Delete('favorite')
  removeFavorite(@Body('id') heroId: string) {
    this.heroesService.removeFavorite(heroId);
    return { success: true };
  }
}
