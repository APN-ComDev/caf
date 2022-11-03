import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';

export default function AuthorCard({ props }) {
    return (
        <li className="text-sm leading-6 group hover:drop-shadow-md duration-500">
            <figure className="relative flex flex-col bg-slate-50 group-hover:bg-slate-200 duration-500 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
                {props.quote ?
                    <blockquote>
                        <p className="mb-6 text-slate-700 dark:text-slate-300 text-lg">
                            “{props.quote}”
                        </p>
                    </blockquote>
                    :
                    <p className="mb-6 text-slate-700 dark:text-slate-300 text-lg">
                        {props.chapter}
                    </p>
                }
                <figcaption className="flex items-center space-x-4 pt-2">
                    <Image
                        priority
                        src={props.image}
                        alt=""
                        width="400"
                        height="400"
                        className='flex-none w-16 h-16 rounded-full object-cover'
                    />
                    <div className="flex-auto">
                        <div className="text-base text-slate-900 font-semibold dark:text-slate-300">
                            <div className='flex'>
                                <a className="no-underline text-blue-600 visited:text-blue-800 group-hover:text-purple-600 transition ease-in-out duration-300">
                                    <span className="inset-0">
                                        {props.name}
                                    </span>
                                </a>
                                <div className='flex flex-auto mt-1 ml-1'>
                                    {props.twitter &&
                                        <SocialIcon className="grayscale brightness-150 hover:brightness-100 hover:grayscale-0 mr-1" style={{ height: 18, width: 18 }} url={props.twitter} />
                                    }
                                    {props.linkedIn &&
                                        <SocialIcon className="grayscale brightness-200 hover:brightness-100 hover:grayscale-0 mr-1" style={{ height: 18, width: 18 }} url={props.linkedIn} />
                                    }
                                    {props.faceBook &&
                                        <SocialIcon className="grayscale brightness-[2.25] hover:brightness-100 hover:grayscale-0 mr-1" style={{ height: 18, width: 18 }} url={props.faceBook} />
                                    }
                                </div>
                            </div>
                            <div className="flex mt-0.5 text-sm font-normal text-slate-500">
                                <p className='mt-0.5'>{props.org}</p>
                                <div className='flex flex-auto mt-1 ml-1'>
                                    {props.orgTwitter &&
                                        <SocialIcon className="grayscale brightness-150 hover:brightness-100 hover:grayscale-0 mr-1" style={{ height: 18, width: 18 }} url={props.orgTwitter} />
                                    }
                                    {props.orgLinkedIn &&
                                        <SocialIcon className="grayscale brightness-200 hover:brightness-100 hover:grayscale-0 mr-1" style={{ height: 18, width: 18 }} url={props.orgLinkedIn} />
                                    }
                                    {props.orgFaceBook &&
                                        <SocialIcon className="grayscale brightness-[2.25] hover:brightness-100 hover:grayscale-0 mr-1" style={{ height: 18, width: 18 }} url={props.orgFaceBook} />
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                </figcaption>
            </figure>
        </li >
    )
}