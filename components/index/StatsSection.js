import StatsCard from './StatsCard';
import { stats } from '../../data/stats'

const StatsCards = stats.map((item) => (
    <StatsCard props={item} key={item.key}></StatsCard>
));

export default function StatsSection() {
    return (
        <section className='py-20 grid place-items-center bg-gradient-to-br from-slate-200 to-indigo-200'>
            <h1 className='px-10 sm:px-20 text-center text-4xl font-bold'>APN activities addressing loss and damage</h1>
            <p className="my-6 px-10 w-3/4 xl:w-1/2 text-gray-500 text-center">
                Since the launch of the CAF, APN has supported 14 projects and conducted various activities related to
                climate adaptation, disaster risk reduction, and loss and damage.
            </p>
            <div className='mt-12 px-10 sm:px-20 flex flex-wrap gap-10 items-start content-center justify-center'>
                {StatsCards}
            </div>
        </section>
    )
}