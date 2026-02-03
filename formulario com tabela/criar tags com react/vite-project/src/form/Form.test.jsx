import React from "react";
import { render, screen } from "@testing-library/react";
import Form from "./Form";

test("renderiza inputs e botões", () => {
  render(
    <Form
      nome=""
      senha=""
      handleName={() => {}}
      handleSenha={() => {}}
      cadastrar={() => {}}
      entrar={() => {}}
      remover={() => {}}
      onKeyDown={() => {}}
    />
  );

  expect(screen.getByLabelText(/Nome/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Senha/i)).toBeInTheDocument();
  expect(screen.getByText(/Cadastrar/i)).toBeInTheDocument();
  expect(screen.getByText(/Entrar/i)).toBeInTheDocument();
  expect(screen.getByText(/Remover/i)).toBeInTheDocument();
});
