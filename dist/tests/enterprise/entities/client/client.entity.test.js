import { Client } from "../../../../src/entreprise/entities/client/client.entity.js";
test("Deve retornar o nome como uma string", () => {
    const client = new Client("Julio", "Dias", "julio@example.com", "12345678900");
    expect(client.firtsName).toBe("Julio");
});
//# sourceMappingURL=client.entity.test.js.map