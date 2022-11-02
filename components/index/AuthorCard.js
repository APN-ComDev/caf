import Image from 'next/image';

export default function AuthorCard({ props }) {
    return (
        <li className="text-sm leading-6 group hover:drop-shadow-md duration-500">
            <figure className="relative flex flex-col bg-slate-50 group-hover:bg-slate-200 duration-500 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
                <blockquote>
                    <p className="mb-6 text-slate-700 dark:text-slate-300 text-lg">
                        “{props.quote}”
                    </p>
                </blockquote>
                <figcaption className="flex items-center space-x-4 pt-6">
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
                            <a href="#">
                                <span className="inset-0">
                                    {props.name}
                                </span>
                            </a>
                            <div className="mt-0.5 text-sm font-normal text-slate-500">
                                {props.org}
                            </div>
                        </div>
                    </div>
                </figcaption>
            </figure>
        </li>
    )
}