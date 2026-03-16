import { Client } from "../../../../src/entreprise/entities/client/client.entity.js";

test("Deve retornar o nome como uma string", () => {
    const client = new Client("Julio", "Dias", "julio@example.com", "12345678900");
    expect(client.firtsName).toBe("Julio");
});

test("Deve retornar o sobrenome como uma string", () => {
    const client = new Client("Julio", "Dias", "julio@example.com", "12345678900");
    expect(client.lastName).toBe("Dias");
});

test("Deve retornar o email como uma string", () => {
    const client = new Client("Julio", "Dias", "julio@example.com", "12345678900");
    expect(client.email).toBe("julio@example.com");
});

test("Deve retornar o cpf como uma string", () => {
    const client = new Client("Julio", "Dias", "julio@example.com", "12345678900");
    expect(client.cpf).toBe("12345678900");
});

test("Deve lançar um erro se o nome for vazio", () => {
    expect(() => new Client("", "Dias", "julio@example.com", "12345678900")).toThrow("O nome é obrigatório e deve ter pelo menos 3 caracteres");
});

test("Deve lançar um erro se o sobrenome for vazio", () => {
    expect(() => new Client("Julio", "", "julio@example.com", "12345678900")).toThrow("O sobrenome é obrigatório e deve ter pelo menos 3 caracteres");
});

test("Deve lançar um erro se o email for vazio", () => {
    expect(() => new Client("Julio", "Dias", "", "12345678900")).toThrow("O email é obrigatório e deve ter pelo menos 3 caracteres e conter '@'");
});

test("Deve lançar um erro se o cpf for vazio", () => {
    expect(() => new Client("Julio", "Dias", "julio@example.com", "")).toThrow("O cpf é obrigatório e deve ter pelo menos 11 caracteres");
});