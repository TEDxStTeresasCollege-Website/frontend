const BlogCard = ({title, content, url, imagesrc}) => {
    return (
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 mx-auto w-3/4 mb-20">
            <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                <a href={url}>
                    <img className="rounded-t-lg" src={imagesrc} alt={title} />
                </a>
                <div className="p-5">
                    <a href={url}>
                        <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{title}</h5>
                    </a>
                    <p className="font-normal text-gray-700 mb-3">{content}</p>
                    <a className="text-white bg-gray-800 hover:bg-black focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href={url}>
                        Read more
                    </a>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;