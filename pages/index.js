import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Image from 'next/image'
// import NewsletterForm from '@/components/NewsletterForm'
import HeroSection from '@/components/Hero'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <HeroSection></HeroSection>

          <h1 className="text-lg tracking-wide text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest Posts
          </h1>
        </div>

        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags, images } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline gap-2 xl:gap-4">
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <dl>
                              <dt className="sr-only">Published on</dt>
                              <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                <time dateTime={date}>{formatDate(date)}</time>
                              </dd>
                            </dl>
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100 hover:text-blue-400 dark:hover:text-blue-400"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>

                          <div
                            style={{
                              position: 'relative',
                              paddingTop: '5%',
                              display: 'block',
                            }}
                          >
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {images ? (
                                <Image
                                  className="rounded object-cover w-full xl:w-auto hover:scale-110 transition duration-300 ease-in-out transform-gpu"
                                  src={`/_next/image?url=${images}&w=3840&q=50`}
                                  slug="slug"
                                  title={`${title}`}
                                  alt={`${title}`}
                                  layout="responsive"
                                  placeholder="blur"
                                  blurDataURL={`/_next/image?url=${images}&w=16&q=1`}
                                  width={1920}
                                  height={1080}
                                  sizes="320 640 750"
                                  loading="lazy"
                                />
                              ) : null}
                            </Link>
                          </div>
                        </div>
                        <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {/* {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
