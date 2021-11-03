import React from "react";
import { useTranslation } from "react-i18next";


import euImg from '../img/llr-eu.png';


export default function Yo() {

  const { t } = useTranslation()

  return (
    <>
    <section id="llr-hi" className="encuentra p-5">
        <div className="">

        <div className="d-flex justify-content-between align-items-center">
            <h3 className="llr-title mr-2"><span className="llr-numeration">05</span> &lt; { t('hi') } /&gt;</h3>
            <a href="#top" className="llr-arrow-up"> {t('to_the_top')} &#8593; </a>
        </div>



                <div className="d-md-flex d-lg-flex justify-content-around align-items-center">


                    <div className="container llr-container">
                        <img className=" container rounded-circle llr-eu" alt="100x100" src={euImg}
                        data-holder-rendered="true"/>
                        <div className="container rounded-circle llr-overlay">
                            <div className="llr-hola"> ¡Hola! </div>
                        </div>
                    </div>

                    <div className="mt-3 w-100">

                        <h6 className="llr-subtitle"> Linda Luisa Rosenthal</h6>
                        <h6><i className="fab fa-js-square llr-yo-icon"></i> { t('yo_web') } | <i className="fa fa-stethoscope llr-yo-icon" aria-hidden="true"></i> { t('yo_med')} | <i className="fas fa-brain llr-yo-icon"></i> { t('yo_psych') }</h6>
                        <p> 
                            { t('yo_cta') }
                        </p>
                       
                        <h6 className="mb-3">
                            lindaluisarosenthal<i className="fas fa-at fa-lg llr-yo-icon"></i>gmail.com</h6>

                        <h6>
                            <a target="_blank" href="https://www.linkedin.com/in/lindaluisarosenthal" rel="noreferrer">
                                <i className="fab fa-lg fa-linkedin llr-yo-icon mr-2"></i> 
                                <u className="llr-lachs"> www.linkedin.com/in/lindaluisarosenthal</u>
                            </a>
                        </h6>

                        <h6>
                            <a target="_blank" href="https://www.github.com/lindaluisa" rel="noreferrer">
                                <i className="fab fa-lg fa-github-alt llr-yo-icon mr-2"></i> 
                                <u className="llr-lachs"> www.github.com/lindaluisa</u>
                            </a>
                        </h6>


                        <h6>
                            <a target="_blank" href="https://medium.com/@lindaluisarosenthal" rel="noreferrer">
                                <i className="fab fa-lg fa-medium llr-yo-icon mr-2"></i> 
                                <u  className="llr-lachs">www.medium.com/@lindaluisarosenthal</u>
                            </a>
                        </h6>

                    </div>

                </div>
           
                <h6 className="llr-title llr-lachs mt-5"> { t('yo_motto') }:</h6>
                <h6 className="llr-title llr-lachs">  I don’t think code is beautiful </h6>
                <h6 className="llr-title llr-lachs">  I think it is beyond it.  📢   </h6>
        </div>
    </section>

    </>
  )
}