import { FaPhoneAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import vector from "../Img/Vector 3.svg";
import chart from "../Img/Chart.svg";
import stock from "../Img/Stock.svg";
import circle from "../Img/Universe.svg";
import red from "../Img/Ellipse 1 (3).svg";
import smiling from "../Img/Smiling young.svg";
import handsome from "../Img/Handsome bearded guy posing against the white wall.svg";
import vector4 from "../Img/Vector (4).svg";
import vector31 from "../Img/Vector 3 (1).svg";

const Advisor = () => {
    return ( 
        <div className="Advisor-container">
            <div className="navbar">
                <div className="Navbar-container">
                    <div className="Navbar">
                        <div className="Navbar-flex">
                            <div className="Phone">
                                <div className="Phonecall">
                                    <FaPhoneAlt className="Call" />
                                    <p>1.800.555.1212</p>
                                </div>
                                <div className="Phonecall2">
                                    <FaPhoneAlt className="Call" />
                                    <p>LONDON, UK  T14;43:</p>
                                </div>
                            </div>
                            <div className="Login">
                                <p>LOGIN</p>
                            </div>
                        </div>
                    </div>
                    <div className="Financial">
                        <p>FINANCIAL TECHNOLOGY ADVISORS</p>
                        <GiHamburgerMenu className="Menu" />
                        <div className="Home">
                            <ul>
                                <li>HOME</li>
                                <li>CLIENTS</li>
                                <li>PARTNERS</li>
                                <li>SERVICES</li>
                                <li>CONTACT</li>
                            </ul>
                        </div>
                    </div>
                    <div className="DIFFERENTIATES-head">
                        <div className="DIFFERENTIATES">
                            <h3>WHAT DIFFERENTIATES US FROM OTHER ADVISERS ?</h3>
                        </div>
                    </div>
                    <div className="GENUINE-head">
                        <div className="GENUINE">
                            <h3>OUR GENUINE MOTIVATION TO SEE OUR CLIENTS SUCCEED.</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="TECHNOLOGY-Container">
                <div className="TECHNOLOGY-heading">
                    <div className="TECHNOLOGY">
                        <h3>WHO WE ARE</h3>
                        <p>I believe that through knowledge and discipline ,financial peace for all of us </p>
                        <p>Since founding Financial Technology Advisers in 2014 we have dedicated ourselves  to he provision of services what differentiates us from other advisers or consultances is a a genuine motivation to see our clients succeed today’s technology allows our clients to take their knowledge o the market in ways that previous generaions could only dream of</p>
                        <p>That’s why FTA is dedicated to seeing you choose the right technology strategy ensuring you maintain a competitive edge over your peers</p>
                        <div className="Vector">
                            <img src={vector} alt="" className="vector-image" width="100%" />
                            <p>FINANCIAL TECHNOLOGY ADVISORS</p>
                        </div>
                    </div>
                </div>

                <div className="Today-head">
                    <div className="Todays">
                        <p>TODAY’S TECHNOLOGY ALLOWS OUR CLIENTS TO TAKE THEIR KNOWLEDGE TO THE MARKET IN WAYS THAT PREVIOUS GENERATIONS COULD ONLY DREAM OF</p>
                    </div>
                </div>
            </div>

            <div className="DEDICATED">
                <h2>WHAT WE DO</h2>
                <p><span>fta</span> IS DEDICATED TO SEEING YOU CHOOSE THE RIGHT TECHNOLOGY STRATEGY ENSURING YOU MAINTAIN A COMPETITIVE EDGE OVER YOUR PEERS</p>
                <div className="DEDICATED-Contents">
                    <div className="DEDICATED-Heading">
                        <div className="Fta">
                            <img src={chart} alt="" className="chart-image" width="100%" />
                        </div>
                        <div className="Fta-heading">
                            <div className="Fta-head">
                                <img src={red} alt="" className="red-image" width="100%" />
                                <h2>Financial Services</h2>
                            </div>
                            <div className="Servicess">
                                <p><span>A</span> trust is a way of managing assets [money,investments ,land or buildings] for people -types of trust how they are taxed where to get help </p>
                            </div>
                        </div>
                    </div>

                    <div className="DEDICATED-Heading">
                        <div className="Fta">
                            <img src={stock} alt="" className="chart-image" width="100%" />
                        </div>
                        <div className="Fta-heading">
                            <div className="Fta-head">
                                <img src={red} alt="" className="red-image" width="100%" />
                                <h2>Tax & Finance</h2>
                            </div>
                            <div className="Servicess">
                                <p><span>A</span> trust is a way of managing assets [money,investments ,land or buildings] for people -types of trust how they are taxed where to get help </p>
                            </div>
                        </div>
                    </div>

                    <div className="DEDICATED-Heading">
                        <div className="Fta">
                            <img src={circle} alt="" className="chart-image" width="100%" />
                        </div>
                        <div className="Fta-heading">
                            <div className="Fta-head">
                                <img src={red} alt="" className="red-image" width="100%" />
                                <h2>Research & Training</h2>
                            </div>
                            <div className="Servicess">
                                <p><span>A</span> trust is a way of managing assets [money,investments ,land or buildings] for people -types of trust how they are taxed where to get help </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="Professional">
                <div className="prof">
                    <h3>DO  YOU FEEL YOU NEED PROFESSIONAL ADVICE </h3>
                    <p>That is simple to understand and straightforward to implement</p>
                </div>
                <button className="btn-action">CALL TO ACTION</button>
            </div>

            <div className="Choose"> 
                <div className="smiling">
                    <img src={smiling} alt="" className="smiling-image" width="100%" />
                </div>
                <div className="Choose-container">
                    <div className="Choose-text">
                        <h3>WHY CHOOSE US ?</h3>
                        <p>A trust is a way of managing assets [money,investments ,land or buildings] for people -types of trust how they are taxed where to get helpA trust is a way of managing assets [money,investments ,land or buildings] for people -types of trust how they are taxed where to get help </p>
                    </div>
                    <div className="Choose-Heading">
                        <div className="Choose-head">
                            <div className="Choose-red">
                                <img src={red} alt="" className="red2-image" width="100%" />
                                <h3>Board Level Advisory</h3>
                            </div>
                            <p>A trust is a way of managing assets [money,investments ,land or buildings] for people -types of trust how they are taxed where to get help</p>
                        </div>

                        <div className="Choose-head">
                            <div className="Choose-red">
                                <img src={red} alt="" className="red2-image" width="100%" />
                                <h3>Board Level Advisory</h3>
                            </div>
                            <p>A trust is a way of managing assets [money,investments ,land or buildings] for people -types of trust how they are taxed where to get help</p>
                        </div>

                        <div className="Choose-head">
                            <div className="Choose-red">
                                <img src={red} alt="" className="red2-image" width="100%" />
                                <h3>Board Level Advisory</h3>
                            </div>
                            <p>A trust is a way of managing assets [money,investments ,land or buildings] for people -types of trust how they are taxed where to get help</p>
                        </div>

                        <div className="Choose-head">
                            <div className="Choose-red">
                                <img src={red} alt="" className="red2-image" width="100%" />
                                <h3>Board Level Advisory</h3>
                            </div>
                            <p>A trust is a way of managing assets [money,investments ,land or buildings] for people -types of trust how they are taxed where to get help</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="Team">
                <div className="Team-text">
                    <h3>MEET OUT TEAM</h3>
                    <div className="new-all">
                        <p>Its all about people</p>
                    </div>
                    <p>From planning and strategy,to technology and marketing the, individual that make up XYZ company share a passion for financial success which influences everything we do. We prefer insourcing to outsourcing. so you have a team that understands your needs and is passionate about your success. The Result is consisitently great work and phenomal results that you are proud of.</p>
                </div>
                <div className="Team-heading">
                    <div className="Team-head">
                        <div className="Team-img">
                            <img src={handsome} alt="" className="handsome-image" width="100%" />
                        </div>
                        <div className="Meet">
                            <p>MEET MATT DANGERFIELD</p>
                            <p>+44[0]20 3434 3949</p>
                            <p>+44[0]20 3434 3949</p>
                        </div>
                    </div>

                    <div className="Team-head">
                        <div className="Team-img">
                            <img src={handsome} alt="" className="handsome-image" width="100%" />
                        </div>
                        <div className="Meet">
                            <p>MEET MATT DANGERFIELD</p>
                            <p>+44[0]20 3434 3949</p>
                            <p>+44[0]20 3434 3949</p>
                        </div>
                    </div>

                    <div className="Team-head">
                        <div className="Team-img">
                            <img src={handsome} alt="" className="handsome-image" width="100%" />
                        </div>
                        <div className="Meet">
                            <p>MEET MATT DANGERFIELD</p>
                            <p>+44[0]20 3434 3949</p>
                            <p>+44[0]20 3434 3949</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="Reach-container">
                <div className="Reach">
                    <h3>REACH OUT TO US</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Ligula ac orci ut ac cursus pulvinar. Eget at mauris tempor tempor mollis nisl. Viverra at sed nibh ullamcorper lobortis cras velit nunc lectus. Aenean ornare i</p>
                </div>
                <div className="Selected-Head">
                    <div className="Selected">
                        <p>Nothing selected</p>
                    </div>
                    <div className="Selected-input">
                        <input type="text" placeholder="First name" className="First" />
                        <input type="text" placeholder="Last name" className="First" />
                    </div>
                    <div className="Selected-input">
                        <input type="email" placeholder="Email" className="First" />
                        <input type="text" placeholder="Phone Number" className="First" />
                    </div>
                </div>
            </div>

            <footer>
                <div className="Footer-about">
                    <h3>ABOUT US</h3>
                    <div className="Footer-img">
                        <img src={vector31} alt="" className="vector31-image" width="100%" />
                        <p>FINANCIAL TECHNOLOGY ADVISORS</p>
                    </div>
                    <div className="Since">
                        <p>Since founding Financial Technology Advisors in 2014 we have dedicated ourselves to the position of services .What diffeentiates us from other advisors or consultancies is a genuine motivation to see our clients succeEd .today’s technology allows our clients to take their knowlegde to the market in ways that pr</p>
                    </div>
                </div>
                <div className="Services">
                    <p>SERVICES</p>
                    <div className="Services-head">
                        <img src={vector4} alt="" className="vector4-image" width="100%" />
                        <p>INVESTMENT MANAGMENT </p>
                    </div>
                    <div className="Services-head">
                        <img src={vector4} alt="" className="vector4-image" width="100%" />
                        <p>FINANCIAL PLANNING</p>
                    </div>
                    <div className="Services-head">
                        <img src={vector4} alt="" className="vector4-image" width="100%" />
                        <p>TAX & TRUSTS</p>
                    </div>
                    <div className="Services-head">
                        <img src={vector4} alt="" className="vector4-image" width="100%" />
                        <p>INSURANCE SOLUTIONS</p>
                    </div>
                    <div className="Services-head">
                        <img src={vector4} alt="" className="vector4-image" width="100%" />
                        <p>PROPERTY MANAGEMENT</p>
                    </div>
                    <div className="Services-head">
                        <img src={vector4} alt="" className="vector4-image" width="100%" />
                        <p>INVESTMENT MANAGMENT </p>
                    </div>
                    <div className="Services-head">
                        <img src={vector4} alt="" className="vector4-image" width="100%" />
                        <p>FINANCIAL PLANNING</p>
                    </div>
                    <div className="Services-head">
                        <img src={vector4} alt="" className="vector4-image" width="100%" />
                        <p>TAX & TRUSTS</p>
                    </div>
                </div>

                <div className="Recent">
                    <h3>RECENT NEWS</h3>
                    <div className="Recent-head">
                        <p>Lorem ipsum dolor sit amet consectetur. Ligula ac orci u</p>
                        <div className="Read-more">
                            <p>READ MORE</p>
                            <img src={vector4} alt="" className="read-image" width="100%" />
                        </div>
                    </div>

                    <div className="Recent-head">
                        <p>Lorem ipsum dolor sit amet consectetur. Ligula ac orci u</p>
                        <div className="Read-more">
                            <p>READ MORE</p>
                            <img src={vector4} alt="" className="read-image" width="100%" />
                        </div>
                    </div>

                    <div className="Recent-head">
                        <p>Lorem ipsum dolor sit amet consectetur. Ligula ac orci u</p>
                        <div className="Read-more">
                            <p>READ MORE</p>
                            <img src={vector4} alt="" className="read-image" width="100%" />
                        </div>
                    </div>
                </div>
            </footer>

        </div>
     );
}
 
export default Advisor;