import { useState } from "react";

import styled from "@emotion/styled";
import ShortVideo from "./Videos";
import Icons from "./Icons";
import './Short.css';
import { Navbar } from "../LandingPage/navbar";
const Short =() => {
    const [category_all, setCategory_all] = useState("category_opt_all");
    const [category_all2, setCategory_all2] = useState("category_opt_all2");
    return(
       <>
       <Navbar/>
        <div className="shorts_main">
            <div className="shorts_mainDiv">
                <div className="shorts_letfBox_section">
                    <div className="category_cntnt">
                        <div>
                            <div className="category_heading">
                                <span className="category_heading_span">Categories wise</span>
                            </div>
                            <div className="categ_line">
                                <div className="subcateg_line"></div>
                            </div>
                        </div>
                        <div>
                            <button className="button_categ">
                                <div className="sub_categ" id="#category">
                                    <span className={category_all} id="highlight">All</span>
                                </div>
                                <div className="categ_line">
                                    <div className="subcateg_line_highlight"></div>
                                </div>
                            </button> 
                        </div>
                        <div>
                            <button className="button_categ">
                                <div className="sub_categ" id="#category">
                                    <span className={category_all}>Adventure</span>
                                </div>
                                <div className="categ_line">
                                    <div className="subcateg_line2"></div>
                                </div>
                            </button> 
                        </div>  
                        <div>
                            <button className="button_categ">
                                <div className="sub_categ" id="#category">
                                    <span className={category_all}>Food</span>
                                </div>
                                <div className="categ_line">
                                    <div className="subcateg_line2"></div>
                                </div>
                            </button> 
                        </div>
                        <div>
                            <button className="button_categ">
                                <div className="sub_categ" id="#category">
                                    <span className={category_all}>Science</span>
                                </div>
                                <div className="categ_line">
                                    <div className="subcateg_line2"></div>
                                </div>
                            </button> 
                        </div>
                        <div>
                            <button className="button_categ">
                                <div className="sub_categ" id="#category">
                                    <span className={category_all}>Animals</span>
                                </div>
                                <div className="categ_line">
                                    <div className="subcateg_line2"></div>
                                </div>
                            </button> 
                        </div>
                        <div>
                            <button className="button_categ">
                                <div className="sub_categ" id="#category">
                                    <span className={category_all}>Lifestyle</span>
                                </div>
                                <div className="categ_line">
                                    <div className="subcateg_line2"></div>
                                </div>
                            </button> 
                        </div>    
                    </div>
                </div>

                <div className="shorts_middle_section">
                    <div className="short_videos_blk">

                        <div className="content_shorts">
                            <div className="content_shorts1">
                                <div className="video_wrapper1">
                                    <div id="videoTitle">
                                        <h4 className="video_title">Family + Facts + Fun</h4>
                                    </div>
                                  
                                    <div className="blank_space">
                                        <div>Age Rating : U</div>
                                    </div>
                                    <div className="videoShow1">
                                        <ShortVideo/>
                                    </div>
                                    <Icons/>
                                </div>
                            </div>
                            <div className="content_shorts2">
                                <div className="video_wrapper2">
                                    <div id="videoTitle">
                                        <h4 className="video_title">Is Earth in Danger?</h4>
                                    </div>
                                    <div className="blank_space">
                                        <div>Age Rating : UA-16+ | Contains : Foul Language Smoking Alcohol</div>   
                                    </div>
                                    <div className="videoShow1">
                                        <ShortVideo/>
                                    </div>
                                    <Icons/>
                                </div>
                            </div>
                            <div className="content_shorts3">
                                <div className="video_wrapper3">
                                        <div id="videoTitle">
                                            <h4 className="video_title">5 Full Facts about Daily Inventions</h4>
                                        </div>
                                        <div className="blank_space">
                                            <div>Age Rating : U</div>
                                        </div>
                                        <div className="videoShow1">
                                            <ShortVideo/>
                                        </div>
                                        <Icons/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shorts_rightBox_section">
                    <div className="discov_Ad">
                        <img src="https://www.discoveryplus.in/bebbe161445c85cd0ab9ff57918ae2cd.png" className="ad_image" />
                        <div className="ad_content">
                        <div className="style_textContainer">
                            <span className="text_contain">Watch discovery+ Shorts while traveling.</span>
                        </div>
                        <div className="style_textContainer">
                            <div className="textContainer_gapline"></div>
                        </div>
                        <div className="style_textContainer">
                            <span className="text_available">Available on</span>
                        </div>
                        <div className="style_imageConatiner">
                            <a className="style_hred_store" href="https://play.google.com/store/apps/details?id=com.discoveryplus.mobile.android" target="_blank" rel="noopener">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 156 51" className="style_storeImage"><defs><linearGradient id="prefix__b" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#257CB0"></stop>
                                <stop offset="28.6%" stop-color="#4A93B5"></stop>
                                <stop offset="76.7%" stop-color="#78BCBB"></stop>
                                <stop offset="100%" stop-color="#89CFBD"></stop>
                                </linearGradient><linearGradient id="prefix__e" x1=".001%" x2="100.001%" y1="49.999%" y2="49.999%"><stop offset="0%" stop-color="#52C1AD"></stop><stop offset="100%" stop-color="#DEE89A"></stop></linearGradient><linearGradient id="prefix__h" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#EC413D"></stop><stop offset="16.7%" stop-color="#DA4452"></stop><stop offset="57.5%" stop-color="#B0487A"></stop><stop offset="86.2%" stop-color="#954A92"></stop>
                                <stop offset="100%" stop-color="#8A4A9D"></stop></linearGradient><linearGradient id="prefix__k" x1="50.001%" x2="50.001%" y1=".001%" y2="99.997%"><stop offset="0%" stop-color="#F58879"></stop><stop offset="11.9%" stop-color="#F69079"></stop><stop offset="71.3%" stop-color="#FCB877"></stop><stop offset="100%" stop-color="#FEC874"></stop></linearGradient><path id="prefix__a" d="M21.767 11.924l-6.924-3.998L1.486.214C.745-.214.006.045.006.94v31.42c0 .671.528.96 1.172.589.644-.373 13.665-7.89 13.665-7.89l6.924-3.998 6.656-3.842c.781-.452.706-1.07.047-1.425-.659-.355-6.703-3.87-6.703-3.87z"></path><path id="prefix__d" d="M21.767 11.924l-6.924-3.998L1.486.214C.745-.214.006.045.006.94v31.42c0 .671.528.96 1.172.589.644-.373 13.665-7.89 13.665-7.89l6.924-3.998 6.656-3.842c.781-.452.706-1.07.047-1.425-.659-.355-6.703-3.87-6.703-3.87z"></path>
                                <path id="prefix__g" d="M21.767 11.924l-6.924-3.998L1.486.214C.745-.214.006.045.006.94v31.42c0 .671.528.96 1.172.589.644-.373 13.665-7.89 13.665-7.89l6.924-3.998 6.656-3.842c.781-.452.706-1.07.047-1.425-.659-.355-6.703-3.87-6.703-3.87z"></path><path id="prefix__j" d="M21.767 11.924l-6.924-3.998L1.486.214C.745-.214.006.045.006.94v31.42c0 .671.528.96 1.172.589.644-.373 13.665-7.89 13.665-7.89l6.924-3.998 6.656-3.842c.781-.452.706-1.07.047-1.425-.659-.355-6.703-3.87-6.703-3.87z"></path></defs><g fill="none" fill-rule="evenodd"><path fill="#000" fill-rule="nonzero" stroke-width="1.2" d="M153.59 43.465c0 3.75-3.038 6.79-6.787 6.79H6.81c-3.749 0-6.788-3.04-6.788-6.79V6.81C.022 3.06 3.062.02 6.81.02h139.993c3.748 0 6.788 3.04 6.788 6.789v36.656h0z" transform="translate(1 1)"></path><g transform="translate(1 1) translate(11.534 10.208)"><mask id="prefix__c" fill="#fff"><use href="#prefix__a"></use></mask>
                                <path fill="url(#prefix__b)" fill-rule="nonzero" d="M0.006 -0.517L0.006 33.502 17.16 16.493z" mask="url(#prefix__c)"></path></g><g transform="translate(1 1) translate(11.534 10.208)"><mask id="prefix__f" fill="#fff"><use href="#prefix__d"></use></mask><path fill="url(#prefix__e)" fill-rule="nonzero" d="M21.767 11.924L14.843 7.926 0.006 -0.64 0.006 -0.517 17.16 16.493z" mask="url(#prefix__f)"></path></g><g transform="translate(1 1) translate(11.534 10.208)"><mask id="prefix__i" fill="#fff"><use href="#prefix__g"></use></mask>
                                <path fill="url(#prefix__h)" fill-rule="nonzero" d="M0.006 33.502L0.006 33.626 14.843 25.059 21.767 21.061 17.16 16.493z" mask="url(#prefix__i)"></path></g><g transform="translate(1 1) translate(11.534 10.208)"><mask id="prefix__l" fill="#fff"><use href="#prefix__j"></use></mask><path fill="url(#prefix__k)" fill-rule="nonzero" d="M21.767 11.924L17.16 16.493 21.767 21.061 29.681 16.492z" mask="url(#prefix__l)"></path></g>
                                <path fill="#F9F9F9" fill-rule="nonzero" d="M119.536 33.35c-.644 0-1.232-.118-1.764-.356-.533-.237-.98-.603-1.341-1.096h-.108c.072.578.108 1.125.108 1.643v4.07h-1.498V23.278h1.219l.207 1.354h.072c.385-.542.834-.932 1.345-1.173s1.098-.361 1.76-.361c1.312 0 2.325.448 3.037 1.345.714.896 1.07 2.154 1.07 3.773 0 1.624-.362 2.886-1.087 3.787-.725.9-1.731 1.349-3.02 1.349zm-.217-8.98c-1.01 0-1.742.28-2.193.839-.451.56-.683 1.45-.695 2.672v.334c0 1.39.232 2.384.695 2.983.464.6 1.207.898 2.23.898.855 0 1.524-.345 2.009-1.038.484-.691.726-1.645.726-2.861 0-1.234-.242-2.18-.726-2.84-.485-.659-1.167-.988-2.046-.988zm7.794 8.8h-1.498V19.125h1.498V33.17zm8.615 0l-.298-1.408h-.072c-.494.62-.986 1.04-1.476 1.26-.49.22-1.103.329-1.837.329-.98 0-1.75-.253-2.307-.758-.556-.506-.834-1.224-.834-2.158 0-1.997 1.597-3.044 4.793-3.141l1.68-.054v-.614c0-.777-.168-1.35-.502-1.72-.334-.37-.869-.555-1.602-.555-.825 0-1.758.253-2.799.758l-.46-1.146c.488-.265 1.021-.473 1.603-.623.58-.15 1.162-.226 1.746-.226 1.18 0 2.053.262 2.622.785.569.524.853 1.364.853 2.52v6.75h-1.11v.001zm-3.385-1.056c.932 0 1.665-.255 2.198-.767.532-.511.799-1.227.799-2.149v-.893l-1.5.063c-1.19.043-2.05.227-2.577.556-.526.328-.79.838-.79 1.53 0 .541.164.954.493 1.236.328.283.787.424 1.377.424zm5.365-8.837h1.606l2.167 5.642c.475 1.288.77 2.217.885 2.79h.072c.078-.308.243-.833.492-1.577.25-.743 1.067-3.028 2.45-6.855h1.608l-4.252 11.265c-.421 1.114-.913 1.904-1.477 2.37-.562.467-1.253.7-2.07.7-.458 0-.91-.051-1.355-.154v-1.2c.33.072.701.108 1.11.108 1.03 0 1.763-.577 2.203-1.733l.55-1.408-3.99-9.948zm-45.93.92c.476.393 1.47 1.22 1.47 2.793 0 1.53-.87 2.256-1.739 2.938-.269.269-.58.56-.58 1.015 0 .455.311.703.54.89l.745.578c.91.766 1.737 1.47 1.737 2.898 0 1.945-1.883 3.91-5.442 3.91-3 0-4.448-1.427-4.448-2.96 0-.744.37-1.799 1.593-2.524 1.282-.786 3.021-.888 3.952-.952-.29-.372-.62-.765-.62-1.406 0-.351.103-.558.206-.808-.228.021-.456.042-.663.042-2.193 0-3.434-1.635-3.434-3.248 0-.952.435-2.008 1.324-2.773 1.18-.972 2.587-1.138 3.705-1.138h4.262l-1.325.745H91.78zm-1.469 9.187c-.165-.021-.27-.021-.475-.021-.186 0-1.305.042-2.173.332-.455.165-1.78.661-1.78 2.131 0 1.469 1.428 2.526 3.643 2.526 1.985 0 3.042-.954 3.042-2.236 0-1.057-.684-1.614-2.257-2.732zm.6-3.932c.476-.476.517-1.138.517-1.51 0-1.49-.89-3.808-2.607-3.808-.538 0-1.117.269-1.448.683-.352.435-.456.993-.456 1.531 0 1.387.807 3.684 2.587 3.684.518 0 1.075-.248 1.408-.58zm-12.157 3.601c-3.285 0-5.04-2.562-5.04-4.876 0-2.707 2.21-5.02 5.35-5.02 3.036 0 4.937 2.375 4.937 4.876 0 2.437-1.879 5.02-5.247 5.02zm2.582-1.673c.496-.662.62-1.488.62-2.294 0-1.819-.867-5.289-3.43-5.289-.68 0-1.362.27-1.858.704-.806.722-.951 1.631-.951 2.52 0 2.044 1.012 5.411 3.512 5.411.806 0 1.633-.392 2.107-1.052zm-13.78 1.673c-3.285 0-5.041-2.562-5.041-4.876 0-2.707 2.21-5.02 5.351-5.02 3.036 0 4.937 2.375 4.937 4.876 0 2.437-1.88 5.02-5.247 5.02zm2.583-1.673c.495-.662.62-1.488.62-2.294 0-1.819-.869-5.289-3.43-5.289-.682 0-1.364.27-1.86.704-.805.722-.95 1.631-.95 2.52 0 2.044 1.012 5.411 3.513 5.411.806 0 1.632-.392 2.107-1.052zm-9.203 1.35l-2.97.685c-1.205.187-2.285.352-3.427.352-5.733 0-7.913-4.217-7.913-7.52 0-4.028 3.094-7.766 8.391-7.766 1.122 0 2.201.166 3.177.436 1.558.436 2.285.976 2.742 1.288l-1.724 1.64-.727.166.52-.831c-.707-.685-1.996-1.952-4.446-1.952-3.282 0-5.754 2.494-5.754 6.128 0 3.904 2.825 7.58 7.352 7.58 1.331 0 2.015-.27 2.639-.519v-3.343l-3.136.166 1.66-.894h4.405l-.54.519c-.146.125-.167.167-.208.332-.022.187-.041.79-.041.997v2.535z" transform="translate(1 1)"></path>
                                <path fill="#F9F9F9" fill-rule="nonzero" d="M98.344 32.131c-.686-.062-.83-.186-.83-.997V19.378c.005-.045.007-.09.012-.134.083-.727.29-.851.935-1.225h-2.97l-1.559.747h1.588v.01l-.001-.008v12.823c0 .415-.082.478-.56 1.1h3.676l.769-.455c-.353-.043-.707-.063-1.06-.105zm8.452.191c-.226.124-.453.27-.68.372-.681.309-1.382.392-2.002.392-.659 0-1.691-.043-2.744-.805-1.463-1.033-2.103-2.806-2.103-4.353 0-3.197 2.599-4.764 4.723-4.764.743 0 1.507.185 2.126.578 1.03.68 1.299 1.566 1.442 2.04l-4.846 1.961-1.589.124c.515 2.62 2.29 4.145 4.25 4.145 1.051 0 1.815-.37 2.516-.72l-1.093 1.03zm-1.939-6.148c.391-.143.598-.268.598-.556 0-.825-.928-1.774-2.043-1.774-.826 0-2.372.64-2.372 2.867 0 .35.042.722.063 1.094l3.754-1.63zm3.93-2.87v1.362h-.166v-1.361h-.45v-.141h1.066v.14h-.45zm1.855 1.362v-1.374h-.007l-.42 1.374h-.129l-.423-1.374h-.005v1.374h-.15v-1.502h.257l.383 1.214h.005l.377-1.214h.26v1.502h-.148z" transform="translate(1 1)"></path><path fill="#F9F9FA" fill-rule="nonzero" d="M50.749 14.437h-1.032c0-.142-.098-.544-.294-1.207h-1.49c-.202.652-.303 1.054-.303 1.207h-.97c0-.084.25-.772.752-2.065.502-1.292.753-2.004.753-2.135h1.22c0 .123.227.824.682 2.105.454 1.28.682 1.978.682 2.095zm-1.49-1.823c-.368-1.11-.552-1.71-.552-1.8h-.051c0 .084-.19.684-.571 1.8h1.174zm5.649 1.823h-.797c0-.089-.295-.554-.886-1.397-.62-.888-.972-1.495-1.058-1.822h-.052c.054.47.08.897.08 1.277 0 .531.016 1.179.046 1.942h-.794c.033-.667.049-1.399.049-2.196 0-.785-.016-1.453-.049-2.003h.958c0 .114.266.569.797 1.364.565.845.89 1.418.974 1.72h.048c-.052-.48-.077-.91-.077-1.29 0-.583-.015-1.181-.045-1.794h.806c-.03.533-.045 1.2-.045 2.003 0 .808.015 1.54.045 2.196zm4.674-2.245c0 .61-.195 1.144-.586 1.6-.392.455-.94.683-1.646.683-.318 0-.756-.013-1.315-.039.027-.65.042-1.381.042-2.196 0-.782-.015-1.45-.042-2.003h.564c.092 0 .23-.003.413-.01.182-.006.302-.01.358-.01.776 0 1.339.195 1.688.582.35.387.524.85.524 1.393zm-.88.138c0-.412-.12-.76-.361-1.043-.24-.283-.609-.424-1.103-.424-.093 0-.22.01-.38.029.02.43.031.88.031 1.348 0 .514.011 1.024.032 1.529.138.028.279.042.42.042.462 0 .804-.144 1.027-.431.222-.287.334-.637.334-1.05zm5.191 2.107h-.955c-.25-.762-.44-1.231-.574-1.41-.133-.178-.348-.268-.645-.268-.125 0-.244.002-.358.004 0 .553.01 1.11.03 1.674h-.897c.028-.65.042-1.382.042-2.197 0-.782-.014-1.45-.042-2.003h.558c.064 0 .2-.003.405-.01.205-.006.395-.009.569-.009.987 0 1.48.338 1.48 1.013 0 .535-.281.908-.844 1.12v.048c.217.06.407.23.57.507.163.279.384.789.661 1.53zm-1.21-2.968c0-.428-.275-.642-.825-.642-.202 0-.38.015-.535.045.023.334.035.768.035 1.303.118.005.218.007.3.007.684 0 1.026-.237 1.026-.713zm5.833.79c0 .66-.202 1.208-.606 1.642-.405.434-.905.652-1.5.652-.568 0-1.043-.2-1.426-.599-.382-.398-.574-.905-.574-1.52 0-.66.202-1.207.607-1.642.404-.434.904-.651 1.5-.651.567 0 1.042.198 1.425.596.383.398.574.905.574 1.523zm-.89.094c0-.45-.115-.814-.345-1.094-.23-.28-.514-.419-.851-.419-.314 0-.58.141-.8.423-.22.281-.33.637-.33 1.067 0 .447.116.811.347 1.092.232.28.515.421.85.421.314 0 .581-.141.8-.424.22-.283.33-.638.33-1.066zm2.714 2.084h-.913c.028-.667.042-1.399.042-2.197 0-.785-.014-1.452-.042-2.003h.913c-.028.542-.042 1.21-.042 2.003 0 .81.014 1.543.042 2.197zm4.675-2.245c0 .61-.196 1.144-.587 1.6-.392.455-.94.683-1.645.683-.319 0-.757-.013-1.316-.039.028-.65.042-1.381.042-2.196 0-.782-.014-1.45-.042-2.003h.564c.093 0 .23-.003.413-.01.183-.006.302-.01.358-.01.776 0 1.339.195 1.689.582.349.387.524.85.524 1.393zm-.88.138c0-.412-.121-.76-.362-1.043-.24-.283-.608-.424-1.103-.424-.092 0-.22.01-.38.029.02.43.032.88.032 1.348 0 .514.01 1.024.032 1.529.138.028.278.042.419.042.462 0 .804-.144 1.027-.431.222-.287.334-.637.334-1.05zm7.082 2.107h-1.033c0-.142-.098-.544-.294-1.207H78.4c-.202.652-.303 1.054-.303 1.207h-.97c0-.084.25-.772.753-2.065.502-1.292.753-2.004.753-2.135h1.219c0 .123.228.824.682 2.105.455 1.28.683 1.978.683 2.095zm-1.49-1.823c-.368-1.11-.552-1.71-.552-1.8h-.052c0 .084-.19.684-.57 1.8h1.173zm5.252-1.277c0 .514-.191.893-.573 1.138-.382.245-.85.368-1.405.368-.1 0-.172-.002-.216-.006 0 .404.012.937.036 1.6h-.907c.028-.622.042-1.354.042-2.197 0-.774-.014-1.441-.042-2.003h.561c.08 0 .233-.003.458-.01.226-.006.422-.009.587-.009.409 0 .754.093 1.036.278.281.185.423.465.423.84zm-.832.177c0-.46-.306-.69-.916-.69-.153 0-.314.016-.484.048.024.407.035.867.035 1.38.054.005.117.007.187.007.785 0 1.178-.248 1.178-.745zm4.7-.177c0 .514-.191.893-.572 1.138-.382.245-.85.368-1.405.368-.101 0-.173-.002-.216-.006 0 .404.011.937.035 1.6h-.906c.028-.622.042-1.354.042-2.197 0-.774-.014-1.441-.042-2.003h.56c.08 0 .233-.003.459-.01.226-.006.421-.009.587-.009.408 0 .753.093 1.035.278.282.185.423.465.423.84zm-.832.177c0-.46-.305-.69-.916-.69-.153 0-.314.016-.484.048.024.407.036.867.036 1.38.053.005.116.007.187.007.785 0 1.177-.248 1.177-.745zm7.157.746c0 .66-.202 1.207-.607 1.641-.404.435-.904.652-1.5.652-.567 0-1.043-.2-1.425-.599-.383-.398-.574-.905-.574-1.52 0-.66.202-1.207.606-1.642.405-.434.905-.651 1.5-.651.568 0 1.043.198 1.426.596.382.398.574.905.574 1.523zm-.89.093c0-.45-.116-.814-.346-1.094-.23-.28-.514-.419-.851-.419-.314 0-.58.141-.8.423-.22.281-.329.637-.329 1.067 0 .447.116.811.347 1.092.231.28.514.421.85.421.314 0 .58-.141.8-.424.219-.283.328-.638.328-1.066zm5.261 2.084h-.796c0-.089-.296-.554-.887-1.397-.62-.888-.972-1.495-1.058-1.822h-.052c.054.47.081.897.081 1.277 0 .531.015 1.179.045 1.942h-.793c.032-.667.048-1.399.048-2.196 0-.785-.016-1.453-.048-2.003h.957c0 .114.266.569.797 1.364.566.845.89 1.418.974 1.72h.048c-.051-.48-.077-.91-.077-1.29 0-.583-.015-1.181-.045-1.794h.806c-.03.533-.045 1.2-.045 2.003 0 .808.015 1.54.045 2.196z" transform="translate(1 1)"></path></g></svg>
                            </a>
                            <a className="style_hred_store" href="https://apps.apple.com/in/app/id1497257119" target="_blank" rel="noopener"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 142 42" className="style_storeImage"><defs><linearGradient id="q7is0neyva" x1="50.007%" x2="50.007%" y1="100.236%" y2="-1342.587%"><stop offset="0%" stop-color="#1A1A1A" stop-opacity=".1"></stop><stop offset="12.3%" stop-color="#212121" stop-opacity=".151"></stop><stop offset="30.8%" stop-color="#353535" stop-opacity=".227"></stop><stop offset="53.2%" stop-color="#575757" stop-opacity=".318"></stop><stop offset="78.3%" stop-color="#858585" stop-opacity=".421"></stop><stop offset="100%" stop-color="#B3B3B3" stop-opacity=".51"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><g fill-rule="nonzero"><g><g><path fill="#000" d="M140.801 37.034c0 2.222-1.792 4.014-4.015 4.014H4.991c-2.224 0-4.038-1.792-4.038-4.014V4.967C.953 2.744 2.767.93 4.99.93h131.795c2.223 0 4.038 1.791 4.038 4.037l-.023 32.067z" transform="translate(-1471 -3098) translate(0 3044) translate(1471 54)"></path><path fill="#FFF" d="M31.645 20.773c-.023-3.379 2.767-5.034 2.903-5.102-1.588-2.313-4.038-2.631-4.922-2.654-2.065-.226-4.06 1.248-5.127 1.248-1.066 0-2.7-1.225-4.446-1.18-2.246.046-4.355 1.338-5.512 3.357-2.382 4.127-.613 10.182 1.678 13.493 1.134 1.633 2.473 3.447 4.22 3.38 1.7-.069 2.336-1.09 4.4-1.09 2.042 0 2.632 1.09 4.424 1.044 1.837-.023 2.994-1.633 4.083-3.288 1.316-1.86 1.837-3.72 1.86-3.81 0 0-3.516-1.338-3.561-5.398zm-3.358-9.955c.908-1.157 1.543-2.7 1.361-4.287-1.338.068-2.994.93-3.947 2.041-.839.998-1.61 2.608-1.406 4.128 1.497.113 3.04-.749 3.992-1.882z" transform="translate(-1471 -3098) translate(0 3044) translate(1471 54)"></path><path fill="url(#q7is0neyva)" d="M136.764 0H66.17l27.652 42h42.942c2.744 0 4.968-2.222 4.968-4.966V4.967c0-2.745-2.224-4.967-4.968-4.967z" transform="translate(-1471 -3098) translate(0 3044) translate(1471 54)"></path><path fill="#FFF" d="M56.37 33.088H53.99l-1.316-4.105h-4.537l-1.248 4.105h-2.313l4.491-13.97h2.79l4.515 13.97zm-4.083-5.829l-1.18-3.65c-.135-.364-.362-1.248-.702-2.632h-.046c-.136.59-.363 1.475-.658 2.631l-1.157 3.651h3.743zm15.63.658c0 1.724-.477 3.062-1.407 4.06-.839.884-1.86 1.337-3.107 1.337-1.339 0-2.291-.476-2.881-1.428v5.284h-2.223V26.307c0-1.066-.023-2.177-.091-3.311h1.973l.137 1.587h.045c.749-1.202 1.883-1.814 3.403-1.814 1.18 0 2.177.476 2.971 1.406.794.975 1.18 2.223 1.18 3.742zm-2.269.09c0-.974-.226-1.79-.657-2.426-.477-.658-1.135-.998-1.951-.998-.545 0-1.044.182-1.497.545-.454.362-.75.839-.885 1.451-.068.227-.09.454-.114.68v1.679c0 .725.227 1.36.68 1.86.455.498 1.044.748 1.748.748.839 0 1.497-.318 1.973-.976.477-.635.703-1.496.703-2.562zm13.883-.09c0 1.724-.476 3.062-1.406 4.06-.84.884-1.86 1.337-3.108 1.337-1.338 0-2.291-.476-2.88-1.428v5.284H69.89V26.307c0-1.066-.022-2.177-.09-3.311h1.973l.136 1.587h.046c.748-1.202 1.882-1.814 3.402-1.814 1.18 0 2.178.476 2.972 1.406.794.975 1.202 2.223 1.202 3.742zm-2.29.09c0-.974-.228-1.79-.659-2.426-.476-.658-1.134-.998-1.95-.998-.545 0-1.044.182-1.498.545-.453.362-.748.839-.884 1.451-.069.272-.114.499-.114.68v1.679c0 .725.227 1.36.68 1.86.454.498 1.044.748 1.747.748.84 0 1.497-.318 1.974-.976.476-.635.703-1.496.703-2.562zm15.243 1.157c0 1.18-.408 2.155-1.248 2.903-.907.817-2.177 1.225-3.81 1.225-1.498 0-2.7-.295-3.63-.862l.522-1.86c.975.59 2.064.862 3.243.862.84 0 1.498-.181 1.974-.567.476-.385.703-.884.703-1.52 0-.566-.204-1.042-.59-1.428-.385-.386-1.02-.748-1.928-1.089-2.45-.907-3.675-2.245-3.675-4.014 0-1.156.431-2.086 1.293-2.812.862-.725 2.02-1.088 3.426-1.088 1.27 0 2.336.226 3.175.657l-.567 1.815c-.794-.431-1.678-.635-2.676-.635-.794 0-1.407.204-1.86.59-.363.34-.568.77-.568 1.27 0 .544.205 1.02.636 1.36.363.34 1.043.68 2.041 1.089 1.202.476 2.087 1.043 2.654 1.7.613.635.885 1.43.885 2.404zm7.418-4.467h-2.473v4.898c0 1.247.431 1.86 1.316 1.86.408 0 .726-.023.998-.114l.068 1.701c-.431.159-1.02.25-1.747.25-.884 0-1.565-.272-2.064-.817-.5-.544-.749-1.451-.749-2.721v-5.08h-1.474v-1.678h1.474v-1.837l2.2-.658v2.517h2.473l-.022 1.679zm11.115 3.265c0 1.542-.454 2.812-1.338 3.81-.93 1.02-2.155 1.542-3.698 1.542-1.474 0-2.654-.499-3.539-1.474-.884-.975-1.315-2.222-1.315-3.719 0-1.565.453-2.835 1.36-3.833.908-.997 2.133-1.496 3.653-1.496 1.474 0 2.677.499 3.561 1.474.885.952 1.316 2.2 1.316 3.696zm-2.314.046c0-.93-.204-1.724-.59-2.382-.476-.793-1.134-1.201-2.018-1.201-.908 0-1.588.408-2.065 1.201-.408.658-.59 1.475-.59 2.427 0 .93.205 1.724.59 2.381.477.794 1.157 1.202 2.042 1.202.862 0 1.52-.408 2.019-1.224.408-.68.612-1.474.612-2.404zm9.596-3.04c-.227-.045-.477-.067-.704-.067-.793 0-1.406.295-1.814.884-.363.522-.567 1.18-.567 1.996v5.284h-2.246v-6.894c0-1.066-.023-2.11-.068-3.175h1.95l.091 1.927h.068c.227-.657.613-1.201 1.112-1.587.476-.34 1.043-.544 1.61-.544.205 0 .386.022.568.045v2.132zm10.026 2.609c0 .34-.023.68-.09 1.02h-6.715c.023.998.34 1.77.975 2.29.567.477 1.293.704 2.2.704.999 0 1.906-.159 2.723-.476l.34 1.542c-.953.408-2.087.612-3.38.612-1.565 0-2.79-.454-3.675-1.383-.884-.93-1.338-2.155-1.338-3.697 0-1.52.408-2.79 1.247-3.787.862-1.089 2.042-1.61 3.517-1.61 1.451 0 2.563.544 3.289 1.61.612.862.907 1.905.907 3.175zm-2.132-.59c.022-.657-.136-1.247-.431-1.723-.386-.635-.976-.93-1.792-.93-.726 0-1.339.295-1.792.907-.363.476-.59 1.066-.658 1.746h4.673zM47.5 14.174c-.613 0-1.157-.023-1.61-.09V7.324c.635-.09 1.27-.136 1.905-.136 2.563 0 3.743 1.27 3.743 3.334 0 2.358-1.407 3.65-4.038 3.65zm.363-6.123c-.34 0-.635.022-.885.068v5.125c.136.023.386.023.749.023 1.678 0 2.631-.953 2.631-2.744 0-1.588-.862-2.472-2.495-2.472zm7.35 6.168c-1.452 0-2.382-1.088-2.382-2.54 0-1.52.952-2.608 2.472-2.608 1.43 0 2.382 1.02 2.382 2.54s-.998 2.608-2.472 2.608zm.045-4.354c-.794 0-1.316.748-1.316 1.792 0 1.02.522 1.769 1.293 1.769.772 0 1.293-.794 1.293-1.792.023-1.02-.499-1.769-1.27-1.769zm10.684-.703l-1.542 4.944H63.38l-.635-2.155c-.159-.521-.295-1.065-.409-1.61h-.022c-.09.545-.227 1.089-.409 1.61l-.68 2.155h-1.02l-1.453-4.944h1.135l.567 2.359c.136.567.25 1.088.34 1.587h.023c.09-.408.204-.93.408-1.587l.703-2.359h.908l.68 2.313c.159.567.295 1.111.408 1.633h.023c.068-.499.182-1.043.34-1.633l.613-2.313h1.043zm5.694 4.944h-1.089V11.27c0-.884-.34-1.315-.998-1.315-.658 0-1.111.567-1.111 1.202v2.948h-1.112v-3.538c0-.43 0-.907-.045-1.406h.975l.045.771h.023c.295-.522.908-.862 1.565-.862 1.044 0 1.724.794 1.724 2.087l.023 2.948zm3.04 0h-1.112V6.872h1.112v7.234zm4.015.113c-1.452 0-2.382-1.088-2.382-2.54 0-1.52.953-2.608 2.473-2.608 1.429 0 2.381 1.02 2.381 2.54s-.998 2.608-2.472 2.608zm.045-4.354c-.794 0-1.315.748-1.315 1.792 0 1.02.521 1.769 1.293 1.769.77 0 1.293-.794 1.293-1.792 0-1.02-.5-1.769-1.27-1.769zm6.76 4.24l-.09-.566h-.023c-.34.454-.817.68-1.452.68-.885 0-1.52-.612-1.52-1.451 0-1.225 1.066-1.86 2.904-1.86v-.09c0-.658-.34-.976-1.021-.976-.5 0-.907.114-1.293.363l-.227-.725c.454-.295 1.02-.431 1.701-.431 1.293 0 1.951.68 1.951 2.04v1.815c0 .499.023.884.068 1.18l-.998.022zm-.159-2.471c-1.225 0-1.837.295-1.837.998 0 .521.318.77.749.77.567 0 1.088-.43 1.088-.997v-.771zm6.42 2.472l-.045-.794h-.023c-.318.59-.84.907-1.588.907-1.202 0-2.087-1.043-2.087-2.517 0-1.542.907-2.63 2.178-2.63.658 0 1.134.226 1.406.68h.023v-2.88h1.111v5.896c0 .476.023.93.046 1.338h-1.021zm-.159-2.903c0-.703-.453-1.293-1.157-1.293-.816 0-1.315.726-1.315 1.747 0 .997.521 1.678 1.293 1.678.703 0 1.18-.612 1.18-1.316v-.816zm8.099 3.016c-1.452 0-2.382-1.088-2.382-2.54 0-1.52.952-2.608 2.472-2.608 1.43 0 2.382 1.02 2.382 2.54s-.998 2.608-2.472 2.608zm.045-4.354c-.794 0-1.293.748-1.293 1.792 0 1.02.522 1.769 1.293 1.769.771 0 1.293-.794 1.293-1.792-.023-1.02-.522-1.769-1.293-1.769zm8.348 4.24h-1.112v-2.834c0-.884-.34-1.315-.998-1.315-.658 0-1.089.567-1.089 1.202v2.948h-1.111v-3.538c0-.43 0-.907-.046-1.406h.976l.045.771h.023c.295-.522.907-.862 1.565-.862 1.044 0 1.724.794 1.724 2.087v2.948h.023zm7.395-4.127h-1.202v2.404c0 .613.204.907.635.907.204 0 .363-.022.499-.045l.022.84c-.204.09-.499.113-.862.113-.862 0-1.383-.477-1.383-1.724V9.978h-.726v-.816h.726v-.907l1.089-.318v1.225h1.202v.816zm5.83 4.128h-1.09v-2.812c0-.885-.34-1.338-.997-1.338-.567 0-1.112.385-1.112 1.179v2.994h-1.089V6.872h1.09v2.97h.022c.34-.544.84-.816 1.497-.816 1.044 0 1.679.816 1.679 2.109v2.97zm5.966-2.2h-3.312c.022.93.635 1.474 1.565 1.474.499 0 .93-.09 1.338-.227l.182.771c-.477.205-1.021.295-1.656.295-1.543 0-2.473-.975-2.473-2.494 0-1.52.93-2.654 2.337-2.654 1.27 0 2.064.93 2.064 2.359 0 .136 0 .295-.045.476zm-.998-.794c0-.77-.386-1.315-1.09-1.315-.634 0-1.134.544-1.202 1.315h2.292z" transform="translate(-1471 -3098) translate(0 3044) translate(1471 54)"></path></g></g></g></g></svg></a></div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    
       </>
    )

}
export default Short;