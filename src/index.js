import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-0b6j3c54ecs1hjba.us.auth0.com"
    clientId="V52KxNyTvBPDNc4HAe4D4ddeR0dUc8nb"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
    </Auth0Provider>
  </React.StrictMode>
)
