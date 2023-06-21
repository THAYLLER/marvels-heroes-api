# Marvel Heroes API

Este projeto é uma API REST que integra com a API da Marvel para pesquisar heróis pelo nome e marcar/desmarcar heróis como favoritos.

## Tecnologias utilizadas

- **NestJS**: um framework Node.js para construir aplicações de servidor eficientes e escaláveis.
- **TypeScript**: uma extensão tipada de JavaScript que traz tipos estáticos para o desenvolvimento de aplicações JavaScript.

## Arquitetura

A arquitetura do projeto segue os princípios da Clean Architecture, com uma separação clara entre os controladores (que lidam com as solicitações e respostas HTTP) e os serviços (que implementam a lógica de negócios).

## Como executar o projeto

1. **Clone este repositório:**

    Digite no terminal: `git clone https://github.com/seu-usuario/marvel-heroes-api.git`

2. **Instale as dependências:**

    Navegue até o diretório do projeto com `cd marvel-heroes-api` e depois instale as dependências com `npm install`

3. **Inicie o servidor:**

    Inicie o servidor com `npm run start`

O servidor agora estará rodando em `http://localhost:3000`.

## Rotas da API

- **Pesquisar heróis pelo nome:** Faça uma requisição GET para `/heroes/search?name={name}`
- **Marcar um herói como favorito:** Faça uma requisição POST para `/heroes/favorite` com o corpo da requisição contendo os dados do herói
- **Listar todos os heróis favoritos:** Faça uma requisição GET para `/heroes/favorites`
- **Desmarcar um herói como favorito:** Faça uma requisição DELETE para `/heroes/favorite` com o corpo da requisição contendo o ID do herói
