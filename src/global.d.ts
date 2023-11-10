export declare global {
  interface Window {
    language: string;
    changeLanguage(newLanguage: string): void;
  }
}
