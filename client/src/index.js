import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { GlobalStyle } from "./GlobalStyle";
import { store } from "./state/store";
import { QueryClient, QueryClientProvider } from "react-query";

const container = document.getElementById("root");
const root = createRoot(container);

const queryClient = new QueryClient();

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <App />
    </QueryClientProvider>
  </Provider>
  // </React.StrictMode>
);
