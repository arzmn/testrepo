import { CloudArrowUpIcon, CursorArrowRaysIcon, CameraIcon } from '@heroicons/react/20/solid'




const features = [
  {
    name: 'Upload your apparel',
    description:
      'Same as above. Like it is literally sooo easy to use, phew....',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Select fashion model',
    description: 'Same as above. Like it is literally sooo easy to use, phew....',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Get model photo, wearing your product',
    description: 'Same as above. Like it is literally sooo easy to use, phew....',
    icon: CameraIcon,
  },
]

export default function Features() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Create faster</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How it works?</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                3 simple steps!
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline"><br/>{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-center">
          <img
            src="https://humanaigc.github.io/outfit-anyone/content/images/refiner2/r5.jpg"
            alt="Product screenshot"
            className="w-[24rem] max-w-none md:w-[100%] rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
          </div>
        </div>
      </div>
    </div>
  )
}
