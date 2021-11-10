import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Search from '../../components/Search'
import Providers from "../../providers";
import api from "../../services";
import MockAdapter from "axios-mock-adapter";

const apiMock = new MockAdapter(api)

describe("Cep insert", () => {
    it("should be able of insert the CEP how the value", async () => {
        apiMock.onGet("/").replyOnce(200, {})
        render(
            <Providers>
                <Search/>
            </Providers>
        )
        const inputCep = screen.getByPlaceholderText("Insira o CEP")
        const buttonElement = screen.getByText("Buscar pelo CEP")
        fireEvent.change(inputCep, { target: { value: 36610000 } })
        fireEvent.click(buttonElement)
        await waitFor(() => {
            expect(inputCep).toHaveValue(36610000);
        })


    })
})

