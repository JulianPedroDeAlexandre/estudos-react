import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("cadastra usuário corretamente", () => {
  render(<App />);
  
  fireEvent.change(screen.getByLabelText(/Nome/i), { target: { value: "Julian" } });
  fireEvent.change(screen.getByLabelText(/Senha/i), { target: { value: "123" } });
  fireEvent.click(screen.getByText(/Cadastrar/i));
  
  expect(screen.getByText("Julian")).toBeInTheDocument();
});

test("login incorreto mostra mensagem de erro", () => {
  render(<App />);
  
  fireEvent.change(screen.getByLabelText(/Nome/i), { target: { value: "Maria" } });
  fireEvent.change(screen.getByLabelText(/Senha/i), { target: { value: "abc" } });
  fireEvent.click(screen.getByText(/Entrar/i));
  
  expect(screen.getByText(/Nenhum usuário cadastrado/i)).toBeInTheDocument();
});
