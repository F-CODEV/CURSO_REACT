/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_GPHY_API_KEY: string
    // más variables de entorno...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}