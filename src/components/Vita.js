import React from "react";
import { useTranslation } from "react-i18next";

export default function Vita() {

  const { t } = useTranslation()

  return (
    <>
        <section id="llr-vita" className="p-5">
        <div className="">
            <div className="row align-items-center"> 
                <div className="col">

                <div className="d-flex justify-content-between align-items-baseline">
                    <h3 className="llr-title "><span className="llr-numeration">03</span> &lt; {t('vita')} / &gt;</h3>
                    <a href="#top" className="llr-arrow-up"> {t('to_the_top')} &#8593; </a>
                </div>
                <h6 className="llr-subtitle"> { t('vita_subtitle1') } <a className="llr-lachs llr-hover" target="_blank" href="https://www.linkedin.com/in/lindaluisarosenthal" rel="noreferrer"><u> LinkedIn </u></a>  { t('vita_subtitle2') }</h6>

                    <div className="row">
                        <div className="col d-flex flex-column align-items-center">
                            <ol className="process-vertical p-5">
                                    <li>
                                        <div className="llr-vita-square llr-vita-vertical d-inline-flex">
                                            🚀             
                                        </div>
                                        <div><span className="text-small llr-vita-date"> { t('v_rocket_date') } </span>
                                            <h5 className="llr-vita-job mb-0"> { t('v_rocket_job') } </h5>
                                            <div><span className="text-small llr-vita-textsm"> { t('v_rocket_where') } </span></div>
                                            <div><span className="text-small llr-vita-textsm"> { t('v_rocket_what') } </span></div>
                                        </div>
                                    </li> 

                                    <li>
                                        <div className="llr-vita-square llr-vita-vertical d-inline-flex">
                                            07 
                                        </div>
                                        <div>
                                          <span className="text-small llr-vita-date"> { t('v1_date') } </span>
                                          <h5 className="llr-vita-job llr-lachs mb-0"> { t('v1_job') } </h5>
                                          <div><span className="text-small llr-vita-textsm"> { t('v1_where') } </span></div>
                                          <div><span className="text-small llr-vita-textsm"> { t('v1_what') } </span></div>
                                        </div>
                                    </li>


                                    <li>
                                        <div className="llr-vita-square llr-vita-vertical d-inline-flex">
                                            06 
                                        </div>
                                        <div>
                                            <span className="text-small llr-vita-date">{ t('v2_date') } </span>
                                            <h5 className="llr-vita-job mb-0">{ t('v2_job') } </h5>
                                            <div><span className="text-small llr-vita-textsm"> { t('v2_where') }</span></div>
                                            <div><span className="text-small llr-vita-textsm"> { t('v2_what') } </span></div>
                                        </div>
                                    </li>


                                    <li>
                                        <div className="llr-vita-square llr-vita-vertical d-inline-flex">
                                            05 
                                        </div>
                                        <div>
                                          <span className="text-small llr-vita-date"> { t('v3_date') } </span>
                                          <h5 className="llr-vita-job mb-0">{ t('v3_job') } </h5>
                                          <div><span className="text-small llr-vita-textsm"> { t('v3_where') } </span></div>
                                          <div><span className="text-small llr-vita-textsm"> { t('v3_what') } </span></div>
                                        </div>
                                    </li>

                                    <li>
                                    <div className="llr-vita-square llr-vita-vertical d-inline-flex">
                                        04
                                    </div>
                                    <div><span className="text-small llr-vita-date">{ t('v4_date') }</span>
                                        <h5 className="llr-vita-job mb-0"> { t('v4_job') } </h5>
                                        <div><span className="text-small llr-vita-textsm"> { t('v4_where') } </span></div>
                                        <div><span className="text-small llr-vita-textsm"> { t('v4_what') } </span></div>
                                    </div>
                                    </li>

                                    <li>
                                        <div className="llr-vita-square llr-vita-vertical d-inline-flex">
                                            03
                                        </div>
                                        <div>
                                            <span className="text-small llr-vita-date"> { t('v5_date') } </span>
                                            <h5 className="llr-vita-job mb-0"> { t('v5_job') } </h5>
                                            <div><span className="text-small llr-vita-textsm"> { t('v5_where') } </span></div>
                                            <div><span className="text-small llr-vita-textsm"> { t('v5_what') } </span></div>
                                        </div>
                                    </li>


                                    <li>
                                    <div className="llr-vita-square llr-vita-vertical d-inline-flex">
                                        02             
                                    </div>
                                    <div><span className="text-small llr-vita-date"> { t('v6_date') } </span>
                                        <h5 className="llr-vita-job mb-0"> { t('v6_job') } </h5>
                                        <div><span className="text-small llr-vita-textsm"> { t('v6_where') } </span></div>
                                        <div><span className="text-small llr-vita-textsm"> { t('v6_what') } </span></div>
                                    </div>
                                    </li>

                                    <li>
                                        <div className="llr-vita-square llr-vita-vertical d-inline-flex">
                                            01
                                        </div>
                                        <div>
                                            <span className="text-small llr-vita-date"> { t('v7_date') } </span>
                                            <h5 className="llr-vita-job mb-0"> { t('v7_job') } </h5>
                                            <div><span className="text-small llr-vita-textsm"> { t('v7_where') } </span></div>
                                            <div><span className="text-small llr-vita-textsm"> { t('v7_what') } </span></div>
                                        </div>
                                    </li>

                                </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}