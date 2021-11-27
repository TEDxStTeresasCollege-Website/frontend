import Image from 'next/image'

export default function Background() {
    return (
        <>
            <div className="absolute -z-10 bg-black w-full h-full"></div>
            <div className="absolute -z-1 h-full w-full mobile"><Image src="/mobile/bg.png" layout="fill" /></div>
            <div className="absolute -z-1 h-full w-full web"><Image src="/web/bg.png" layout="fill" /></div>
        </>
    )
}