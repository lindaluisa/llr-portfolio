import React, { Suspense,lazy } from 'react';
import ReactDOM from 'react-dom';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from 'i18next-http-backend';
import Spinner from './components/Spinner';
import './styles.css';


const App = React.lazy(() => import('./App'));
const loadPath = '/locales/{{lng}}/{{ns}}.json';
const languages = ['de', 'en', 'es'];

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    debug: true,
    supportedLngs: languages,
    fallbackLng: "en",
    ns: ['translation'],
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: loadPath,
    }
  })


ReactDOM.render(
  <Suspense fallback={<Spinner />}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);


