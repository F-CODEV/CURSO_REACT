import { useState } from "react";

export const useForm = <T extends object>(initialForm: T) => {
    const [formState, setFormState] = useState(initialForm);


    const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        // ? Propiedades computadas
        setFormState((f) => ({ ...f, [name]: value }))
    }

    const onResetForm = () => {
        setFormState(initialForm)
    }

    return { ...formState, onInputChange, onResetForm }
}
