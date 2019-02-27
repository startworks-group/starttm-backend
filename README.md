# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Configuração
Clone o projeto e execute os seguintes comandos:

```shell
$ git clone git@github.com:startworks-group/starttm-api.git
$ cd starttm-api
$ npm install
$ cp .env.example .env
$ adonis key:generate
$ adonis migration:run
```
Altere o arquivo .env com suas configurações locais, como por exemplo, as informações do banco de dados (DB_HOST, DB_DATABASE, DB_USERNAME, DB_PASSWORD, etc)
Lembre-se se alterar o DB_HOST para 127.0.0.1

Inicie o servidor e acesse via http://127.0.0.1:3333 🤞🙏⏱👍
```
$ adonis serve   
```