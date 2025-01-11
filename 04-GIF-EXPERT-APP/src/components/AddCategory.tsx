import React, { useState } from "react";

export const AddCategory = ({ onNewCategory }: AddCategoryProps) => {

    const [inputValue, setInputValue] = useState("");
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.value);
        setInputValue(e.target.value)

    }
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;
        // ? Agregamos en la primera posicion
        // setCategories((c) => [inputValue, ...c]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={(e) => onSubmit(e)} aria-label="form"
        >
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

export interface AddCategoryProps {
    // setCategories: React.Dispatch<React.SetStateAction<string[]>>
    onNewCategory: (newCategory: string) => void
}

