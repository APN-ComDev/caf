import Image from 'next/image';

export const cafImageSrc = '/images/caf2.jpg'
export const igmImageSrc = '/images/IGMSPG-18-00-Group-Photo-1024x600.jpg'

export default function Workshops() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="px-20 gap-16 items-center py-8 mx-auto max-w-screen-xl lg:grid lg:grid-cols-4 lg:pt-8 lg:pb-16 lg:px-6">
                <div className=" font-light text-gray-500 lg:col-span-2 sm:text-lg dark:text-gray-400">
                    <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">Climate Adaptation Framework</h1>
                    <p className="mb-4">At its 18th Intergovernmental Meeting in 2013,
                        APN launched its Climate Adaptation Framework (CAF)
                        with the aims of enhancing science-based adaptation activities of
                        APN developing countries, comprising: regional research activities
                        with a capacity building element; capacity building activities at regional,
                        national and local scales; and joint activities with partner organisations and
                        networks.</p>
                </div>
                <div className="grid lg:col-span-2 grid-cols-4 gap-4 mt-8 max-h-fit">
                    <Image
                        priority
                        src={igmImageSrc}
                        alt=""
                        width="1024"
                        height="600"
                        className='w-full lg:w-full rounded-lg drop-shadow-md col-span-3 lg:my-8'
                    />
                    <Image
                        priority
                        src={cafImageSrc}
                        alt=""
                        width="195"
                        height="400"
                        className='w-full lg:w-full rounded-lg drop-shadow-md lg:rotate-12 lg:-ml-2 lg:my-8'
                    />
                </div>
            </div>
        </section>
    )
}