import Head from 'next/head'
import Slide from '../components/Slide'
import CircleCard from '../components/CircleCards'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Circles = () => {
    return (
        <>
            <Head>
                <title>TedX STC : TedX Circles</title>
                <meta name="description" content="TedX STC : TedX Circles" />
                <link rel="icon" href="icons/logo.ico" />
            </Head>

            <Navbar />

            <div className="text-center font-sans text-black mx-auto w-5/6 md:w-3/4 min-h-full mt-52">
                <h1 className="font-bold text-2xl md:text-5xl">Circles Cards</h1>
                <CircleCard />
            </div>

            <div className="flex flex-col gap-5 items-center text-center justify-center font-sans text-black mx-auto w-5/6 md:w-3/4 min-h-full mt-52 mb-32">
                <h2 className="text-2xl font-semibold">Learn more about TED Circles</h2>
                <div className="w-full">
                    <iframe width='100%' height='100%' src="https://www.youtube-nocookie.com/embed/qvoShsSiHuI?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>

            <div className="flex flex-col gap-5 items-center text-center justify-center font-sans text-black mx-auto w-5/6 md:w-3/4 min-h-full mt-52 mb-32">
                <h2 className="text-2xl font-semibold">Camera Roll</h2>
                <Slide />
            </div>

            <div className="flex flex-col gap-5 items-center text-center justify-center font-sans text-black mx-auto w-5/6 md:w-3/4 min-h-full mt-52 mb-32">
                <h2 className="text-2xl font-semibold">Our Next Event</h2>
                <div className="w-96 h-52 bg-gray-800"></div>
                <h2 className="text-lg">Date : <span></span></h2>
                <h2 className="text-lg">Time : <span></span></h2>
                <h2 className="text-lg">Venue : <span></span></h2>
                <h2 className="text-lg">Description<span></span></h2>
                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                    I'm there! Sign me up!
                </button>
            </div>

            <Footer />
        </>
    );
}

export default Circles;