import { useEffect, useState } from "react";

export interface useFetchStateI {
    data: any,
    isLoading: boolean,
    hasError: boolean,
    errorMessage: string | null
}

const localCache: { [key: string]: any } = {

}

const initialState: useFetchStateI = {
    isLoading: true,
    data: null,
    hasError: false,
    errorMessage: null,
}

export const useFetch = (url: string) => {

    const [state, setState] = useState<useFetchStateI>(initialState);

    useEffect(() => {
        getFetch();


    }, [url])

    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            errorMessage: null,
        });
    }

    const getFetch = async () => {
        if (localCache[url]) {
            setState({
                data: localCache[url]!,
                isLoading: false,
                hasError: false,
                errorMessage: null,
            });
            return;
        }
        setLoadingState();
        const resp = await fetch(url);

        await new Promise(resolve => setTimeout(resolve, 1500));

        if (!resp.ok) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                errorMessage: resp.statusText,
            });
            return;
        }
        const data = await resp.json();

        setState({
            data: data,
            isLoading: false,
            hasError: false,
            errorMessage: null,
        });

        // ? Cache en memoria
        localCache[url] = data;

    }






    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }
}
