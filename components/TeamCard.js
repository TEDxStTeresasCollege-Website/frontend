import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";

const TeamCard = ({ name, designation, image, url }) => {
    return (
        <>
            <div>
                <img src={image} className="shadow-xl mb-2 object-cover mx-auto" alt="" />
                <div className="text-center">
                    <h5 className="text-xl font-semibold mb-1">{name}</h5>
                    <p className="mb-2">{designation}</p>
                    <div>
                        <a href={url}><FontAwesomeIcon icon={faInstagram} className="text-pink-800" size="2x" /></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TeamCard;