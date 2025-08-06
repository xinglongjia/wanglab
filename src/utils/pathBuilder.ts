// src/utils/pathBuilder.ts

/**
 * Builds a path relative to the base URL set by Vite (`import.meta.env.BASE_URL`).
 * Use for images, media, and other static assets inside the `public` folder.
 *
 * @param relativePath - Relative path from the `public` folder, e.g., "assets/images/logo.png"
 * @returns Full URL string to be used in `src`, `href`, etc.
 */
export function buildAssetPath(relativePath: string | undefined ): string {
    if (!relativePath) return '';
    
    const baseUrl = import.meta.env.BASE_URL ?? '/';
    return `${baseUrl}${relativePath}`.replace(/\/\/+/g, '/'); // clean double slashes
  }
  