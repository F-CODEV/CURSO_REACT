export const getEnvironments = () => {
    // ? Para cargarlos
    import.meta.env;

    return {
        ...import.meta.env
    }

}