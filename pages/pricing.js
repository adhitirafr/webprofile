import Head from '../component/Head'

const Pricing = () => {
    return (
        <>
            <Head
                title="About"
                description="We will help you to build your dream website"
            ></Head>

            <div className="container mx-auto px-4 mb-20 mt-3">
                <div className="text-2xl mb-3 font-bold">Pricing</div>
                <div className="mb-5">
                    Here is some package that you can choose. The project can be a simple company profile website.
                </div>

                <div className="mb-5">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
                        <div className="border border-light-blue-500 p-5">
                            <div className="text-3xl mb-5">Silver</div>

                            <div className="text-sm text-gray-400">
                                What will you get
                            </div>

                            <div>3 weeks working</div>
                            <div>Documentation of how to use the system</div>
                            <div>Up to 1 revision</div>
                            <div>Up to 1 professional email </div>

                            <div className="mt-5">
                                <div className="text-md text-gray-400">
                                    Price 
                                </div>
                                <div className="text-2xl">
                                    Rp. 5.000.000
                                </div>
                            </div>
                        </div>
                        <div className="border border-light-blue-500 p-5">
                            <div>
                                <div className="text-3xl mb-5">Gold</div>

                                <div className="text-sm text-gray-400">
                                    What will you get
                                </div>

                                <div>3 weeks working</div>
                                <div>Documentation of how to use the system</div>
                                <div>Up to 3 revisions</div>
                                <div>Up to 2 professional email </div>

                                <div className="mt-5">
                                    <div className="text-md text-gray-400">
                                        Price 
                                    </div>
                                    <div className="text-2xl">
                                        Rp. 6.500.000
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border border-light-blue-500 p-5">
                            <div>
                                <div className="text-3xl mb-5">Platinum</div>

                                <div className="text-sm text-gray-400">
                                    What will you get
                                </div>

                                <div>3 weeks working</div>
                                <div>Documentation of how to use the system</div>
                                <div>Up to 4 revisions</div>
                                <div>Up to 3 professional email </div>

                                <div className="mt-5">
                                    <div className="text-md text-gray-400">
                                        Price 
                                    </div>
                                    <div className="text-2xl">
                                        Rp. 8.000.000
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border border-light-blue-500 p-5">
                            <div>
                                <div className="text-3xl mb-5">Emerald</div>

                                <div className="text-sm text-gray-400">
                                    What will you get
                                </div>

                                <div>3 weeks working</div>
                                <div>Documentation of how to use the system</div>
                                <div>Up to 5 revisions</div>
                                <div>Unlimited professional email </div>

                                <div className="mt-5">
                                    <div className="text-md text-gray-400">
                                        Price 
                                    </div>
                                    <div className="text-2xl">
                                        Rp. 10.000.000
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5">
                        If you have a project that more complex theme such as E-commerce, Queue System, and many more, please contact us first for more detail.
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Pricing;