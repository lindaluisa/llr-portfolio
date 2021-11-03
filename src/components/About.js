import React from "react";
import { useTranslation } from "react-i18next";

export default function About() {

  const { t } = useTranslation()

  return (
    <>
    <section id="llr-about" className="llr-about-wrapper llr-about p-5">

      <div className="row align-items-center"> 
          <div className="col">

              <div className="d-flex  justify-content-between align-items-baseline">
                  <h3 className="llr-title"><span className="llr-numeration">01</span> &lt; {t('about')} / &gt; </h3>
                  <a href="#top" className="llr-arrow-up"> {t('to_the_top')} &#8593; </a>
              </div>

              <h6 className="llr-subtitle"> {t('about_subtitle')} </h6>
                  <div className="llr-about">
                    <p>
                      { t('about_p1') }
                    </p>

                    <p>
                      { t('about_p2') }
                    </p>

                    <p>
                      { t('about_p3') }
                    </p>

                    <p>
                      { t('about_p4') }
                    </p>


                    <div className="text-center">
                        <a href="#llr-hi" className="btn text-uppercase llr-btn py-2 mt-4">  { t('hi') } </a> 
                    </div>
                  </div>
          </div>
      
      </div>
    </section>
      </>
  )
}