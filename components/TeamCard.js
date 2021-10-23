const TeamCard = ({ name, designation, social }) => {
    return (
        <>
            <div>
                <img src="https://mdbootstrap.com/img/new/standard/city/031.jpg" className="shadow-xl mb-2 object-cover" alt="" />
                <div className="text-center">
                    <h5 className="text-xl font-semibold mb-1">{name}</h5>
                    <p className="mb-2">{designation}</p>
                    <button className="bg-purple-500 text-white active:bg-purple-600 font-bold text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">{social}</button>
                </div>
            </div>
        </>
    );
}

export default TeamCard;