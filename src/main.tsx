import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/error-display/error-fallback.tsx";

import "./index.css";
import { StateProvider } from "./store/provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace("/")}
    >
      <StateProvider>
        <App />
      </StateProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
