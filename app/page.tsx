import Link from 'next/link'

export default function Home() {
    return ( 
        <div className="w-screen h-screen bg-black flex justify-center items-center
        text-white">
            <div className="w-full max-w-[600px] mx-auto">
                <h1 className="text-6xl mb-4">You choose what to remember.</h1>
                <p className="text-2xl text-white/60 mb-4">
                        Zelish is a private journaling app that helps you remember.
                    What you forget, Zelish remembers. Always.
                </p>
                <div>
                    <Link href="/journal">
                        <button className="bg-purple-600 px-4 py-2 rounded-lg text-xl">
                           Get Started 
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        
    )
}
