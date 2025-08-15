// Utilidad para manejar rutas de assets en diferentes entornos
export const getAssetPath = (path) => {
  // En producción, GitHub Pages sirve desde /portfolio/
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
  return `${basePath}${path}`;
};

export default getAssetPath;
