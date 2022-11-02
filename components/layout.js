import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const name = 'X Deng';
export const siteTitle = 'Next.js site';

export default function Layout({ children, home }) {
    return (
        <div className='m-6 p-6 flex justify-center'>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Tinking with Next.js" />
                <meta property="og:image" content="https://via.placeholder.com/800x400?text=:)" />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <div>
                <header>
                    {home ? (
                        <>
                            <Image
                                priority
                                src="/images/avatar.jpg"
                                height={144}
                                width={144}
                                alt=""
                                className='rounded-full'
                            />
                            <h1>{name}</h1>
                        </>
                    ) : (
                        <>
                            <Link href="/">
                                <Image
                                    priority
                                    src="/images/avatar.jpg"
                                    height={108}
                                    width={108}
                                    alt=""
                                    className='rounded-full'
                                />
                            </Link>
                            <h2>
                                <Link href="/">
                                    {name}
                                </Link>
                            </h2>
                        </>
                    )}
                </header>
                <main>{children}</main>
                {!home && (
                    <div>
                        <Link href="/">
                            ← Back to home
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
