import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Partners = () => {
    return (
        <>
            <Head>
                <title>Partners : TEDxStTeresasCollege</title>
                <meta name="description" content="Partners : TEDxStTeresasCollege" />
                <link rel="icon" href="icons/logo.ico" />
            </Head>

            <Navbar />

            <div className="flex flex-col gap-5 items-center text-center justify-center font-sans text-black mx-auto w-3/4 mt-40 mb-20">
                <h1 className="font-bold text-2xl md:text-4xl">Our Partners</h1>
                <h3 className="text-sm md:text-lg text-center">Our vision is to build an exuberant community that is curious and open to different perspectives. We believe that when the Teresian spirit meets TED's ethos, mind blowing ideas erupt.
                    TEDxStTeresasCollege seeks to ignite enlightening conversations and draw curious minds to our stage to see the world around us in a different light. We visualize a generation where young people
                    collaborate to spearhead groundbreaking, innovative changes in society through the values they take away from our events. Our aim is to be the confluence of ideals and values that are catalysts for spreading noteworthy ideas.</h3>
                <h3 className="text-sm md:text-lg text-center">
                    Get in touch with us to explore partnership opportunities
                </h3>
            </div>

            <Footer />
        </>
    );
}

export default Partners;