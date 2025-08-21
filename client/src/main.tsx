import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Suppress MetaMask connection errors since we don't use Web3
const originalConsoleError = console.error;
console.error = (...args) => {
  const message = args.join(' ');
  if (message.includes('MetaMask') || 
      message.includes('Failed to connect to MetaMask') ||
      message.includes('chrome-extension://')) {
    return; // Suppress MetaMask-related errors
  }
  originalConsoleError.apply(console, args);
};

// Suppress unhandled promise rejections from MetaMask
window.addEventListener('unhandledrejection', (event) => {
  if (event.reason && 
      (event.reason.message?.includes('MetaMask') || 
       event.reason.toString().includes('MetaMask'))) {
    event.preventDefault();
  }
});

createRoot(document.getElementById("root")!).render(<App />);
