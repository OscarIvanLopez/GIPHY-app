import React from "react";
import { shallow } from "enzyme";
import useFetchGifs from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("pruebas en el hook useFetchGifs", () => {
  test("debe de retornar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("street fighter"));
    const { data, loading } = result.current;
    // console.log(data, loading);

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test("debe de retornar un arreglo de imgs y el loading en false", () => {
    const { result } = renderHook(() => useFetchGifs("street fighter"));

    const { data, loading } = result.current;
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });
});
