import Head from 'next/head';
import Image from 'next/image';
import ReadOnButton from './ReadOnButton';
import Script from 'next/script'

export const siteTitle = 'Special publication on linking climate change adaptation (CCA), disaster risk reduction (DRR) and loss and damage (L&D)';
export const imageSrc = '/images/andre-mouton-ESiq6E4L3WY-unsplash.jpg'

export default function Layout({ children, home }) {

    return (
        <div className='flex justify-center font-inter'>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="A special page for COP27" />
                <meta property="og:image" content="https://via.placeholder.com/800x400?text=:)" />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <div>
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-1Z1PX8B97E"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){window.dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-1Z1PX8B97E');
                    `}
                </Script>
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
                            <h1 className='absolute invisible sm:visible text-center xl:w-7/12 w-3/4 text-2xl sm:text-lg md:text-3xl lg:text-4xl xl:text-5xl text-white group-hover:text-white font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-300'>
                                {siteTitle}
                            </h1>
                        </div>
                    )}
                </header>
                <main>{children}</main>
                <footer className='text-center mt-8 text-gray-500'>
                    <div className="bg-gray-50">
                        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
                            <h2 className="text-left tracking-tight text-gray-900 sm:text-4xl">
                                <span className="text-3xl font-bold block">For more information</span>
                                <span className="text-xl font-bold block text-blue-600">Visit the project page or subscribe to our newsletter.</span>
                                <span className="mt-2 text-base block text-gray-500">&copy; 2022 Asia-Pacific Network for Global Change Research</span>
                            </h2>
                            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                                <div className="inline-flex rounded-full shadow">
                                    <a href="https://www.apn-gcr.org/?p=16150" className="inline-flex items-center justify-center rounded-full border-transparent bg-blue-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700">Visit project page</a>
                                </div>
                                <div className="ml-3 inline-flex rounded-full shadow">
                                    <a href="https://apn-gcr.org/getmail" className="inline-flex items-center justify-center rounded-full border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50">Subscribe to APN Updates</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
