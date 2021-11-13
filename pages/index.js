import Head from 'next/head'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Slide from '../components/Slide'
import Footer from '../components/Footer'

export default function Home() {

  return (
    <div>
      <Head>
        <title>TedX STC</title>
        <meta name="description" content="TedX STC" />
        <link rel="icon" href="icons/logo.ico" />
      </Head>

      <Navbar hide="opacity-0" />

      <section id="home" className="w-full h-screen relative">
        <div className="absolute -z-1 h-120 w-full mobile"><Image src="/mobile/home/bg.png" layout="fill" /></div>
        <div className="absolute -z-1 h-120 w-full web"><Image src="/web/home/NightBackground.png" layout="fill" /></div>
        <div className="absolute -z-1 w-1/2 h-1/3 md:h-2/3 top-24 web"><Image className="relative" src="/web/home/Cloud1.png" layout="fill" /></div>
        <div className="absolute -z-1 w-1/2 h-1/3 md:h-2/3 top-72 md:top-36 right-0 web"><Image className="relative" src="/web/home/Cloud2.png" layout="fill" /></div>
        <div className="flex flex-col gap-5 text-center items-center justify-center font-sans text-white min-h-screen w-full">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-3xl">Welcome to TEDxStTeresasCollege</h1>
          <h3 className="text-xl sm:text-2xl">Where perception meets new perspective</h3>
        </div>
      </section>

      <section id="vision" className="w-full min-h-full">
        <div className="text-center font-sans text-black mt-36 mx-auto w-5/6 md:w-3/4 p-20">
          <h1 className="font-bold text-2xl md:text-3xl">Our Vision</h1>
          <h3 className="text-sm md:text-lg">Our vision is to build an exuberant community that is curious and open to different perspectives. We believe that when the Teresian spirit meets TED's ethos, mind blowing ideas erupt.</h3>
          <h3 className="text-sm md:text-lg">TEDxStTeresasCollege seeks to ignite enlightening conversations and draw curious minds to our stage to see the world around us in a different light. We visualize a generation where young people collaborate to spearhead groundbreaking, innovative changes in society through the values they take away from our events. Our aim is to be the confluence of ideals and values that are catalysts for spreading noteworthy ideas.</h3>
        </div>
      </section>

      <section id="about" className="w-full min-h-full relative">
        <div className="absolute h-full w-full -z-1 mobile">
          <Image className="relative " src="/mobile/home/secondbg.png" layout="fill" objectFit="fit" objectPosition='center' />
        </div>
        <div className="absolute h-full w-full -z-1 web">
          <Image className="relative web" src="/web/home/background.png" layout="fill" objectFit="fit" objectPosition='center' />
        </div>
        <div className="flex flex-wrap md:gap-5 justify-center items-center w-5/6 md:w-3/4 min-h-screen mx-auto text-center text-gray-100 py-40">
          <div className=" bg-gray-800 p-6 rounded-lg shadow-lg m-2">
            <h2 className="text-2xl font-bold mb-2">Up Next ...</h2>
            <div className="pt-4">
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetuer adipisci</p>
              <a href="#" className="text-sm">Read More</a>
            </div>
            <div className="pt-4">
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetuer adipisci</p>
              <a href="#" className="text-sm">Read More</a>
            </div>
            <div className="pt-4">
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetuer adipisci</p>
              <a href="#" className="text-sm">Read More</a>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg m-2">
            <h2 className="text-2xl font-bold mb-2">Featured Blog Post</h2>
            <div className="pt-4">
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetuer adipisci</p>
              <a href="#" className="text-sm">Read More</a>
            </div>
            <div className="pt-4">
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetuer adipisci</p>
              <a href="#" className="text-sm">Read More</a>
            </div>
            <div className="pt-4">
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetuer adipisci</p>
              <a href="#" className="text-sm">Read More</a>
            </div>
          </div>
        </div>
      </section>

      <section id="camera-roll" className="w-full min-h-full my-20">
        <div className="flex flex-col gap-5 items-center justify-center font-sans text-black min-h-full mx-auto w-full p-2 md:w-1/2">
          <h1 className="font-bold text-2xl md:text-3xl mb-5">Camera Roll</h1>
          <Slide />
        </div>
      </section>

      <section id="whatIsTedX" className="w-full min-h-full my-20">
        <div className="flex flex-col gap-5 items-center justify-center text-center font-sans text-black mx-auto w-3/4">
          <h1 className="font-bold text-2xl md:text-3xl">What is TEDx?</h1>
          <h3 className="text-sm md:text-lg">In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDxStTeresasCollege, where x = independently organized TED event. At our TEDxStTeresasCollege event, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.</h3>
          <button className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded text-sm">
            About TED and TEDx
          </button>
        </div>
      </section>

      <Footer />

    </div>
  )
}
