import Head from 'next/head'
import Button from '../components/CategoryButton';
import TeamCard from '../components/TeamCard'

const Team = () => {

    return (
        <>
            <Head>
                <title>TedX STC : TedX Team</title>
                <meta name="description" content="TedX STC : TedX Team" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>

            <div className="flex flex-col gap-5 items-center text-center justify-center font-sans text-black mx-auto w-3/4 mt-52 mb-20">
                <h1 className="font-bold text-5xl">Team</h1>
                <h3 className="text-2xl text-center">A TEDx event is only as phenomenal as the team behind it. Behold, a troupe of carefully selected, brilliant minds, who encompass the essence of TEDx along with a stroke of creativity and enthusiasm. Our 32 volunteers are the hands behind the different parts of every event and together make up the 7 teams of TEDxStTeresasCollege. We proudly stand as one - united by a purpose to spread ideas worth sharing.</h3>
            </div>
            <div className="flex justify-center m-5 gap-3">
                <Button text="All" />
                <Button text="Team 1" />
                <Button text="Team 2" />
            </div>
            <div className="m-10 border-0 border-gray-900 grid sm:grid-cols-1 lg:grid-cols-4 gap-5 w-3/4 mx-auto mb-32">
                <TeamCard name="One" designation="Head" social="In" />
            </div>

        </>
    );
}

export default Team;