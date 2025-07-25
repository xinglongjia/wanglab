import type { ContentData } from "../types/content";

export async function loadContent<T extends ContentData>(path: string): Promise<T> {
    try {
      const response = await fetch(path);
      if (!response.ok) {
        throw new Error(`Failed to load content from ${path}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error loading content:', error);
      throw error;
    }
  } 

export async function loadContents<T extends ContentData>(path: string): Promise<T[]> {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to load content from ${path}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error loading content:', error);
    return [];
  }
} 