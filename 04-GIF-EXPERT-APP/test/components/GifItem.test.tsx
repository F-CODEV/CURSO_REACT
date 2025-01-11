import { describe, expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import React from "react";
import { GifItem } from '../../src/components/GifItem';
import { GifI } from "../../src/interfaces/search_response.interface";

describe('Pruebas en GifItem.tsx', () => {

    const testGif: GifI = {
        id: "26gYOdBrT3MKcTj3O",
        title: "Good Boy Wolf GIF by League of Legends",
        url: "https://media1.giphy.com/media/26gYOdBrT3MKcTj3O/giphy.gif?cid=e87f0e7df7uklzp8zf6nft5bwz1sw3d021cmn86pa6weua55&ep=v1_gifs_search&rid=giphy.gif&ct=g"

    }

    test('Debe hacer match con el snapshot', () => {
        const { container } = render(<GifItem key={"a"} {...testGif} />);
        expect(container).toMatchSnapshot();
    });
    test('Debe mostrar la imagen con el URL y ALT indicado', () => {
        render(<GifItem key={"a"} {...testGif} />);
        // ? Para ver como esta el componente renderizado
        // screen.debug();
        const { src, alt } = screen.getByRole('img') as HTMLImageElement;
        expect(src).toBe(testGif.url);
        expect(alt).toBe(testGif.title);
    });

    test('Debe mostrar el titulo en el componente', () => {
        render(<GifItem key={"a"} {...testGif} />);


        expect(screen.getByText(testGif.title)).toBeTruthy();

    });
});