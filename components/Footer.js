import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarked } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="text-gray-100 relative bg-gray-900 -z-30 min-h-full">

            <div className="absolute -z-20 bottom-0"><img className="bg-cover" src="/footer/footer.png"></img></div>
            <div className="absolute -z-10 w-1/3 right-14 bottom-14"><img src="/footer/boat.png"></img></div>
            <div className="absolute -z-10 bottom-0"><img width="40%" src="/footer/net.png"></img></div>
            <div className="absolute bg-gray-900 text-white rounded text-center w-1/4 p-3 left-1/2 top-10 opacity-0 hover:opacity-100">
                <h3 className="text-lg">Kumbalangi</h3>
                <p className="text-sm">This quaint fishing hamlet is a must-visit for experiencing Kerala's culture and delectable cuisine in its raw form.</p>
                <p className="text-sm">Sea sparkle (കവര്) along the backwaters abutting the Arabian sea, dotted with Chinese fishing nets paints a charming picture.</p>
            </div>
            <div className="grid grid-cols-2 gap-5 p-10">
                <div className="">
                    Reach out at :
                    <div className="text-blue-400"><a href="">tedxstteresascollege@gmail.com</a></div>
                    <div className="py-2">
                        <div className="hover:underline">Organizer</div>
                        Sneha Anna George<br />
                        <a href="tel:+917994262370">+917994262370</a><br />
                    </div>
                    <div>
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
                    <div className="flex justify-start gap-3 mt-3 -m-">
                        <a href="https://instagram.com/tedxst_teresascollege"><span><FontAwesomeIcon icon={faInstagram} className="text-blue-400 ml-2" size="2x" /></span></a>
                        <a href="https://www.facebook.com/Tedxstteresascollege-102464092186247/"><span><FontAwesomeIcon icon={faFacebook} className="text-blue-400 ml-2" size="2x" /></span></a>
                        <a href="https://www.linkedin.com/company/tedxstteresascollege"><span><FontAwesomeIcon icon={faLinkedin} className="text-blue-400 ml-2" size="2x" /></span></a>
                    </div>
                </div>
                <div className="">
                    <form method="POST" className="w-5/12 grid grid-cols-5 gap-2 ml-auto">
                        <label className="text-gray-400 col-span-2 text-center">Name</label>
                        <input type="email" name="text" className="px-2 col-span-3" />
                        <label className="text-gray-400 col-span-2 text-center">Email</label>
                        <input type="email" name="email" className="px-2 col-span-3" />
                        <label className="text-gray-400 col-span-2 text-center">Organisation</label>
                        <input type="email" name="email" className="px-2 col-span-3" />
                        <div className="col-start-3">
                            <button type="submit" className="rounded bg-gray-600 px-2 mt-3">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="text-center mx-auto pt-20 pb-5">
                This independent event is operated under license from TED<br /> Website developed by <a href="">Sharun E Rajeev</a> and <a href="">Gaurav Bhat</a>
            </div>

        </footer>
    );
}

export default Footer;



