import React from "react";
import { render, screen } from "@testing-library/react";
import Search from '../../components/Search'

describe("Input Component", () => {
    it("should show an input", () => {
		render(<Search/>)
		const inputElement = screen.getByPlaceholderText("Insira o CEP")
        expect(inputElement).toBeInTheDocument();
	})
})
describe("Button Component", () => {
    it("should show an Button", () => {
		render(<Search/>)
		const inputButton = screen.getByText("Buscar pelo CEP")
        expect(inputButton).toBeDisabled()
	})
})