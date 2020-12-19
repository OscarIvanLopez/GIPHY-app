import { getGifs } from "../../helpers/getGifs";

describe("pruebas con getGifs", () => {
  test("debe de traer 10 elementos", async () => {
    const gifs = await getGifs("street fighter");

    expect(gifs.length).toBe(10);
  });

  test("no debe de mostrar nada", async () => {
    const gifs = await getGifs("");

    expect(gifs.length).toBe(0);
  });
});
