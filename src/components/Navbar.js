import React from "react";
import { useTranslation } from "react-i18next";
import i18next from 'i18next';
import cookie from 'js-cookie';
import classNames from 'classnames'


const languages = [
        {
        code: 'en',
        name: 'en',
        country_code: 'gb'
    },
    {
        code: 'de',
        name: 'de',
        country_code: 'de'
    },
        {
        code: 'es',
        name: 'es',
        country_code: 'es'
    }
]

export default function Navbar() {
  const currentLangCode = cookie.get('i18next') || 'en'
  const currentLang = languages.find(lang  => lang.code === currentLangCode)
  const { t } = useTranslation()


  return (
        <>
              <div className="llr-brand-wrapper">
                  <a className="llr-brand" href="#" > &lt; {t('name')} <span className="llr-brand1">  {t('surname')} </span>/&gt;</a>
              </div>

                <div>
                      <nav className="llr-small">
                          <div className="d-flex align-items-center justify-content-between pl-5 pr-5">
                          
                          <div>
                              <ul className="navbar-nav">
                                  <li className="nav-item" >
                                      { t('med_student') }
                                  </li>
                                  <li className="nav-item"> 
                                      { t('dev') }
                                  </li>
                                  <li className="nav-item" >
                                      { t('study') }
                                  </li>
                                  <li className="nav-item" >
                                      { t('hobby') }
                                  </li>
                              </ul>
                            </div>

                            <div>
                                <ul className="navbar-nav"> 
                                    {languages.map(  ({code, name, country_code})  => (
                                        <li key={country_code} className="nav-item llr-nav">
                                            <a 
                                                className={classNames('nav-link active', {
                                                disabled: currentLangCode === code,
                                                })}
                                                onClick={() => i18next.changeLanguage(code)}
                                            > 
                                                {name} 
                                            </a>
                                        </li>
                                    ))}
                            </ul>   
                            </div>

                          </div>

                        <div>
                            <ul className="navbar-nav llr-nav mt-5 mb-5 pl-5 pr-5">
                                <li className="nav-item">
                                    <a className="nav-link" href="#llr-about">01 - { t('about') } </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#llr-techsuite">02 - { t('techsuite') } </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#llr-vita">03 - { t('vita') }</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#llr-skills">04 - { t('skills') }</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#llr-hi">05 - { t('hi') }</a>
                                </li> 
                            </ul>
                        </div>

                      </nav>

              </div>
              </>

  );
}