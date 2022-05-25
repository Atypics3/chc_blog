import Image from './Image'
import Link from '@/components/Link'

export default function HeroSection() {
  return (
    <div className="container flex px-6 py-4 mx-auto lg:h-128 lg:py-16">
      <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
        <div className="max-w-lg md:space-y-5">
          <h1 className="text-lg tracking-wide text-white text-gray-800 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            CHC's Blog
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400 ">
            Welcome to the blog for Chabot's Computer Hardware Club (or CHCB for short)!
            <br />
            <br />
            More information can be found in the About section.
          </p>

          <div className="mt-6">
            <Link
              href={`/about`}
              className="rounded-full bg-blue-400 px-4 text-xl font-medium text-dark hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:bg-blue-700 dark:text-blue-100 dark:hover:bg-blue-600 dark:hover:text-white dark:focus:ring-blue-500"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
        <Image
          src="/static/images/newLogo.png"
          alt="profile picture"
          className="rounded-full w-48 h-48"
          width={250}
          height={250}
          priority
        />
      </div>
    </div>
  )
}
