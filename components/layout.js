import Head from 'next/head';
import Image from 'next/image';
import ReadOnButton from './ReadOnButton';

export const siteTitle = 'Special publication on linking climate change adaptation (CCA), disaster risk reduction (DRR) and loss and damage (L&D)';
export const imageSrc = '/images/andre-mouton-ESiq6E4L3WY-unsplash.jpg'

export default function Layout({ children, home }) {

    return (
        <div className='flex justify-center font-inter'>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Tinking with Next.js" />
                <meta property="og:image" content="https://via.placeholder.com/800x400?text=:)" />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <div>
                <header className=''>
                    {home && (
                        <div className='relative w-screen group'>
                            <div className='brightness-50 group-hover:brightness-100 duration-300'>
                                <Image
                                    priority
                                    src={imageSrc}
                                    alt=""
                                    width="1920"
                                    height="630"
                                    className=''
                                />
                            </div>
                            <ReadOnButton />
                            <h1 className='absolute invisible sm:visible text-center w-1/2 text-2xl sm:text-lg md:text-3xl lg:text-4xl xl:text-5xl text-white group-hover:text-white font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-300'>
                                {siteTitle}
                            </h1>
                        </div>
                    )}
                </header>
                <main>{children}</main>
                <footer className='text-center my-8 text-gray-400'>&copy; 2022 APN Secretariat</footer>
            </div>
        </div>
    );
}
