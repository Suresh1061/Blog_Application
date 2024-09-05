import { Link } from 'react-router-dom'
import { Logo } from '../index'

function Footer() {
  return (
    <section className="relative bg-background overflow-hidden py-10 border-t-2 border-gray-600 text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12 order-4 lg:order-1">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="150px" />
              </div>
              <div>
                <p className="text-sm text-slate-400">
                  &copy; Copyright 2023. All Rights Reserved by Suresh Pal.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12 order-1 lg:order-2">
            <div className="h-full">
              <h3 className="mb-9 text-base font-semibold uppercase ">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-sm font-medium hover:opacity-75"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-sm font-medium hover:opacity-75"
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-sm font-medium hover:opacity-75"
                    to="/"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm font-medium hover:opacity-75"
                    to="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12 order-2 lg:order-3">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-base font-semibold uppercase ">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-sm font-medium hover:opacity-75"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-sm font-medium hover:opacity-75"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-sm font-medium hover:opacity-75"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm font-medium hover:opacity-75"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12 order-3 lg:order-4">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-base font-semibold uppercase ">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-sm font-medium hover:opacity-75"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-sm font-medium hover:opacity-75"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm font-medium hover:opacity-75"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer