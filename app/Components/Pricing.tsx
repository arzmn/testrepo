import { XMarkIcon } from '@heroicons/react/20/solid'

export default function Pricing() {
  return (
    <>
    {/* <section className="bg-white dark:bg-gray-900"> */}
    <section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 pt-5 text-3xl sm:text-5xl tracking-tight font-bold text-gray-900 dark:text-white">Choose your plan</h2>
          <p className="mb-5 font-light text-gray-500 sm:text-lg dark:text-gray-400">Pricing that best suits your need.</p>
      </div>
      <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
    
          <div className="flex flex-col p-3 mx-auto max-w-[26rem]  text-center text-gray-900 bg-white rounded-[2.5rem] border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">Starter</h3>
              <p className="font-light text-gray-500 sm:text-[1rem] dark:text-gray-400">Ideal for small stores, freelancers, anyone just getting started</p>
              <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">$29</span>
                  <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>
        
              <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>300 photo credits</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>4 models</span>
                 </li>
                  <li className="flex items-center space-x-3">
                      <XMarkIcon className='h-6 w-7 text-red-600' />
                      <span>Upload own model</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      <XMarkIcon className='h-6 w-7 text-red-600' />
                      <span>Batch generate photos</span>
                  </li>
              </ul>
              <a href="#" className="text-white bg-transparent ring-1 ring-inset ring-indigo-600 hover:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Get started</a>
          </div>
    
          <div className="flex flex-col p-3 mx-auto max-w-[26rem] text-center text-gray-900 bg-white rounded-[2.5rem] border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">Company</h3>
              <p className="font-light text-gray-500 sm:text-[1rem] dark:text-gray-400">Best for fast growing stores and ecom marketing</p>
              <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">$99</span>
                  <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>2000+ photo credits</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>14+ models</span>
                  </li>
                  <li className="flex items-center space-x-3">                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Upload own model</span>
                  </li>
                  <li className="flex items-center space-x-3">                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Batch generate photos </span>
                  </li>
                  <li className="flex items-center space-x-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>24x7 priority support</span>
                  </li>
              </ul>
              <a href="#" className="text-white bg-indigo-600 hover:bg-indigo-500 focus:ring-4 focus:ring-indigo-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Get started</a>
          </div>
      </div>
  </div>
</section>
    </>
  )
}

