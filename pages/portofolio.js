import Head from '../component/Head'

const Project = () => {
    return (
        <>
            <Head
                title="Project"
                description="We will help you to build your dream website"
            ></Head>

            <div className="container mx-auto px-4  mt-3">
                <div className="text-2xl mb-3 font-bold">Portofolio</div>
                <div className="mb-5">
                    Here is some projects that we have created
                </div>

                <div className="mb-5">

                    <div className="grid gap-x-8 gap-y-4 lg:grid-cols-3 mb-20">
                        <div className="bg-blue-100 p-5 text-center">
                            <div className=" mx-auto pb-5 flex justify-center">
                                <svg xmlns="http://www.w3SS.org/2000/svg" className="h-20 w-20 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="mb-3 text-xl">
                                Web mobile
                            </div>
                                
                            <div>
                                A web mobile for a website that run in marketplace. This app use Framework7 as its framework, along with Vue.
                                It has integrated with midtrans as a third party payment method.
                            </div>
                        </div>

                        <div className="bg-blue-100 p-5 text-center">
                            <div className="mx-auto pb-5 flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                </svg>
                            </div>
                            <div className="mb-3 text-xl">
                                Clinic Queuing System
                            </div>

                            <div>
                                A queuing booking system for clinic. It has a notification message through short message. It built with Laravel 8.
                            </div>
                        </div>

                        <div className="bg-blue-100 p-5  text-center">
                            <div className="flex mx-auto justify-center pb-5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="mb-3 text-xl">
                                Company Profile
                            </div>

                            <div>
                                We have created some company profile web such as sinarmed.com, instalasigasmedis.com, and many more. It built with Laravel Framework.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Project;