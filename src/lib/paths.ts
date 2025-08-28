/**
 * Get the correct base path for assets based on environment
 * Development: /
 * Production: /modern-portfolio-react/
 */
export function getBasePath(): string {
  return import.meta.env.DEV ? '/' : '/modern-portfolio-react/'
}

/**
 * Get the correct asset path with base path prefix
 * @param assetPath - The asset path relative to public folder (e.g., '/images/VZ.png')
 * @returns Complete asset path with proper base path
 */
export function getAssetPath(assetPath: string): string {
  const basePath = getBasePath()
  // Remove leading slash from assetPath if present to avoid double slashes
  const cleanAssetPath = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath
  return `${basePath}${cleanAssetPath}`
}