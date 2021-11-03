import React from "react";
import { useTranslation } from "react-i18next";

import authImg from '../img/llr-auth.png';
import bbbImg from '../img/llr-bbb.png';
import benjiImg from '../img/llr-benji.png';
import trumpitoImg from '../img/llr-dontrumpito.png';
import kaleImg from '../img/llr-kale.png';
import portfolioImg from '../img/llr-portfolio.png';
import cookieImg from '../img/llr-cookie.png';
import ihImg from '../img/llr-ironhack.png';


export default function TechSuite() {
  const { t } = useTranslation()

  return (
    <>
      <section id="llr-techsuite" className="llr-tech-wrapper p-5">

          <div className="row align-items-center"> 
              <div className="col">
                <div className="d-flex  justify-content-between align-items-center">
                    <h3 className="llr-title llr-title-resp mr-2"><span className="llr-numeration">02</span> &lt; { t('techsuite') } / &gt; </h3>
                    <a href="#top" className="llr-arrow-up"> {t('to_the_top')} &#8593; </a>
                </div>
                  
                  <h6 className="llr-subtitle"> { t('techsuite_subtitle1') } <a className="llr-lachs llr-hover" target="_blank" href="https://github.com/lindaluisa" rel="noreferrer"><u className="llr-hover"> Github</u></a> { t('techsuite_subtitle2') }  </h6>
                          <ul className="llr-list llr-small">
                              <li className="col-sm-12 col-xs-6"> <span className="llr-lachs">{ t('tech_lang') }</span>: JavaScript, HTML, CSS</li>
                              <li className="col-sm-12 col-xs-6"> <span className="llr-lachs">{ t('tech_lib') }</span>: React, Angular.js, Bootstrap, Sass, jQuery, Express, Node.js</li>
                              <li className="col-sm-12 col-xs-6"> <span className="llr-lachs">{ t('tech_db') }</span>: MongoDb </li>
                              <li className="col-sm-12 col-xs-6"> <span className="llr-lachs">{ t('tech_tools') }</span>: Github, Atlassian, Trello, Gira, Heroku, Wordpress </li>
                          </ul>
              </div>
          </div>

          <div id="accordion" className="mt-5">
            <h6 className="llr-subtitle"> { t('projects') } </h6>

            <div className="card mb-3">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <button className="btn btn-link llr-small" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <span className="llr-arrow llr-small"> &#8643;</span> Blink Bank Blink
                  </button>
                </h5>
              </div>
          
              <div id="collapseOne" className="collapse " aria-labelledby="headingOne" data-parent="#accordion">
                <div className="card-body llr-small">
                  <span className="llr-subtitle llr-lachs mr-2"> { t('descr_blink') } </span>  
                  { t('descr_blink_text') }
                  
                </div>
                <img className="card-img-top llr-techsuite-img" src={bbbImg} alt=""/>
                <ul className="list-group list-group-flush llr-small">
                    <li className="list-group-item">Stack: HTML, CSS, NodeJs, Express, MongoDb</li>
                    <li className="list-group-item">Repository:  <a className="llr-lachs" target="_blank" href="https://github.com/lindaluisa/banking-app-ui" rel="noreferrer"><u>https://github.com/lindaluisa/banking-app-ui</u></a></li>
                  </ul>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                  <button className="btn btn-link llr-small" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    <span className="llr-arrow">&#8643;</span> All About The Benji's
                  </button>
                </h5>
              </div>
          
              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                <div className="card-body llr-small">
                    <span className="llr-subtitle llr-lachs mr-2"> { t('descr_benji') } 
                    </span>

                    { t('descr_benji_text') }
                </div>
                <img className="card-img-top llr-techsuite-img" src={benjiImg} alt=""/>
                <ul className="list-group list-group-flush llr-small">
                    <li className="list-group-item">Stack: React</li>
                    <li className="list-group-item">Repository: <a className="llr-lachs" target="_blank" href="https://github.com/lindaluisa/about-the-benjis" rel="noreferrer"><u> https://github.com/lindaluisa/about-the-benjis</u></a></li>
                  </ul>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-header" id="headingThree">
                <h5 className="mb-0">
                  <button className="btn btn-link llr-small" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                    <span className="llr-arrow">&#8643;</span> Kalenciaga
                  </button>
                </h5>
              </div>
          
              <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                <div className="card-body llr-small">
                    <span className="llr-subtitle llr-lachs mr-2"> { t('descr_kale') } </span>
                    { t('descr_kale_text') } 
                </div>
                <img className="card-img-top llr-techsuite-img" src={kaleImg} alt=""/>
                <ul className="list-group list-group-flush llr-small">
                    <li className="list-group-item">Stack: HTML, CSS, Bootstrap, React</li>
                    <li className="list-group-item">Repository: <a className="llr-lachs" target="_blank" href="https://github.com/lindaluisa/kalenciaga" rel="noreferrer"><u> https://github.com/lindaluisa/kalenciaga</u></a></li>
                  </ul>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-header" id="headingFour">
                <h5 className="mb-0">
                  <button className="btn btn-link llr-small" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                    <span className="llr-arrow">&#8643;</span>  Don Trumpito 
                  </button>
                </h5>
              </div>
          
              <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                <div className="card-body llr-small">
                    <span className="llr-subtitle llr-lachs mr-2"> { t('descr_trumpito') } </span>                    
                    { t('descr_trumpito_text') }
                </div>
                
                <img className="card-img-top llr-techsuite-img" src={trumpitoImg} alt=""/>
                <ul className="list-group list-group-flush llr-small">
                    <li className="list-group-item">Stack: HTML, CSS, Vanilla JS, OOP</li>
                    <li className="list-group-item">Repository: <a className="llr-lachs" target="blank" href="https://github.com/lindaluisa/ih-mexicantrump-game"><u> https://github.com/lindaluisa/ih-mexicantrump-game</u></a></li>
                    <li className="list-group-item">Link:<a className="llr-lachs" target="_blank" href="https://lindaluisa.github.io/ih-mexicantrump-game/" rel="noreferrer"><u> https://lindaluisa.github.io/ih-mexicantrump-game/</u></a> </li>
                  </ul>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-header" id="headingFive">
                <h5 className="mb-0">
                  <button className="btn btn-link llr-small" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                    <span className="llr-arrow">&#8643;</span> Portfolio Linda Luisa 
                  </button>
                </h5>
              </div>
          
              <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                <div className="card-body llr-small">
                    <span className="llr-subtitle llr-lachs mr-2"> Linda L. Rosenthal </span>
                    
                    { t('descr_portfolio_text') }

                </div>

                <img className="card-img-top llr-techsuite-img" src={portfolioImg} alt=""/>
                <img className="card-img-top llr-techsuite-img" src={cookieImg} alt=""/>
                <ul className="list-group list-group-flush llr-small">
                    <li className="list-group-item">Stack:HTML, CSS, Bootstrap </li>
                    <li className="list-group-item">Repository: <a className="llr-lachs" href=""><u> https://github.com/lindaluisa/llr-portfolio</u></a></li>
                    <li className="list-group-item">Link: <a className="llr-lachs" href="#top"><u> { t('descr_portfolio_location') } </u></a></li>
                  </ul>
              </div>
            </div>

            </div>


            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <h6 className="llr-subtitle llr-lachs">{ t('blog_header') } </h6>

                        <div className="row entrada mb-4">

                            <div className="col-sm-4">
                                <img src={authImg} alt="entrada blog" className="img-fluid"/>
                            </div>

                            <div className="col-md-8">
                                <h5 className="my-2"> { t('blog_title_jwt') } </h5>
                                <p className="meta">
                                    { t('blog_date') } <span className="llr-lachs">03/08/2018</span>
                                </p>
                                <p> { t('blog_subtitle_jwt') } </p>
                                
                                <div className="">
                                    <a href="https://medium.com/@lindaluisarosenthal/user-authentication-with-jwt-in-express-js-node-js-27ef68272580" 
                                      target="_blank" 
                                      rel="noopener noreferrer"  
                                      className="btn text-uppercase llr-btn"> 
                                        { t('blog_read') }
                                    </a> 
                                </div>
                            </div>

                        </div> 


                        <div className="row entrada mb-4">

                            <div className="col-sm-4">
                                <img src={ihImg} alt="entrada blog" className="img-fluid"/>
                            </div>

                            <div className="col-md-8">
                                <h5 className="my-2"> { t('blog_title_ih') } </h5>
                                <p className="meta">
                                    { t('blog_date') } <span className="llr-lachs">24/04/2019</span>
                                </p>
                                <p> { t('blog_subtitle_ih') } </p>
                                
                                <div className="">
                                    <a href="https://medium.com/@lindaluisarosenthal/join-ironhack-76b6ef0058bf" 
                                      target="_blank" 
                                      rel="noopener noreferrer"  
                                      className="btn text-uppercase llr-btn"> 
                                        { t('blog_read') }
                                    </a> 
                                </div>
                            </div>

                        </div> 
                        
                    </div>

                </div>
            </div>



      </section>
    </>

  )
}