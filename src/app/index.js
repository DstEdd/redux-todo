import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const Core = () =>(
    <div>
        <div className="container main">
            <section>
                    <h1 className="text-center">НАШІ СПЕЦІАЛІСТИ</h1>
                    <div className="row">
                        <div className="col-md-4"><img src="../img/ba.png" className="float-left" alt="ba"></img></div>
                        <div className="col-md-4"><img src="../img/gv.png" className=" mx-auto d-block" alt="gv"></img></div>
                        <div className="col-md-4"><img src="../img/pi.png" className="float-right" alt="pi"></img></div>
                    </div>
            </section>
        </div>
        <div className="tech"></div>
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src="../img/logo2.png" className="foot-logo" alt="logo"></img>
                    </div>
                    <div className="col-md-4">
                        <address class="contact-info">
                            <dl>
                                <dt>КОНТАКТИ</dt>
                                <dd class="block"><a href="callto:#">800-2345-6789</a></dd>
                            </dl>
                            <p>Прикарпатська Юридична Компанія , 123 Федьковича, Івано-Франківськ</p>
                            <dl>
                                <dt>Електронна Адреса</dt>
                                <dd><a href="mailto:#">info@musthaveman.org</a></dd>
                            </dl>
                        </address>
                    </div>
                </div>
            </div>
        </footer>
    </div>
);

ReactDOM.render(<Core/>, document.getElementById('root'));