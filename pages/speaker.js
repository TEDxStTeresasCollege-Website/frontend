import Head from 'next/head'

const Speaker = () => {
    return (
        <div>
            <Head>
                <title>TedX STC : TedX Speaker</title>
                <meta name="description" content="TedX STC : TedX Speaker" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>

            <section id="speaker" className="w-full mt-56 mb-32">
                <div className="flex flex-col gap-5 items-center text-center justify-center font-sans text-black mx-auto w-3/4">
                    <h1 className="font-bold text-5xl">Nominate a Speaker</h1>
                    <h3 className="text-2xl text-center">At TEDxStTeresasCollege, we are always on the lookout for passionate speakers who have the power to influence curious minds to see their surroundings in a different light.  If you know someone who can present an inspiring idea to the TEDx community, or if you believe that you can do so, we would love to hear from you!</h3>
                    <h3 className="text-2xl text-center">Please use our speaker recommendation form to tell us why this person would be a perfect speaker for a TEDxStTeresasCollege event.</h3>
                    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                        Nominate a Speaker
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Speaker;