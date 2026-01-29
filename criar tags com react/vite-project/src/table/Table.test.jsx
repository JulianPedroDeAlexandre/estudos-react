import React from "react";
import { render, screen } from "@testing-library/react";
import Table from "./Table";

test("renderiza usuários na tabela", () => {
  const usuarios = [{ nome: "Julian", senha: "123" }];
  render(<Table adiciona={usuarios} />);
  
  expect(screen.getByText("Julian")).toBeInTheDocument();
  expect(screen.getByText("123")).toBeInTheDocument();
});
