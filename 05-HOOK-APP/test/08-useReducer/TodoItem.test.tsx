import { beforeEach, describe, expect, jest, test } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { TodoI } from '../../src/08-useReducer/todo-reducer';
import { TodoItem } from '../../src/08-useReducer/TodoItem';


describe('Pruebas en TodoItem.tsx', () => {

    const testTodo: TodoI = {
        id: 1,
        description: 'Test Todo',
        done: false,
    }
    // ? Mock de una funcion
    const mockOnDeleteTodo = jest.fn();
    const mockOnToggleTodo = jest.fn();
    // ? Resetear mocks
    beforeEach(() => {
        jest.clearAllMocks();
    });


    test('Debe de mostrar el Todo Pendiente de completar', () => {
        render(<TodoItem
            todo={testTodo}
            onDeleteTodo={mockOnDeleteTodo}
            onToggleTodo={mockOnToggleTodo}
        />);

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe("list-group-item d-flex justify-content-between");
        // ? el span tiene aria-label="span"
        const spanElement = screen.getByLabelText('span');
        // ! Tiene un espacio en blanco por la clase dinamica
        expect(spanElement.className).toBe("align-self-center ");
        // expect(spanElement.className).toContain("align-self-center");
        expect(spanElement.className).not.toContain("text-decoration-line-through");
    });


    test('Debe de mostrar el Todo completado', () => {
        testTodo.done = true;

        render(<TodoItem
            todo={testTodo}
            onDeleteTodo={mockOnDeleteTodo}
            onToggleTodo={mockOnToggleTodo}
        />);


        // ? el span tiene aria-label="span"
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain("text-decoration-line-through");
    });

    test('El span debe llamar el ToggleTodo cuando se hace click', () => {
        render(<TodoItem
            todo={testTodo}
            onDeleteTodo={mockOnDeleteTodo}
            onToggleTodo={mockOnToggleTodo}
        />);

        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);
        expect(mockOnToggleTodo).toHaveBeenCalledWith(testTodo.id);
    });

    test('El boton debe llamar el DeleteTodo cuando se hace click', () => {
        render(<TodoItem
            todo={testTodo}
            onDeleteTodo={mockOnDeleteTodo}
            onToggleTodo={mockOnToggleTodo}
        />);

        const btnElement = screen.getByRole('button');
        fireEvent.click(btnElement);
        expect(mockOnDeleteTodo).toHaveBeenCalledWith(testTodo.id);
    });

})