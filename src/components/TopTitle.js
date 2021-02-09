import React, {Component} from 'react';
import {FaPhoneAlt, FiSearch} from "react-icons/all";

import {getText} from "../locales";
import {SITE_LANG} from "../tools/constants";
import {Link} from "react-router-dom";

class TopTitle extends Component {
    render() {
        const changeLang = (lang) => {
            localStorage.setItem(SITE_LANG, lang);
            window.location.reload();
        }

        return (
            <div>
                <section id="top-title">
                    <div className="container py-4">
                        <div className="row">
                            <ul className="nav w-100">
                                <li className="nav-item mr-5">
                                    <a href='/' className="dustlikdon-logo text-decoration-none">Dustlikdon.uz</a>
                                </li>
                                <li className="nav-item">
                                    <div className="input-group bg-white border-0 shadow-search">
                                        <div className="input-group-prepend cursor-pointer">
                                            <span className="input-group-text border-0 bg-white"><FiSearch
                                                color="black"/></span>
                                        </div>
                                        <input type="text" className="form-control shadow-none text-dark border-0 w-400"
                                               placeholder={getText("search")}/>
                                    </div>
                                </li>
                                <li className="nav-item d-flex ml-auto mr-5">
                                    <a href="#" onClick={() => changeLang("uz")} className="nav-link text-decoration-none">
                                        <div className='flag-shadow'><img src="icons/uzbek.png" className='' alt="" width='30'/></div>
                                    </a>
                                    <a href="#" onClick={() => changeLang("ru")} className="nav-link text-decoration-none">
                                        <div className='flag-shadow'><img src="icons/rus.svg" className='' alt="" width='30'/></div>
                                    </a>
                                    <a href="#" onClick={() => changeLang("en")} className="nav-link text-decoration-none">
                                        <div className='flag-shadow'><img src="icons/usa.png" className='' alt="" width='30'/></div>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <div className="phone-number py-2 px-4 d-flex align-items-center cursor-pointer">
                                        <FaPhoneAlt className="mr-2 phone-color"/>
                                        <a href="tel:+998723354116" className='text-green'>99872 335-41-16</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link to="/admin" className='ml-2 text-dark'>admin</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default TopTitle;