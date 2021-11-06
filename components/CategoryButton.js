const Button = ({text}) => {
    return (
        <button className="text-black bg-transparent border border-solid border-black hover:bg-black hover:text-white active:bg-purple-600 font-bold uppercase text-xs md:text-sm px-6 py-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">{text}</button>
    );
}

export default Button;