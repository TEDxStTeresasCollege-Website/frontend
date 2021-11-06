import Navbar from '../components/Navbar';
import Head from 'next/head'
import Footer from '../components/Footer';

const about = () => {
    return (
        <div>
            <Head>
                <title>TedX STC : About Us</title>
                <meta name="description" content="TedX STC : About Us" />
                <link rel="icon" href="icons/logo.ico" />
            </Head>

            <Navbar />

            <section className="w-full md:w-1/3 min-h-screen mt-40 md:mt-56 mb-32">
                <div className="flex flex-col gap-5 items-center justify-center text-center font-sans text-black mx-auto w-3/4">
                    <h1 className="font-bold text-2xl md:text-5xl">About TEDx, x=independently organized event</h1>
                    <h3 className="text-sm md:text-2xl text-center">In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)</h3>
                    <h1 className="font-bold text-2xl md:text-5xl">About TED</h1>
                    <h3 className="text-sm md:text-2xl text-center">TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite the world's leading thinkers and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman.</h3>
                    <h3 className="text-sm md:text-2xl text-center">The annual TED Conference takes place each spring in Vancouver, British Columbia. TED's media initiatives include TED.com, where new TED Talks are posted daily; TED Translators, which provides subtitles and interactive transcripts as well as translations from volunteers worldwide; the educational initiative TED-Ed. TED has established The Audacious Project that takes a collaborative approach to funding ideas with the potential to create change at thrilling scale; TEDx, which supports individuals or groups in hosting local, self- organized TED-style events around the world, and the TED Fellows program, helping world-changing innovators from around the globe to amplify the impact of their remarkable projects and activities.</h3>
                    <h3 className="text-sm md:text-2xl text-center">Follow TED on <a href="http://twitter.com/TEDTalks">Twitter</a> or on <a href="http://www.facebook.com/TED">Facebook</a></h3>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default about;