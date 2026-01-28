# Exercício React - Cadastro, Login e Remoção com Tabela

Este projeto é um exercício em **React** que implementa um fluxo simples de cadastro de usuários, login e remoção, utilizando **hooks** (`useState`) e componentes funcionais.

## Funcionalidades

- **Cadastro**: adiciona um usuário com nome e senha à tabela.
- **Login**: verifica se o nome e senha digitados existem na tabela.
- **Remoção**: exclui um usuário da tabela quando nome e senha correspondem.
- **Modal**: exibe mensagens de feedback (sucesso, erro, avisos).
- **Tecla Enter**: dispara ações contextuais:
  - Cadastro quando não há dados preenchidos.
  - Login quando há usuários cadastrados.
  - Remoção quando nome e senha correspondem.
  - Fechamento do modal quando ativo.

## Estrutura de Pastas

src/
├── App.jsx
├── globals/
│   └── style.css
├── form/
│   ├── Form.jsx
│   └── Form.module.css
├── table/
│   ├── Table.jsx
│   └── Table.module.css
└── modal/
├── Modal.jsx
└── Modal.module.css

Código

## Como executar

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/exercicio-react.git
Instale as dependências:

bash
npm install
Execute o projeto:

bash
npm run dev
Acesse no navegador:

Código
http://localhost:5173
Tecnologias utilizadas
React

Vite (para ambiente de desenvolvimento)

CSS Modules (para estilização)

Aprendizados
Uso de useState para gerenciar estado local.

Manipulação de arrays com map e filter.

Validação de inputs e feedback ao usuário.

Captura da tecla Enter com onKeyDown e preventDefault.

Componentização e reutilização de lógica.