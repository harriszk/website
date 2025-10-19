interface ViteTypeOptions {
    // By adding this line, you can make the type of ImportMetaEnv strict
    // to disallow unknown keys.
    // strictImportMetaEnv: unknown
}

interface ImportMetaEnv {
    readonly VITE_BASE_URL: string;
    readonly VITE_ROUTER_BASE_URL: string;
    readonly VITE_APP_MODE: "development" | "production";
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
