export {};

declare global {
  interface Window {
    openLoanApplication: () => void;
  }
}