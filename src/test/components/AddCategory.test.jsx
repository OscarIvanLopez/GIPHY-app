import React from "react";
import "@testing-library/jest-dom";
import { AddCategory } from "../../components/AddCategory";
import { shallow } from "enzyme";

describe("pruebas en el componente <AddCategory />", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola mundo";
    input.simulate("change", { target: { value } });
    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  test("No debe de postear la informacion con submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test("debe de llamar el setCategories y limpiar la caja de texto", () => {
    const value = "hola banda";
    // 1.- simular el inputChange.
    wrapper.find("input").simulate("change", { target: { value } });

    // 2.- simular el submit.
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    // 3.- setCategarioes se debe de haber llamado.
    expect(setCategories).toHaveBeenCalled();
    // expect(setCategories).toHaveBeenCalledTimes(2);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    // 4.-el valor del input debe de estar vacio.
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
