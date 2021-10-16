import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faMapMarked, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className= "text-gray-100 p-8 bg-black">
            {/* <div className=""><Image className="absolute -z-10 bottom-0" src="/footer/Footer.png" layout="intrinsic" width="8004" height="3424"></Image></div> */}
            <div className="grid grid-cols-2 gap-5">
                <div className="">
                    Reach out at :
                    <div className="text-blue-400"><a href="">tedxstteresascollege@gmail.com</a></div>
                    <div>
                        Organizer<br />
                        Sneha Anna George<br />
                        xxxxxxxxxx<br />
                    </div>
                    <div>
                        Co-Organizer<br />
                        Marianne Joseph<br />
                        xxxxxxxxxx<br /></div>
                </div>
                <div className="text-right">
                    Locate us
                    <FontAwesomeIcon icon={faMapMarked} className="text-blue-400 ml-2" fixedWidth />
                    <div className="">
                        St. Teresa’s College<br />Park Avenue Road<br />Ernakulam<br />Kerala - 682011<br />India<br />
                    </div>
                </div><div className="">
                </div>
                <div className="text-right">
                    Say Hello
                    <div className="flex justify-end gap-3 mt-3">
                        <a href=""><span><FontAwesomeIcon icon={faEnvelope} className="text-blue-400 ml-2" size="2x" /></span></a>
                        <a href=""><span><FontAwesomeIcon icon={faInstagram} className="text-blue-400 ml-2" size="2x" /></span></a>
                        <a href=""><span><FontAwesomeIcon icon={faFacebook} className="text-blue-400 ml-2" size="2x" /></span></a>
                        <a href=""><span><FontAwesomeIcon icon={faLinkedin} className="text-blue-400 ml-2" size="2x" /></span></a>
                    </div>
                </div>
                <div className="text-center col-span-2">
                    This independent TEDx event is operated under the license from TED<br /> Website Created By: XXXXXX
                </div>
            </div>
        </footer>
    );
}

export default Footer;