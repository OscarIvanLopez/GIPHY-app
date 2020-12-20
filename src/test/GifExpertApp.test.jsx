import React from "react";
import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe("pruebas en el componente <GifExpertApp />", () => {
  test("debe de mostrar correctamente el componente", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar una lista de categorias", () => {
    const categories = ["street fighter", "call of duty warzone"];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
