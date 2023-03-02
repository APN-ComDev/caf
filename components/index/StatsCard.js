import CountUp from 'react-countup'

export default function StatsCard({ props }) {
    return (
        <div className="text-center w-full sm:w-80">
            {props.pre && <div className="text-gray-500">
                {props.pre}
            </div>
            }
            <div className="text-indigo-800 text-8xl font-bold">
                <CountUp end={props.number} duration={1} enableScrollSpy={true} scrollSpyOnce={true}/>
            </div>
            <div className="text-indigo-800 text-4xl">
                {props.unit}
            </div>
            {props.post && <div className="text-gray-500">
                {props.post}
            </div>
            }
        </div>
    )
}