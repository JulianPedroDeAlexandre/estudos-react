# Exercício React - Cadastro, Login e Remoção com Tabela

Este projeto é um exercício em **React**, implementando um fluxo simples de cadastro de usuários, login e remoção, utilizando hooks (`useState`) e componentes funcionais.

## Funcionalidades

- Cadastro de usuários com nome e senha.
- Login verificando se o usuário existe na tabela.
- Remoção de usuários quando nome e senha correspondem.
- Modal para exibir mensagens de feedback.
- Suporte à tecla Enter para acionar o login.

## Estrutura de Pastas

src/
├── App.jsx
├── globals/
│ └── style.css
├── form/
│ ├── Form.jsx
│ └── Form.module.css
├── table/
│ ├── Table.jsx
│ └── Table.module.css
└── modal/
├── Modal.jsx
└── Modal.module.css


## Como Executar

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/exercicio-react.git

2. Instale as dependências:
    ```bash
    npm install

3. Execute o projeto:
    ```bash
    npm run dev

4. Acesse no navegador:
    ```bash
    http://localhost:5173

Tecnologias Utilizadas

React

Vite

CSS Modules

Aprendizados

Uso de useState para gerenciamento de estado.

Manipulação de arrays com map e filter.

Validação e feedback ao usuário.

Captura da tecla Enter com onKeyDown.

Componentização e organização de código.