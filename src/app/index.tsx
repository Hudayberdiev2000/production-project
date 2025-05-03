import { createRoot } from "react-dom/client"
import App from "./app"
import { BrowserRouter } from "react-router-dom"
import ThemeProvider from "./providers/ThemeProvider"
import 'shared/config/i18n/i18n'
import {ErrorBoundary} from "react-error-boundary";
import {PageError} from "widgets/PageError/PageError";

const container = document.getElementById("root")
const root = createRoot(container!)

root.render(
  <BrowserRouter>
      <ErrorBoundary fallback={<PageError />}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
  </BrowserRouter>
)
