import { RouterProvider } from "react-router-dom";
import "./App.css";
import { theme } from "@styles/theme";
import { router } from "./router";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
