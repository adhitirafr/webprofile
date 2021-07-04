import Head from '../component/Head'

export default function Home() {
  return (
    <div>
        <Head
            title="Home"
            description="We will help you to build your dream website"
        ></Head>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffd700" fillOpacity="1" d="M0,160L60,144C120,128,240,96,360,106.7C480,117,600,171,720,186.7C840,203,960,181,1080,165.3C1200,149,1320,139,1380,133.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        <div className="container mx-auto px-4 mb-5">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <div className="text-4xl font-thin mb-2">
                        Come from your dream, creating your own best website.
                    </div>
                    <div className="text-gray-400">Feel a new experience of creating website</div>
                </div>

                <div>
                    <div className="text-2xl mb-5 text-bold">
                        Our Strength
                    </div>

                    <div>
                        <div className="mb-1 text-gray-600">Good documentation</div>
                        <div className="mb-1 text-gray-600">Clean Code</div>
                        <div className="mb-1 text-gray-600">Best Consultation from the expert</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
