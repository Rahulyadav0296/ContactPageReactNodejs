import React from "react";
import logo_ry from "./assets/logo_ry.png";
import ContactForm from "./components/ContactForm";
function RootPage() {
  return (
    <div className="App">
      <img src={logo_ry} alt="Logo" />
      <div className="App-header">
        <ContactForm />
      </div>
    </div>
  );
}

export default RootPage;
