import AuthorCard from './AuthorCard';
import { authors } from '../../data/authors'

const authors1 = authors.filter(author => author.col == 1);
const authors2 = authors.filter(author => author.col == 2);
const authors3 = authors.filter(author => author.col == 3);

const AuthorCards1 = authors1.map((author) => (
    <AuthorCard props={author} key={author.key}></AuthorCard>
));

const AuthorCards2 = authors2.map((author) => (
    <AuthorCard props={author} key={author.key}></AuthorCard>
));

const AuthorCards3 = authors3.map((author) => (
    <AuthorCard props={author} key={author.key}></AuthorCard>
));

export default function StatsSection() {
    return (
        <section className='mt-16 relative max-w-7xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5'>
            <h1 className='px-10 sm:px-20 mb-12 text-center text-4xl font-bold'>Contributors</h1>
            <div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <ul className='space-y-8'>
                    {AuthorCards1}
                </ul>
                <ul className='space-y-8'>
                    {AuthorCards2}
                </ul>
                <ul className='space-y-8'>
                    {AuthorCards3}
                </ul>
            </div>
        </section>
    )
}