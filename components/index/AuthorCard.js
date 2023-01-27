import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';

export default function AuthorCard({ props, toggleVideo, setVideoId }) {

    function openVideo(){
        toggleVideo(true);
        setVideoId(props.youTubeVideoId);
    }

    return (
        <li className="text-sm leading-6 hover:drop-shadow-md duration-500">
            <figure className="relative flex flex-col bg-slate-50 group-hover:bg-slate-200 duration-500 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
                {props.quote ?
                    <blockquote>
                        <p className="mb-6 text-slate-700 dark:text-slate-300 text-lg">
                            “{props.quote}”
                        </p>
                        {props.youTubeVideoId &&
                            <button className="flex inline-flex mb-4 items-center justify-center rounded-full border-transparent bg-slate-200 px-5 py-3 text-base font-medium text-blue hover:text-white hover:bg-blue-700 transition" onClick={()=> openVideo()}>
                                <svg className="w-6 h-6 mr-2" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#FF0000">
                                    <rect width="50%" height="50%" x="5" y="5"  fill="#FFFFFF"/>
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg> Watch video message
                            </button>
                        }
                    </blockquote>
                    :
                    <p className="mb-6 text-slate-700 dark:text-slate-300 text-lg">
                        {props.chapter}
                    </p>
                }
                <figcaption className="flex group items-center space-x-4 pt-2">
                    <div className="flex flex-none group transition ease-in-out duration-300">
                        <Image
                            priority
                            src={props.image}
                            alt=""
                            width="400"
                            height="400"
                            className='flex-none w-16 h-16 rounded-full object-cover'
                        />
                    </div>
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
                                <div className='flex flex-auto mt-0.5'>
                                    {props.org}
                                    <div className='flex flex-auto mt-0.5 ml-1'>
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
                    </div>
                </figcaption>
            </figure>
        </li >
    )
}
