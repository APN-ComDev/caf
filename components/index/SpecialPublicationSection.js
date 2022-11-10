import Image from 'next/image';

export const webinarSrc = '/images/webinar.jpg';
export const writeshopSrc = '/images/writeshop.jpg';

export default function SpecialPublicationSection() {
    return (
        <section className='pt-20 grid place-items-center'>
            <h1 className='px-10 sm:px-20 text-center text-4xl font-bold'>Special publication</h1>
            <div className='mt-12 md:px-10 w-10/12 md:w-3/4 2xl:w-1/2 text-center'>
                <p className='leading-relaxed text-left text-gray-500 mb-8'>
                    With the recommendation that APN continues to produce synthesis materials of the work
                    it conducts under the core programmes and frameworks, a special publication project is
                    targeted explicitly to outputs from the CAF. The joint activity between APN Secretariat
                    and <a href="https://www.slycantrust.org/" className="no-underline text-blue-600 hover:text-blue-800 visited:text-purple-600 hover:underline transition ease-in-out duration-300">SLYCAN Trust</a> will develop a special publication for the approximately 14 completed
                    APN projects related to climate change adaptation, disaster risk reduction and
                    loss and damage.
                </p>
                <p className='leading-relaxed text-gray-500 text-left'>
                    The outputs will be especially beneficial for the global agendas of UNFCCC
                    Paris Agreement (PA), the Warsaw International Mechanism (WIM)
                    and the Sendai Framework on Disaster Risk Reduction (SFDRR).
                </p>
            </div>
            <div className="container mx-auto mt-12 px-20 xl:px32 2xl:px-64 py-12">
                <div className="md:grid md:grid-cols-2 md:border md:rounded-lg gap-x-0 dm:gap-x-2">
                    <div className="">
                        <Image
                            priority
                            src={webinarSrc}
                            alt=""
                            width="1920"
                            height="630"
                            className='w-full rounded-lg drop-shadow-md col-span-3 md:-ml-8 -mt-8'
                        />
                    </div>
                    <div className="my-6 pr-4">
                        <h2 className='hidden xl:inline-block lg:mt-6 text-xl font-bold mb-6'>
                            Online virtual contributors’ symposium
                        </h2>
                        <p className='leading-relaxed text-gray-500'>
                            As part of this special publication, APN and SLYCAN Trust held
                            an <a href="https://www.apn-gcr.org/?p=22362" className="no-underline text-blue-600 hover:text-blue-800 visited:text-purple-600 hover:underline transition ease-in-out duration-300">online virtual contributors’ symposium</a> on
                            30 August 2022.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 content-end md:text-right mt-4 lg:mt-0 lg:mb-12 mb-6 pr-4 md:pl-2 md:-mr-2 lg:-mr-4">
                        <h2 className='hidden xl:inline-block text-xl font-bold mb-6'>
                            International writeshop
                        </h2>
                        <p className='leading-relaxed text-gray-500'>
                            An <a href="https://www.apn-gcr.org/?p=23085" className="no-underline text-blue-600 hover:text-blue-800 visited:text-purple-600 hover:underline transition ease-in-out duration-300">international writeshop</a> for the
                            special publication was held from 20-22 October 2022 in Colombo, Sri Lanka.
                            <span className='hidden lg:inline'>
                                The writeshop, mainly an in-person event, gathered 16 participants from eight countries,
                                including ten APN project leaders.</span>
                        </p>
                    </div>
                    <div className="">
                        <Image
                            priority
                            src={writeshopSrc}
                            alt=""
                            width="1920"
                            height="630"
                            className='w-full rounded-lg drop-shadow-md col-span-3 md:ml-4 lg:ml-8 -mb-8'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}