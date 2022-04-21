import siteMetadata from '@/data/siteMetadata'
import resourcesData from '@/data/resourcesData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'

export default function Resources() {
  return (
    <>
      <PageSEO
        title={`Resources - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-lg tracking-wide text-white text-gray-800 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Resources
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            All resources relating to computer hardware (and other things) will be listed here.
          </p>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap -m-4">
            {resourcesData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
