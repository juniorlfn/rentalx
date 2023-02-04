<div align="center" id="top"> 
<img src="./assets/banner-ignite.png" alt="Finance Api" />

&#xa0;

</div>

<h1 align="center">Ignite | Trilha NodeJS: Projeto RentalX</h1>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=04D361&labelColor=000000?color=04D361&style=for-the-badge" alt="PRs welcome!" />
<img  alt="Repo size"  src="https://img.shields.io/github/repo-size/juniorlfn/rentalx?color=04D361&style=for-the-badge">
<img  alt="GitHub top language"  src="https://img.shields.io/github/languages/top/juniorlfn/rentalx?color=04d361&style=for-the-badge"> <img  alt="GitHub language count"  src="https://img.shields.io/github/languages/count/juniorlfn/rentalx?color=04d361&style=for-the-badge"><img alt="Licença" src="https://img.shields.io/github/license/juniorlfn/rentalx?color=04d361&style=for-the-badge">

</p>

<p align="center">
  <a href="#dart-sobre">Sobre</a> &#xa0; | &#xa0; 
  <a href="#clipboard-requisitos">Requisitos</a> &#xa0; | &#xa0;  
  <a href="#rocket-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#warning-pré-requisitos"> Pré requisitos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-começando">Começando</a> &#xa0; | &#xa0;
  <a href="#memo-licença">Licença</a> &#xa0; | &#xa0;
  <a href="https://github.com/juniorlfn" target="_blank">Autor</a>
</p>

<br>

## :dart: Sobre

Criando uma aplicação - API de alugueis de carros, projeto do curso Ignite trilha Nodejs da Rocketseat :rocket:

<p align="right">(<a href="#top">Voltar para o topo</a>)</p>

## :clipboard: Requisitos

#### Cadastro de carro

##### Requisitos funcionais

- [ ] Deve ser possível cadastrar um novo carro. Requisitos não funcionais Não há Regras de negócio
- [ ] Não deve ser possível cadastrar um carro com uma placa já existente.
- [ ] O carro deve ser cadastrado com disponibilidade=true por padrão.
- [ ] O usuário responsável pelo cadastro deve ser um usuário administrador.

#### Listagem de carros

##### Requisitos funcionais

- [ ] Deve ser possível listar todos os carros disponíveis.
- [ ] deve ser possível listar todos os carros pelo nome da categoria.
- [ ] deve ser possível listar todos os carros pelo nome da marca.
- [ ] deve ser possível listar todos os carros pelo nome do carro. Requisitos não funcionais Não há Regras de negócio
- [ ] O usuário não precisa estar logado no sistema para listar os carros.

#### Cadastro de especificação no carro

##### Requisitos funcionais

- [ ] Deve ser possível cadastrar uma especificação para um carro.

Requisitos não funcionais Não há Regras de negócio

- [ ] Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
- [ ] Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
- [ ] o usuário responsável pelo cadastro deve ser um administrador.

#### Cadastro de imagens do carro

##### Requisitos funcionais

- [ ] Deve ser possível cadastrar a imagem do carro Requisitos não funcionais
- [ ] utilizar o multer para upload dos arquivos Regras de negócio
- [ ] O usuário pode cadastrar mais de uma imagem para o mesmo carro.
- [ ] o usuário responsável pelo cadastro deve ser um administrador.

#### Alugar o carro

##### Requisitos funcionais

- [ ] Deve ser possível cadastrar um aluguel Regras de negócio
- [ ] O aluguel deve ter duração mínima de 24 hora.
- [ ] não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
- [ ] não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
- [ ] O usuário deve estar logado na aplicação

#### Devolução do carro

##### Requisitos funcionais

- [ ] Deve ser possível realizar a devolução de um carro Regras de negócio
- [ ] se o carro for devolvido com menos de 24horas, deverá cobrar a diária completa.
- [ ] Ao realizar a devolução, o carro deverá ser liberado para outro aluguel.
- [ ] Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel.
- [ ] Ao realizar a devolução, deverá ser calculado o total do aluguel.
- [ ] Caso o horário de devolução seja superior ao horário previsto de entrega, deverá ser cobrado multa proporcionou aos dias de atraso.
- [ ] caso haja multa, deverá ser somado ao total do aluguel
- [ ] O usuário deve estar logado na aplicação

#### Listagem de alugueis para usuário

##### Requisitos funcionais

- [ ] Deve ser possível realizar a busca de todos os alugueis para o usuário RN
- [ ] o usuário deve estar logado na aplicação

#### recuperar senha

##### Requisitos funcionais

- [ ] deve ser possível o usuário recuperar a senha informando o e-email
- [ ] O usuário deve receber um e-email com o passo a passo para a recuperação da senha
- [ ] O Usuário deve conseguir inserir uma nova senha RN
- [ ] o usuário precisa informar uma nova senha

- [ ] o link enviado para a recuperação deve expirar em 3 horas

<p align="right">(<a href="#top">Voltar para o topo</a>)</p>

## :rocket: Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [ExpressJS](https://expressjs.com/pt-br/)

<p align="right">(<a href="#top">Voltar para o topo</a>)</p>

## :warning: Pré requisitos

Antes de começar :checkered_flag:, você precisa ter o [Git](https://git-scm.com) e o [Node](https://nodejs.org/en/) instalados em sua maquina.

<p align="right">(<a href="#top">Voltar para o topo</a>)</p>

## :checkered_flag: Começando

```bash
# Clone este repositório
$ git clone https://github.com/juniorlfn/rentalx
# Mude o diretório para a pasta do projeto
$ cd rentalx
# Instale as dependências
$ npm install
# Para iniciar
$ npm run dev
```

<p align="right">(<a href="#top">Voltar para o topo</a>)</p>

## :memo: Licença

Este projeto está sob licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

Feito com :heart: por <a href="https://github.com/juniorlfn" target="_blank">Leonardo</a>

&#xa0;

<p align="right">(<a href="#top">Voltar para o topo</a>)</p>
