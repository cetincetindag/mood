import Image from 'next/image';

export default function Home() {
    return ( 
        <div className="w-screen h-screen bg-black flex justify-center items-center
        text-white">
            <div>
                <h1>title</h1>
                <p>description</p>
                <div>
                    <button>get started</button>
                </div>
            </div>
        </div>
    )
}
