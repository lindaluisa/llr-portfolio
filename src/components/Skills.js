import React from "react";
import { useTranslation } from "react-i18next";


export default function Skills() {

  const { t } = useTranslation()

  return (
    <>
       <section id="llr-skills" className="llr-about-wrapper llr-skills p-5 mt-5">
              
            <div className="row align-items-center"> 
                <div className="col">

                <div className="d-flex justify-content-between align-items-baseline">
                    <h3 className="llr-title"><span className="llr-numeration">04</span> &lt; {t('skills')} / &gt;</h3>
                    <a href="#top" className="llr-arrow-up"> {t('to_the_top')} &#8593; </a>
                </div>
                    <h6 className="llr-subtitle mb-5"> { t('skills_subtitle') } </h6>

                    <div className="row sobre-nosotros">
                        <div className="col-sm-4 text-center">
                            <i className="far fa-file-code fa-2x llr-lachs"></i>
                            <h5 className="llr-title llr-skills-title m-3"> {t('skills_tech')} </h5>
                            <p> {t('skills_descr_1')} </p>
                        </div>

                        <div className="col-sm-4 text-center">
                            <i className="fas fa-stethoscope llr-lachs fa-2x"></i>
                            <h5 className="llr-title llr-skills-title m-3"> {t('skills_health')} </h5>
                            <p> {t('skills_descr_2')} </p>
                        </div>

                        <div className="col-sm-4 text-center">
                            <i className="fas fa-eye llr-lachs fa-2x"></i>
                            <h5 className="llr-title llr-skills-title m-3"> {t('skills_visuals')} </h5>
                            <p> {t('skills_descr_3')} </p>
                        </div>


                    </div>
                    <div className="row sobre-nosotros">

                        <div className="col-sm-4 text-center">
                            <i className="fas fa-globe-americas llr-lachs fa-2x   "></i>
                            <h5 className="llr-title llr-skills-title m-3"> {t('skills_lang')} </h5>
                            <p>  {t('skills_descr_4')} </p>
                        </div>

                        <div className="col-sm-4 text-center">
                            <i className="fab fa-connectdevelop llr-lachs fa-2x"></i>
                            <h5 className="llr-title llr-skills-title m-3"> {t('skills_pos')} </h5>
                            <p> {t('skills_descr_5')} </p>
                        </div>

                        <div className="col-sm-4 text-center">
                            <i className="fas fa-child llr-lachs fa-2x"></i>
                            <h5 className="llr-title llr-skills-title m-3"> {t('skills_pers')} </h5>
                            <p> {t('skills_descr_6')} </p>
                        </div>




                </div>
            </div>
        </div>
    </section>
    </>
  )
}