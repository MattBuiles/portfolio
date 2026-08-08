// Rutas de assets. Con Next basePath="/portfolio", los archivos de /public se
// sirven bajo /portfolio tanto en dev como en el export estático.
export const getAssetPath = (path) => `/portfolio${path}`;

export default getAssetPath;
