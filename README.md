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


### Colaboradores
<hr>
<table>
  <tr>
    <td align="center">
      <a href="http://github.com/johnvictor2017">
        <img src="https://avatars0.githubusercontent.com/u/30505330?s=400&v=4" width="100px;" alt="John Victor"/>
        <br />
        <sub><b>John Victor</b></sub>
      </a><br />
      <a href="https://github.com/startworks-group/starttm-backend/commits?author=johnvictor2017" title="Code">💻</a>
    </td>
    <td align="center">
      <a href="http://github.com/marlonsecundo">
        <img src="https://avatars0.githubusercontent.com/u/9901761?s=400&v=4" width="100px;" alt="Marlon Secundo"/>
        <br />
        <sub><b>Marlon Secundo</b></sub>
      </a><br />
      <a href="https://github.com/startworks-group/starttm-backend/commits?author=marlonsecundo" title="Code">💻</a>
    </td>
    <td align="center">
      <a href="http://github.com/guimcarneiro">
        <img src="https://avatars3.githubusercontent.com/u/32914505?s=400&v=4" width="100px;" alt="Guilherme Carneiro"/>
        <br />
        <sub><b>Guilherme Carneiro</b></sub>
      </a><br />
      <a href="https://github.com/startworks-group/starttm-backend/commits?author=guimcarneiro" title="Code">💻</a>
    </td>
  </tr>
</table>
