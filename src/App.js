import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import i18next from 'i18next';
import cookie from 'js-cookie';
import CookieConsent, { Cookies } from "react-cookie-consent";


import Navbar from "./components/Navbar";
import About from "./components/About";
import TechSuite from "./components/TechSuite";
import Vita from "./components/Vita";
import Skills from "./components/Skills";
import Yo from "./components/Yo";
import Footer from "./components/Footer";

import './styles.css';



function App() {

    
    const { t } = useTranslation();
    Cookies.set("CookieMonster", "Okeks");

      return (
        <div className="App">
        <a name="top"></a>

        <CookieConsent 
          debug={true}
          style={{ background: "#f6efe4", color:"#ff0a43" }}
          buttonStyle={{ fontWeight: "bold" }}
          containerClasses = "llr-cookie-container "
          buttonText="Got it"
          buttonClasses="llr-btn text-uppercase mr-3"
          buttonStyle={{ color: "#f6efe4", background: "#ff0a43", fontSize: "10px" }}
          >
            
            <h5 className="llr-title llr-cookie-title pl-3"> <span className="llr-numeration">00</span> &lt; Cookie Talk / &gt; </h5>
            <div className="pl-3">
            I am really not into gathering any of your data. However, in line with the cookie policy for GDPR, the minimal amount is collected. This being said, by continuing to visit <b className="text-uppercase">Lindaland 🎢</b> you agree to the use of cookies.
            </div>
          
        </CookieConsent>

        <header className="header">
            <Navbar />
        </header>


        <main>

            <About />
            <TechSuite/>
            <Vita/>
            <Skills/>
            <Yo/>
        </main>
        
        <footer>
            <Footer/>
        </footer>

        </div>
      )
}


export default App;
