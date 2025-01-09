
// ? Para constantes podemos sacarlas del componente
// ? No lo vuelve a reenderizar o procesar
// ? Si no se ocupa la referencia
// const newMessage = {
//     message: 'Hola Mundo',
//     title: 'fcodev',
// };
// ! Una  promesa o funcion asyncrona no se podría renderizar
const getResult = (a: number, b: number) => {
    return a + b;
}


export const FirstApp = ({
    title = defaultProps.title,
    subtitle = defaultProps.subtitle,
    name = defaultProps.name,
}: FirstAppProps) => {
    // console.log(title);

    return (
        <>
            {/* <h1>{getResult(1, 2)}</h1> */}
            <h1 data-testid="test-title">{title}</h1>
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <p>{subtitle}</p>
            <p>{name}</p>
        </>
    )
}

export interface FirstAppProps {
    title?: string
    subtitle?: string,
    name?: string,
}

const defaultProps: FirstAppProps = {
    title: 'No hay titulo',
    subtitle: 'No hay subtitulo',
    name: 'No hay nombre',
}