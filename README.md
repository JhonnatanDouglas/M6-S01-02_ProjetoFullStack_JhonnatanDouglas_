# Projeto FullStack - Agenda de Contatos

O projeto Agenda de Contatos é um projeto FullStack que oferece funcionalidades de gerenciamento de usuários, contatos, autenticação e interação com um banco de dados PostgreSQL. O Back-End foi desenvolvido em TypeScript/JavaScript usando o framework Express, enquanto o Front-End é construído com React e TypeScript utilizando o Vite.

## Figma

Você pode visualizar o design do projeto no Figma [CLIQUE AQUI](https://www.figma.com/file/zWNHZTOPqTqZny6OaF8SG0/Agenda-de-Contatos?type=design&node-id=0%3A1&mode=design&t=0rl7sjE3LVl3As6G-1).

## Índice

- [Instruções de Instalação/Teste](#instruções-de-instalaçãoteste)
  - [Backend](#backend)
  - [Frontend](#frontend)
  - [Teste no Insomnia](#teste-no-insomnia)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Backend](#backend-1)
  - [Frontend](#frontend-1)
- [Funcionalidades no Front-End](#funcionalidades-no-front-end)
- [Páginas no Front-End](#páginas-no-front-end)
- [Rotas](#rotas)
  - [Autenticação](#autenticação)
    - [Login](#login)
  - [Usuários](#usuários)
    - [Criar Usuário](#criar-usuário)
    - [Listar Usuários](#listar-usuários)
    - [Obter Usuário](#obter-usuário)
    - [Atualizar Usuário](#atualizar-usuário)
    - [Remover Usuário](#remover-usuário)
  - [Contatos](#contatos)
    - [Criar Contato](#criar-contato)
    - [Listar Contatos](#listar-contatos)
    - [Atualizar Contato](#atualizar-contato)
    - [Remover Contato](#remover-contato)
- [Autor](#autor)
- [Contribuição](#contribuição)

## Instruções de Instalação/Teste

### Backend

1. Clone o repositório.
2. Abra o terminal do VSCode com <strong>" CTRL + J "</strong> e navegue até a pasta `Back-End_Project` com os comandos `cd Desafio-Fullstack_JhonnatanDouglas/` e depois `cd Back-End_Project/`.
3. Execute o comando `npm install` para instalar as dependências.
4. Configure o arquivo `.env` de acordo com o arquivo de exemplo `.env.example`.
5. Execute as migrações do banco de dados digitando no terminal `npm run typeorm migration:run -- -d src/data-source`.
6. Inicie o servidor com `npm run dev`. Ele será executado em `http://localhost:${PORT}/`.

### Frontend

1. Agora que o servidor está rodando no terminal, abra um novo terminal usando o atalho do VSCode <strong>" CTRL + SHIFT + ` "</strong> ou indo até <strong>Terminal > Novo Terminal</strong>.
2. Com este novo terminal aberto, entre na pasta do `Front-End_Project` com os comandos `cd Desafio-Fullstack_JhonnatanDouglas/` e depois `cd Front-End_Project/`.
3. Execute o comando `npm install` para instalar as dependências.
4. Após isso, execute o comando `npm run dev`.
5. Acesse o endereço fornecido `(por exemplo, "http://localhost:5173/")` no navegador.

## Tecnologias Utilizadas

### Backend

- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express](https://expressjs.com/)
- [express-async-errors](https://www.npmjs.com/package/express-async-errors)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [pg](https://www.npmjs.com/package/pg)
- [pg-format](https://www.npmjs.com/package/pg-format)
- [reflect-metadata](https://www.npmjs.com/package/reflect-metadata)
- [typeorm](https://typeorm.io/)
- [zod](https://www.npmjs.com/package/zod)

### Frontend

- [@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers)
- [@types/react-modal](https://www.npmjs.com/package/@types/react-modal)
- [axios](https://www.npmjs.com/package/axios)
- [react](https://reactjs.org/)
- [react-dom](https://reactjs.org/docs/react-dom.html)
- [react-hook-form](https://react-hook-form.com/)
- [react-modal](https://www.npmjs.com/package/react-modal)
- [react-router-dom](https://reactrouter.com/web/guides/quick-start)
- [react-to-pdf](https://www.npmjs.com/package/react-to-pdf)
- [react-toastify](https://www.npmjs.com/package/react-toastify)
- [zod](https://www.npmjs.com/package/zod)

## Funcionalidades no Front-End

- **Autenticação:**

  - Crie uma conta ou faça login para acessar o sistema.
  - Altere informações do perfil, como nome, telefone e senha.
  - Exclua sua conta se necessário.

- **Gerenciamento de Contatos:**

  - Adicione novos contatos com nome e telefone.
  - Visualize uma lista de contatos com detalhes como nome, telefone e data de criação.

- **PDF:**
  - Visualize detalhes na lista de contatos em PDF.
  - Faça o download do PDF associado à lista de contatos.

## Páginas no Front-End

1. **Página de Login:**

   - **Rota:** http://localhost:3000`/`
   - **Descrição:** Rota principal que direciona os usuários para a página de login.

2. **Página de Registro:**

   - **Rota:** http://localhost:3000`/register`
   - **Descrição:** Rota destinada ao registro de novos usuários.

3. **Página do Usuário (Dashboard):**

   - **Rota:** http://localhost:3000`/dashboard`
   - **Descrição:** Rota protegida, acessível apenas para usuários logados. Apresenta a lista de contatos do usuário.

4. **Página de Visualização e Download de PDF:**
   - **Rota:** http://localhost:3000`/pdf/download`

- **Descrição:** Rota protegida, requer login. Permite a visualização e download de PDFs associados à lista de contatos do usuário.

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

### Usuários

#### Criar Usuário

Auth: `Desnecessário Token Bearer`

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

#### Listar Usuários

Auth: `Necessário Token Bearer`

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

#### Obter um Usuário

Auth: `Necessário Token Bearer`

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

#### Atualizar um Usuário

Auth: `Necessário Token Bearer`

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

#### Remover um Usuário

Auth: `Necessário Token Bearer`

- **Rota:** `DELETE /users/configs`
  - Sem corpo de resposta.

### Contatos

#### Criar Contato

Auth: `Necessário Token Bearer`

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

#### Listar Contatos

Auth: `Necessário Token Bearer`

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

#### Atualizar Contato

Auth: `Necessário Token Bearer`

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

#### Remover Contato

Auth: `Necessário Token Bearer`

- **Rota:** `DELETE /contacts/:contactId`

- Sem corpo de resposta.

## Autor

- **Nome:** Jhonnatan Douglas
- **Portfólio:** [https://portfolio-jhonnatandev.vercel.app/](https://portfolio-jhonnatandev.vercel.app/)
- **Github:** [JhonnatanDouglas](https://github.com/JhonnatanDouglas)
- **E-mail:** [jhonnatanaraujodev@gmail.com](mailto:jhonnatanaraujodev@gmail.com)

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.
