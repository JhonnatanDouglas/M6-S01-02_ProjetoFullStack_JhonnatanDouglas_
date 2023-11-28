# Projeto - Agenda de Contatos

### Descrição do Projeto

Este projeto é uma aplicação back-end desenvolvida em TypeScript/JavaScript usando o framework Express. A aplicação oferece funcionalidades relacionadas a usuários, contatos e autenticação, com segurança reforçada por meio do uso do bcryptjs para hash de senhas e jsonwebtoken para autenticação. O TypeORM é utilizado para a interação eficiente com o banco de dados PostgreSQL, proporcionando uma estrutura de código escalável e de fácil manutenção.

## Tecnologias Utilizadas

- [bcryptjs](https://www.npmjs.com/package/bcryptjs): Biblioteca para hashing de senhas.
- [dotenv](https://www.npmjs.com/package/dotenv): Utilizado para carregar variáveis de ambiente.
- [express](https://expressjs.com/): Framework web para Node.js.
- [express-async-errors](https://www.npmjs.com/package/express-async-errors): Tratamento de erros assíncronos no Express.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): Implementação de JSON Web Tokens para autenticação.
- [pg](https://www.npmjs.com/package/pg) e [pg-format](https://www.npmjs.com/package/pg-format): Drivers para interação com o banco de dados PostgreSQL.
- [reflect-metadata](https://www.npmjs.com/package/reflect-metadata): Biblioteca para refletir metadados em tempo de execução.
- [typeorm](https://typeorm.io/): ORM (Object-Relational Mapping) para Node.js e TypeScript.
- [zod](https://www.npmjs.com/package/zod): Biblioteca para validação de esquemas de dados.

### Dependências de Desenvolvimento

- [@types/bcryptjs](https://www.npmjs.com/package/@types/bcryptjs), [@types/express](https://www.npmjs.com/package/@types/express), [@types/jsonwebtoken](https://www.npmjs.com/package/@types/jsonwebtoken), [@types/pg-format](https://www.npmjs.com/package/@types/pg-format), [@types/uuid](https://www.npmjs.com/package/@types/uuid): Tipos de definição para pacotes usados no desenvolvimento.
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev): Ferramenta para execução de código TypeScript de forma rápida e eficiente durante o desenvolvimento.
- [typescript](https://www.typescriptlang.org/): Superset de JavaScript que adiciona tipagem estática ao código JavaScript.

Essas tecnologias são essenciais para o funcionamento, segurança e desenvolvimento eficiente desta aplicação back-end.

## Índice

- [Como Usar](#como-usar)
- [Importando o Arquivo Insomnia](#importando-o-arquivo-insomnia)
- [Rotas](#rotas)
  - [Autenticação](#autenticação)
    - [Login](#login)
  - [Usuários](#usuários)
    - [Criar Usuário - [ Desnecessário Token Bearer ]](#criar-usuário---desnecessario-token-bearer-)
    - [Listar Usuários - [ Necessário Token Bearer ]](#listar-usuários---necessario-token-bearer-)
    - [Obter Usuário - [ Necessário Token Bearer ]](#obter-usuário---necessario-token-bearer-)
    - [Atualizar Usuário - [ Necessário Token Bearer ]](#atualizar-usuário---necessario-token-bearer-)
    - [Remover Usuário - [ Necessário Token Bearer ]](#remover-usuário---necessario-token-bearer-)
  - [Contatos](#contatos)
    - [Criar Contato - [ Necessário Token Bearer ]](#criar-contato---necessario-token-bearer-)
    - [Listar Contatos - [ Necessário Token Bearer ]](#listar-contatos---necessario-token-bearer-)
    - [Atualizar Contato - [ Necessário Token Bearer ]](#atualizar-contato---necessario-token-bearer-)
    - [Remover Contato - [ Necessário Token Bearer ]](#remover-contato---necessario-token-bearer-)

## Como Usar

1. Clone este repositório.
2. Instale as dependências usando `npm install`.
3. Configure o banco de dados criando o arquivo `.env` e seguindo o exemplo que está em `.env.exemple`.
4. Após isso, execute as migrações do banco de dados usando `npm run typeorm migration:run -- -d src/data-source`.
5. Execute a aplicação usando `npm run dev`.

## Importando o Arquivo Insomnia

1. Abra o Insomnia.
2. Clique em `+` -> `Import`.
3. Clique na caixa de seleção, e agora selecione o arquivo `Insomnia_Project_Template.json`.
4. Agora você terá todas as requisições prontas para testar no Insomnia.

## Rotas

### Autenticação

#### Login

- **Rota:** `POST /login`
  - **Corpo da Requisição:**
    ```json
    {
      "email": "email@example.com",
      "password": "senha123"
    }
    ```
  - **Corpo de Resposta:**
    ```json
    {
      "token": "token",
      "user": {
        "id": "uuid",
        "name": "usuario",
        "email": "email@example.com",
        "telephone": "11988887777",
        "register_date": "2023-11-20T21:00:44.182Z"
      }
    }
    ```

#

### Usuários

#### Criar Usuário - [ `Desnecessário Token Bearer` ]

- **Rota:** `POST /users`
  - **Corpo da Requisição:**
    ```json
    {
      "name": "Nome do Usuário",
      "email": "email@example.com",
      "password": "senha123",
      "telephone": "123456789"
    }
    ```
  - **Corpo de Resposta:**
    ```json
    {
      "id": "uuid",
      "name": "Nome do Usuário",
      "email": "email@example.com",
      "telephone": "123456789",
      "register_date": "2023-11-20T00:00:00.000Z"
    }
    ```

#### Listar Usuários - [ `Necessário Token Bearer` ]

- **Rota:** `GET /users`
  - **Corpo de Resposta:**
    ```json
    [
      {
        "id": "uuid",
        "name": "Nome do Usuário",
        "email": "email@example.com",
        "telephone": "123456789",
        "register_date": "2023-11-20T00:00:00.000Z"
      }
      // ... outros usuários
    ]
    ```

#### Obter um Usuário - [ `Necessário Token Bearer` ]

- **Rota:** `GET /users/configs`
  - **Corpo de Resposta:**
    ```json
    {
      "id": "uuid",
      "name": "Nome do Usuário",
      "email": "email@example.com",
      "telephone": "123456789",
      "register_date": "2023-11-20T00:00:00.000Z"
    }
    ```

#### Atualizar um Usuário - [ `Necessário Token Bearer` ]

- **Rota:** `PATCH /users/configs`
  - **Corpo da Requisição:**
    ```json
    {
      "name": "Novo Nome do Usuário",
      "email": "novoemail@example.com",
      "password": "novasenha123",
      "telephone": "987654321"
    }
    ```
  - **Corpo de Resposta:**
    ```json
    {
      "id": "uuid",
      "name": "Novo Nome do Usuário",
      "email": "novoemail@example.com",
      "telephone": "987654321",
      "register_date": "2023-11-20T00:00:00.000Z"
    }
    ```

#### Remover um Usuário - [ `Necessário Token Bearer` ]

- **Rota:** `DELETE /users/configs`
  - Sem corpo de resposta.

#

### Contatos

#### Criar Contato - [ `Necessário Token Bearer` ]

- **Rota:** `POST /contacts`
  - **Corpo da Requisição:**
    ```json
    {
      "name": "Nome do Contato",
      "telephone": "987654321"
    }
    ```
  - **Corpo de Resposta:**
    ```json
    {
      "id": "uuid",
      "name": "Nome do Contato",
      "telephone": "987654321",
      "register_date": "2023-11-20T00:00:00.000Z"
    }
    ```

#### Listar Contatos - [ `Necessário Token Bearer` ]

- **Rota:** `GET /contacts`
  - **Corpo de Resposta:**
    ```json
    [
      {
        "id": "uuid",
        "name": "Nome do Contato",
        "telephone": "987654321",
        "register_date": "2023-11-20T00:00:00.000Z"
      }
      // ... outros contatos
    ]
    ```

#### Atualizar Contato - [ `Necessário Token Bearer` ]

- **Rota:** `PATCH /contacts/:contactId`
  - **Corpo da Requisição:**
    ```json
    {
      "name": "Novo Nome do Contato",
      "telephone": "999999999"
    }
    ```
  - **Corpo de Resposta:**
    ```json
    {
      "id": "uuid",
      "name": "Novo Nome do Contato",
      "telephone": "999999999",
      "register_date": "2023-11-20T00:00:00.000Z"
    }
    ```

#### Remover Contato - [ `Necessário Token Bearer` ]

- **Rota:** `DELETE /contacts/:contactId`

- Sem corpo de resposta.

## Autor

- **Nome:** Jhonnatan Araujo
- **Portfólio:** [https://portfolio-jhonnatandev.vercel.app/](https://portfolio-jhonnatandev.vercel.app/)
- **Github:** [JhonnatanDouglas](https://github.com/JhonnatanDouglas)
- **E-mail:** [jhonnatanaraujodev@gmail.com](mailto:jhonnatanaraujodev@gmail.com)

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.
