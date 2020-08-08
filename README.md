<p align="center">
   <img src="./.github/logo.png" alt="Proffy" width="280"/>
</p>

<h4 align="center"> 
  NextLevelWeek 2.0 🚀 By <a href="https://rocketseat.com.br/">Rocketseat</a>
</h4>
<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/felipefrm/proffy?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/felipefrm/proffy">
	
  <a href="https://www.linkedin.com/in/felipe-melo-a78504186/">
    <img alt="Made by felipefrm" src="https://img.shields.io/badge/made%20by-felipefrm-%2304D361">
  </a>

  <a href="https://github.com/felipefrm/ecoleta/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/felipefrm/proffy">
  </a>
</p>

<p align="center">
  <a href="#nlw">Next Level Week</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<h1 align="center">
    <img alt="NextLevelWeek" title="#NextLevelWeek" src=".github/nlw.svg" width="250px" />
</h1>

<a id="nlw"></a>
## :information_source: Next Level Week

#### "O NLW é uma experiência online com muito conteúdo prático, desafios e hacks que vão te ajudar avançar para o próximo nível."

Oferecido pela Rocketseat, o Next Level Week é um curso para desenvolver uma aplicação completa do ZERO, utilizando todo o potencial da stack ReactJs, React Native e NodeJS. No projeto foi dedicado 7 dias para o desenvolvimento do projeto Proffy. 

<a id="projeto"></a>
## 💻 Ecoleta

O Proffy é uma plataforma de estudos online que visa conectar alunos e professores de forma rápida e fácil.

<h1 align="center">
    <img alt="Proffy" title="Proffy" src=".github/landing.svg" width="500px" />
</h1>

<a id="tecnologias"></a>
## :rocket: Tecnologias

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- [Node.js][nodejs]
- [Express](https://expressjs.com/pt-br/)
- [TypeScript][typescript]
- [React][reactjs]
- [React Native][rn]
- [Expo][expo]
- [SQLite](https://www.sqlite.org/index.html)

## 🖥️ Screenshots

#### Web Screenshot
<div>
   <img src="./.github/web-landing.png" width="400px">
   <img src="./.github/web-list.png" width="400px">
</div>

#### Mobile Screenshot
<div>
   <img src="./.github/mobile-home.png" width="180">
   <img src="./.github/mobile-favoritos.png" width="180">
</div>

<a id="layout"></a>
## 🔖 Figma

- Layout do projeto [Web](https://www.figma.com/file/GHGS126t7WYjnPZdRKChJF/Proffy-Web)
- Layout do projeto [Mobile](https://www.figma.com/file/e33KvgUpFdunXxJjHnK7CG/Proffy-Mobile?node-id=0%3A1)


<a id="como-usar"></a>
## :information_source: Como usar

- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado na máquina
  - Também, é **preciso** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.
  - Por fim, é **essencial** ter o **[Expo](https://expo.io/)** instalado de forma global na máquina

1. Faça um clone :

```sh
  $ git clone https://github.com/felipefrm/proffy.git
```

2. Executando a Aplicação:

```sh
  # Instale as dependências
  $ npm install

  ## Crie o banco de dados
  $ cd server
  $ npm run knex:migrate
  $ npm run knex:seed

  # Inicie a API
  $ npm start

  # Inicie a aplicação web
  $ cd web
  $ npm start

  # Inicie a aplicação mobile
  $ cd mobile
  $ npm start
```
<a id="como-contribuir"></a>
## 🤔 Como contribuir

- Faça um fork;
- Crie uma branch com a sua feature: `git checkout -b my-feature`;
- Faça um commit com suas mundaças: `git commit -m 'feat: My new feature'`;
- Dê um push para sua branch: `git push origin my-feature`.


<h4 align="center">
     Feito por 💜  <a href="https://www.linkedin.com/in/felipe-melo-a78504186/" target="_blank">Felipe Melo</a>
</h4>

[nodejs]: https://nodejs.org/
[typescript]: https://www.typescriptlang.org/
[expo]: https://expo.io/
[reactjs]: https://reactjs.org
[rn]: https://facebook.github.io/react-native/

