import Head from 'next/head'

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
            <div class="flex justify-center m-5">
                <button id="all" class="text-purple-500 bg-transparent border border-solid border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Regular</button>
                <button id="core" class="text-purple-500 bg-transparent border border-solid border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Regular</button>
                <button id="content" class="text-purple-500 bg-transparent border border-solid border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Regular</button>
            </div>
            <div class="m-10 border-0 border-gray-900 grid sm:grid-cols-1 lg:grid-cols-4 gap-5 w-3/4 mx-auto mb-32">
                <div>
                    <img src="https://mdbootstrap.com/img/new/standard/city/031.jpg" class="shadow-xl mb-2 object-cover" alt="" />
                    <div class="text-center">
                        <h5 class="text-xl font-semibold mb-1">Member 1</h5>
                        <p class="mb-2">Designation</p>
                        <button class="bg-purple-500 text-white active:bg-purple-600 font-bold text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">In</button>
                    </div>
                </div>
                <div>
                    <img src="https://mdbootstrap.com/img/new/standard/city/031.jpg" class="shadow-xl mb-2 object-cover" alt="" />
                    <div class="text-center">
                        <h5 class="text-xl font-semibold mb-1">Member 1</h5>
                        <p class="mb-2">Designation</p>
                        <button class="bg-purple-500 text-white active:bg-purple-600 font-bold text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">In</button>
                    </div>
                </div>
                <div>
                    <img src="https://mdbootstrap.com/img/new/standard/city/031.jpg" class="shadow-xl mb-2 object-cover" alt="" />
                    <div class="text-center">
                        <h5 class="text-xl font-semibold mb-1">Member 1</h5>
                        <p class="mb-2">Designation</p>
                        <button class="bg-purple-500 text-white active:bg-purple-600 font-bold text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">In</button>
                    </div>
                </div>
                <div>
                    <img src="https://mdbootstrap.com/img/new/standard/city/031.jpg" class="shadow-xl mb-2 object-cover" alt="" />
                    <div class="text-center">
                        <h5 class="text-xl font-semibold mb-1">Member 1</h5>
                        <p class="mb-2">Designation</p>
                        <button class="bg-purple-500 text-white active:bg-purple-600 font-bold text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">In</button>
                    </div>
                </div>
                <div>
                    <img src="https://mdbootstrap.com/img/new/standard/city/031.jpg" class="shadow-xl mb-2 object-cover" alt="" />
                    <div class="text-center">
                        <h5 class="text-xl font-semibold mb-1">Member 1</h5>
                        <p class="mb-2">Designation</p>
                        <button class="bg-purple-500 text-white active:bg-purple-600 font-bold text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">In</button>
                    </div>
                </div>
                <div>
                    <img src="https://mdbootstrap.com/img/new/standard/city/031.jpg" class="shadow-xl mb-2 object-cover" alt="" />
                    <div class="text-center">
                        <h5 class="text-xl font-semibold mb-1">Member 1</h5>
                        <p class="mb-2">Designation</p>
                        <button class="bg-purple-500 text-white active:bg-purple-600 font-bold text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">In</button>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Team;