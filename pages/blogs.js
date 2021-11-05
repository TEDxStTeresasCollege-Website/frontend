import Head from 'next/head'

const Blogs = () => {
    return (
        <div>
            <Head>
                <title>TedX STC : TedX Blogs</title>
                <meta name="description" content="TedX STC : TedX Blogs" />
                <link rel="icon" href="icons/logo.ico" />
            </Head>

            <div className="flex flex-col gap-5 items-center text-center justify-center font-sans text-black mx-auto w-3/4 mt-52 mb-20">
                <h1 className="font-bold text-5xl">Our Blogs</h1>
                <h3 className="text-2xl text-center">A TEDx event is only as phenomenal as the team behind it. Behold, a troupe of carefully selected, brilliant minds, who encompass the essence of TEDx along with a stroke of creativity and enthusiasm. Our 32 volunteers are the hands behind the different parts of every event and together make up the 7 teams of TEDxStTeresasCollege. We proudly stand as one - united by a purpose to spread ideas worth sharing.</h3>
            </div>

            <div>
                <div className="grid lg:grid-cols-3 sm:grid-cols-1 mx-auto w-3/4 mb-20">
                    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                        <a href="#">
                            <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">Blog Post 1</h5>
                            </a>
                            <p className="font-normal text-gray-700 mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <a className="text-white bg-gray-800 hover:bg-black focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                                Read more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blogs;