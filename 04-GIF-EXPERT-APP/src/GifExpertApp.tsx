import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    // ! LOS HOOKS NO DEBEN IR DE MANERA CONDICIONAL
    // if (true) {
    //     const [categories, setCategories] = useState(['One Punch', 'Goku']);
    // }
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory: string) => {
        if (categories.includes(newCategory)) return;
        setCategories((c) => [newCategory, ...c,]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory

                onNewCategory={(value) => onAddCategory(value)}
            />


            {categories.map((e, index) =>
            (
                <GifGrid key={e} category={e} />
            )
            )}

        </>
    )
}
