import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "./Modal";

test("não renderiza quando modal está vazio", () => {
  render(<Modal modal="" fechar={() => {}} />);
  expect(screen.queryByText(/Fechar/i)).toBeNull();
});

test("renderiza mensagem e botão fechar", () => {
  const fecharMock = jest.fn();
  render(<Modal modal="Login efetuado com sucesso" fechar={fecharMock} />);
  
  expect(screen.getByText(/Login efetuado com sucesso/i)).toBeInTheDocument();
  fireEvent.click(screen.getByText(/Fechar/i));
  expect(fecharMock).toHaveBeenCalled();
});
