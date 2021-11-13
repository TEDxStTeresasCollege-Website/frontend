import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarked } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="text-xs md:text-sm text-gray-100 relative min-h-full mt-20 md:mt-0">
            
            <div className="absolute -z-20 top-0">
                <img className="bg-contain mobile" src="mobile/footer/footer.png" loading="eager"></img>
                <img className="bg-contain web" src="web/footer/footer.png" loading="eager"></img>
            </div>
            <div className="absolute -z-10 w-1/3 right-14 bottom-14 web"><img src="web/footer/boat.png"></img></div>
            <div className="absolute -z-10 bottom-0 web"><img width="40%" src="web/footer/net.png"></img></div>
            
            <div className="grid grid-cols-2 gap-5 px-5 md:p-10 md:mt-56">
                <div className="text-left">
                    Reach out at :
                    <div className="text-blue-400"><a href="">tedxstteresascollege@gmail.com</a></div>
                    <div className="py-2 md:float-left md:mr-5">
                        <div className="hover:underline">Organizer</div>
                        Sneha Anna George<br />
                        <a href="tel:+917994262370">+917994262370</a><br />
                    </div>
                    <div className="py-2">
                        <div className="hover:underline">Co-Organizer</div>
                        Marianne Joseph<br />
                        <a href="tel:+918078708025">+918078708025</a><br />
                    </div>
                </div>
                <div className="text-right">
                    <a href="https://goo.gl/maps/oNWWs5diruyXFeVe6">
                        Locate us
                        <span><FontAwesomeIcon icon={faMapMarked} className="text-blue-400 ml-2" fixedWidth /></span>
                    </a>
                    <div className="">
                        St. Teresa’s College<br />Park Avenue Road<br />Ernakulam<br />Kerala - 682011<br />India<br />
                    </div>
                </div>
                <div className="text-left">
                    Say Hello!
                    <div className="flex justify-start gap-3 mt-3">
                        <a href="https://instagram.com/tedxst_teresascollege"><span><FontAwesomeIcon icon={faInstagram} className="text-blue-400" size="2x" /></span></a>
                        <a href="https://www.facebook.com/Tedxstteresascollege-102464092186247/"><span><FontAwesomeIcon icon={faFacebook} className="text-blue-400 ml-2" size="2x" /></span></a>
                        <a href="https://www.linkedin.com/company/tedxstteresascollege"><span><FontAwesomeIcon icon={faLinkedin} className="text-blue-400 ml-2" size="2x" /></span></a>
                    </div>
                </div>
                <div className="">
                    <form action="\home" className="w-full max-w-sm md:ml-auto">
                        <div className="flex items-center mb-2">
                            <div className="w-1/2">
                                <label className="block text-gray-100 text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name"> Name </label>
                            </div>
                            <div className="w-1/2">
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                            </div>
                        </div>
                        <div className="flex items-center mb-2">
                            <div className="w-1/2">
                                <label className="block text-gray-100 text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password"> Email </label>
                            </div>
                            <div className="w-1/2">
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-email" type="email" />
                            </div>
                        </div>
                        <div className="flex items-center mb-2">
                            <div className="w-1/2">
                                <label className="block text-gray-100 text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password"> Organisation </label>
                            </div>
                            <div className="w-1/2">
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-organisation" type="text" />
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-1/2"></div>
                            <div className="w-1/2">
                                <input className="ml-auto shadow bg-blue-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white py-1 px-3 rounded" type="button" value="Subscribe" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="text-center mx-auto pt-20 pb-5 w-full md:w-1/2 px-2 md:mt-5">
                This independent event is operated under license from TED<br />
                Website developed by <a className='hover:underline' href="">Sharun E Rajeev</a> and <a className='hover:underline' href="">Gaurav Bhat</a>
            </div>

            <div className="absolute bg-gray-900 text-white rounded text-center md:w-1/4 p-3 left-1/2 top-10 opacity-0 hover:opacity-100">
                <h3 className="text-sm md:text-lg">Kumbalangi</h3>
                <p className="text-xs md:text-sm">This quaint fishing hamlet is a must-visit for experiencing Kerala's culture and delectable cuisine in its raw form.</p>
                <p className="text-xs md:text-sm">Sea sparkle (കവര്) along the backwaters abutting the Arabian sea, dotted with Chinese fishing nets paints a charming picture.</p>
            </div>

        </footer>
    );
}

export default Footer;



