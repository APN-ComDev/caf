import { authors } from '../../data/authors'

const AuthorChapters = authors
    .filter((author) => author.chapters.length > 0)
    .map((author) => {
        return author.chapters.map((chapter) => (
            <div class="border max-w-md rounded overflow-hidden shadow hover:shadow-md hover:bg-slate-100" key={chapter.title}>
                <div class="px-6 py-4">
                    <div class="font-semibold text-xl mb-2 text-gray-700">{chapter.title}</div>
                    <p class="text-gray-500 text-base">{author.name}
                        {chapter.coauthors && chapter.coauthors.includes(',') &&
                            <>, {chapter.coauthors}</>
                        }
                        {chapter.coauthors && !chapter.coauthors.includes(',') &&
                            <> & {chapter.coauthors}</>
                        }
                    </p>
                </div>
            </div>
        ));
    });

export default function ChaptersSection() {
    return (
        <section className='mt-16 relative mx-auto mb-20'>
            <h1 className='px-10 sm:px-20 mb-12 text-center text-4xl font-bold'>Chapters</h1>
            <div className='flex flex-wrap gap-8 justify-center xl:mx-12'>
                {AuthorChapters}
            </div>
        </section>
    )
}