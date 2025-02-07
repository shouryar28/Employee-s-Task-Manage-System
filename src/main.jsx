import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
// localStorage.clear()  to clean the local storage 

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <App />
  </AuthProvider>
      

);
