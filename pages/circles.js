import Head from 'next/head'
import Carousel from '../components/carousel'

const Circles = () => {
    return (
        <>
            <Head>
                <title>TedX STC : TedX Circles</title>
                <meta name="description" content="TedX STC : TedX Circles" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>

            <div className="flex flex-col gap-5 items-center text-center justify-center font-sans text-black mx-auto w-3/4 min-h-full mt-52 mb-32">
                <h1 className="font-bold text-5xl">Circles Cards</h1>
            </div>

            <div className="flex flex-col gap-5 items-center text-center justify-center font-sans text-black mx-auto w-3/4 min-h-full mt-52 mb-32">
                <h2 className="text-2xl font-semibold">Learn more about TED Circles</h2>
                <div className="w-96 h-52 bg-gray-800"></div>
            </div>

            <div className="flex flex-col gap-5 items-center text-center justify-center font-sans text-black mx-auto w-3/4 min-h-full mt-52 mb-32">
                <h2 className="text-2xl font-semibold">Camera Roll</h2>
                <Carousel />
            </div>

            <div className="flex flex-col gap-5 items-center text-center justify-center font-sans text-black mx-auto w-3/4 min-h-full mt-52 mb-32">
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
        </>
    );
}

export default Circles;