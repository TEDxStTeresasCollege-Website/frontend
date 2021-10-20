import Head from "next/head";

const TedxSTC = () => {
    return (
        <>
            <Head>
                <title>TedX STC : TedX TedxSTC</title>
                <meta name="description" content="TedX STC : TedX TedxSTC" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>

            <div className="flex flex-col gap-5 items-center text-center justify-center font-sans text-black mx-auto w-3/4 mt-52">
                <h1 className="font-bold text-5xl">TedxSTC</h1>
                <h3 className="text-2xl text-center">A TEDx event is only as phenomenal as the team behind it. Behold, a troupe of carefully selected, brilliant minds, who encompass the essence of TEDx along with a stroke of creativity and enthusiasm. Our 32 volunteers are the hands behind the different parts of every event and together make up the 7 teams of TEDxStTeresasCollege. We proudly stand as one - united by a purpose to spread ideas worth sharing.</h3>
            </div>
        </>
    );
}

export default TedxSTC;