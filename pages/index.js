import Head from 'next/head'
import Carousel from '../components/Carousel'

export default function Home() {
  return (
    <div>
      <Head>
        <title>TedX STC</title>
        <meta name="description" content="TedX STC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section id="home" className="w-full h-screen">
        <img className="absolute -z-1 object-cover w-full" src="/home/NightBackground.png" />
        <img className="absolute -z-1 w-1/2 top-32" src="/home/Cloud1.png" />
        <img className="absolute -z-1 w-1/2 top-32 right-0" src="/home/Cloud2.png" />
        <div className="flex flex-col gap-5 text-center items-center justify-center font-sans text-white min-h-screen">
          <h1 className="font-bold text-5xl">Welcome to TEDxStTeresasCollege</h1>
          <h3 className="text-2xl">Where perception meets new perspective</h3>
        </div>
      </section>

      <section id="vision" className="w-full h-screen">
        <div className="flex flex-col gap-5 items-center justify-center text-center font-sans text-black min-h-screen mx-auto w-3/4">
          <h1 className="font-bold text-5xl">Our Vision</h1>
          <h3 className="text-2xl">Our vision is to build an exuberant community that is curious and open to different perspectives. We believe that when the Teresian spirit meets TED's ethos, mind blowing ideas erupt.</h3>
          <h3 className="text-2xl">TEDxStTeresasCollege seeks to ignite enlightening conversations and draw curious minds to our stage to see the world around us in a different light. We visualize a generation where young people collaborate to spearhead groundbreaking, innovative changes in society through the values they take away from our events. Our aim is to be the confluence of ideals and values that are catalysts for spreading noteworthy ideas.</h3>
        </div>
      </section>

      <section id="about" className="w-full h-screen relative">
        <img className="absolute -z-1 object-cover -top-36" src="/home/background.png" />
        <div className="flex space-x-32 w-3/4 h-3/4 pt-10 items-center m-auto text-center text-gray-100">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex-1">
            <h2 className="text-2xl font-bold mb-2">Up Next ...</h2>
            <div className="pt-4">
              <p >Lorem ipsum dolor sit amet, consectetuer adipisci</p>
              <a href="#">Read More</a>
            </div>
            <div className="pt-4">
              <p >Lorem ipsum dolor sit amet, consectetuer adipisci</p>
              <a href="#">Read More</a>
            </div>
            <div className="pt-4">
              <p >Lorem ipsum dolor sit amet, consectetuer adipisci</p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex-1 text-gray-100">
            <h2 className="text-2xl font-bold mb-2">Featured Blog Post</h2>
            <div className="pt-4">
              <p >Lorem ipsum dolor sit amet, consectetuer adipisci</p>
              <a href="#">Read More</a>
            </div>
            <div className="pt-4">
              <p >Lorem ipsum dolor sit amet, consectetuer adipisci</p>
              <a href="#">Read More</a>
            </div>
            <div className="pt-4">
              <p >Lorem ipsum dolor sit amet, consectetuer adipisci</p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </section>

      <section id="camera-roll" className="w-full h-screen">
        <div className="flex flex-col gap-5 items-center justify-center font-sans text-black min-h-screen mx-auto w-3/4">
          <h1 className="font-bold text-5xl">Camera Roll</h1>
        </div>
        <Carousel />
      </section>

      <section id="whatIsTedX" className="w-full h-screen">
        <div className="flex flex-col gap-5 items-center justify-center text-center font-sans text-black min-h-screen mx-auto w-3/4">
          <h1 className="font-bold text-5xl">What is TEDx?</h1>
          <h3 className="text-2xl">In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDxStTeresasCollege, where x = independently organized TED event. At our TEDxStTeresasCollege event, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.</h3>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            About TED and TEDx
          </button>
        </div>
      </section>

    </div>
  )
}
