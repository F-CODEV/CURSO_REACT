import { describe, expect, jest, test } from "@jest/globals";
import { render, screen } from '@testing-library/react';
import React from "react";
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodo } from "../../src/hooks/useTodo";

jest.mock("../../src/hooks/useTodo");

describe('Pruebas en TodoApp.tsx', () => {

    (useTodo as jest.MockedFunction<typeof useTodo>).mockReturnValue(
        {
            todos: [
                { id: 1, description: 'Todo 1', done: false },
                { id: 2, description: 'Todo 2', done: true },
            ],
            handleDeleteTodo: jest.fn(),
            handleNewTodo: jest.fn(),
            handleToggleTodo: jest.fn(),
            pendingTodosCount: 1,
            todosCount: 2

        });

    test('Debe de mostrar el componente correctamente', () => {
        render(<TodoApp />);
        // screen.debug();
        expect(screen.getByText('Todo 1')).toBeTruthy();
        expect(screen.getByText('Todo 2')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();
    });

});