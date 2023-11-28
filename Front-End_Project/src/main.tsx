import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/global.css";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "./providers/modalProvider/modalContext.tsx";
import { UserProvider } from "./providers/usersProvider/userContext.tsx";
import { ContactProvider } from "./providers/contactsProvider/contactsProvider.tsx";
import { PDFtoProvider } from "./providers/pdfProvider/pdfToContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ContactProvider>
          <ModalProvider>
            <PDFtoProvider>
              <App />
            </PDFtoProvider>
          </ModalProvider>
        </ContactProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
