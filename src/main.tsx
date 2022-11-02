import { StrictMode } from "react"
import ReactDOM from "react-dom/client"

import App from "./App"

import "./polyfills"

const rootElement = document.getElementById("root");

(async function () {
  while (true) {
    if (!rootElement) {
      await new Promise(r => setTimeout(r, 10))
      continue
    }

    const root = ReactDOM.createRoot(rootElement)
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    )

    break
  }
})()
