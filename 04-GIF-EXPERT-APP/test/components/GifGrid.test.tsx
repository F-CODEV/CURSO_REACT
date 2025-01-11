import { describe, expect, jest, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import React from "react";
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
import { GifI } from "../../src/interfaces/search_response.interface";

// ? Para hacer un mock de mi custom hook
jest.mock("../../src/hooks/useFetchGifs");

describe('Pruebass en GifGrid.tsx', () => {
    const testCategory = 'One Punch';;

    test('Debe de mostrar el loading inicialmente', () => {
        (useFetchGifs as jest.MockedFunction<typeof useFetchGifs>).mockReturnValue({
            gifs: [],
            isLoading: true,
        });
        render(<GifGrid category={testCategory} />)
        // screen.debug();
        expect(screen.getByText('Cargando...')).toBeTruthy();
        expect(screen.getByText(testCategory)).toBeTruthy();
    });

    test('Debe mostrar items cuando se cargan las imagenes', () => {
        const gifs: GifI[] = [
            {
                id: 'iiii',
                title: 'ttt',
                url: 'uuu'
            },
            {
                id: 'ddddd',
                title: 'eeee',
                url: 'rrr'
            },
        ];
        (useFetchGifs as jest.MockedFunction<typeof useFetchGifs>).mockReturnValue({
            gifs: gifs,
            isLoading: false,
        });
        render(<GifGrid category={testCategory} />)
        // screen.debug();
        expect(screen.getAllByRole('img').length).toBe(gifs.length)
    });

})