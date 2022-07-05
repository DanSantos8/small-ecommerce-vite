import { ApolloProvider } from "@apollo/client"
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import "./assets/styles/global.css"
import { client } from "./lib/apollo"
import Details from "./pages/Details"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-details/:slug/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
)
