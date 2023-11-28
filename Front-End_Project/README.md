# Projeto Frontend - Lista de Contatos

Bem-vindo ao repositório do projeto frontend, um site robusto com funcionalidades de autenticação, gerenciamento de perfil, lista de contatos e visualização/download de PDFs.

## Funcionalidades

- **Autenticação:**

  - Crie uma conta ou faça login para acessar o sistema.
  - Altere informações do perfil, como nome, telefone e senha.
  - Exclua sua conta se necessário.

- **Gerenciamento de Contatos:**

  - Adicione novos contatos com nome e telefone.
  - Visualize uma lista de contatos com detalhes como nome, telefone e data de criação.

- **PDF:**
  - Visualize detalhes na lista de contatos em PDF.
  - Faça o download do PDF associado a lista de contatos.

## Tecnologias Utilizadas

- **React:** Biblioteca para construção da interface do usuário.
- **React Router:** Gerenciamento de rotas na aplicação.
- **React Hook Form:** Facilita a criação de formulários no React.
- **Axios:** Biblioteca para realizar requisições HTTP.
- **Zod:** Biblioteca para validação de esquemas de dados.
- **React-to-PDF:** Permite a geração de PDF a partir de componentes React.
- **React-Toastify:** Utilizado para exibir notificações na interface do usuário.

## Rotas

1. **Página de Login:**

   - **Rota:** http://localhost:3000/
   - **Descrição:** Rota principal que direciona os usuários para a página de login.

2. **Página de Registro:**

   - **Rota:** http://localhost:3000/register
   - **Descrição:** Rota destinada ao registro de novos usuários.

3. **Página do Usuário (Dashboard):**

   - **Rota:** http://localhost:3000/dashboard
   - **Descrição:** Rota protegida, acessível apenas para usuários autenticados. Apresenta a lista de contatos do usuário.

4. **Página de Visualização e Download de PDF:**
   - **Rota:** http://localhost:3000/pdf/download
   - **Descrição:** Rota protegida, requer autenticação. Permite a visualização e download de PDFs associados à lista de contatos do usuário.

#

Este arquivo contém as definições das rotas da aplicação. As rotas estão organizadas para permitir um fluxo de navegação intuitivo, garantindo a proteção de rotas sensíveis por meio da utilização de `ProtectedRoutes`. Certifique-se de configurar corretamente o Back-End para aproveitar todas as funcionalidades do projeto. A aplicação estará acessível em [http://localhost:3000](http://localhost:3000) que é obtida executando o Projeto Back-End.
