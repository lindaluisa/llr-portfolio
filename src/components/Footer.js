import React from "react";
import { useTranslation } from "react-i18next";


export default function Footer() {

  const { t } = useTranslation()

  return (
    <>
        <div className="llr-footer p-1 pl-5">
            <ul className="navbar-nav llr-nav mt-5 mb-5">
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
         
  
      
        <div className="footer-bottom">
          <div className="">
              <div className="footer-copy">
                <p className="llr-lachs m-5"> madewithlove in 2021 &copy; by <a className="llr-lachs llr-hover" target="_blank" href="https://github.com/lindaluisa" rel="noreferrer"><u className="llr-hover"> lindaluisa</u></a>  &#9813; </p>
              </div>
          </div>
        </div>
    </>
  )
}