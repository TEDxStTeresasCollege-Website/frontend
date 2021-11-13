import Head from 'next/head'
import Button from '../components/CategoryButton'
import TeamCard from '../components/TeamCard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Team = () => {

    return (
        <>
            <Head>
                <title>TedX STC : TedX Team</title>
                <meta name="description" content="TedX STC : TedX Team" />
                <link rel="icon" href="icons/logo.ico" />
            </Head>

            <Navbar />

            <div className="flex flex-col gap-5 items-center text-center justify-center font-sans text-black mx-auto w-3/4 mt-52">
                <h1 className="font-bold text-2xl md:text-4xl">Team</h1>
                <h3 className="text-sm md:text-lg text-center">A TEDx event is only as phenomenal as the team behind it. Behold, a troupe of carefully selected, brilliant minds, who encompass the essence of TEDx along with a stroke of creativity and enthusiasm. Our 32 volunteers are the hands behind the different parts of every event and together make up the 7 teams of TEDxStTeresasCollege. We proudly stand as one - united by a purpose to spread ideas worth sharing.</h3>
            </div>
            <div className="flex justify-center m-5 mt-10 gap-3 flex-wrap lg:w-3/4 mx-auto">
                <Button text="All" />
                <Button text="Core Team" />
                <Button text="Content Team" />
                <Button text="Content Team" />
                <Button text="Event Management" />
                <Button text="Backup Volunteers" />
                <Button text="Executive Team" />
                <Button text="Media & Design" />
                <Button text="Sponsorship Team" />
                <Button text="Technical Team" />
            </div>
            <div className="m-10 border-0 border-gray-900 grid sm:grid-cols-1 lg:grid-cols-4 gap-5 w-3/4 mx-auto md:-mb-32">
                <TeamCard name="One" designation="Head" social="In" />
            </div>

            <Footer />
        </>
    );
}

export default Team;