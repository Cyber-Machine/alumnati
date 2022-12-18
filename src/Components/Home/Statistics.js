export const Statistic = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 row-gap-8 lg:grid-cols-3">
          <div>
            <div className="flex">
              <h6 className="mr-2 text-4xl font-bold md:text-5xl text-blue-900">
                2.4K+
              </h6>
              <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
                <svg
                  className="text-teal-900 w-7 h-7"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <p className="mb-2 font-bold md:text-lg">Alumni</p>
            <p className="text-gray-700">
              Number of Alumni that are working professionals in leading industries.
            </p>
          </div>
          <div>
            <div className="flex">
              <h6 className="mr-2 text-4xl font-bold md:text-5xl text-blue-900">
                200+
              </h6>
              <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
                <svg
                  className="text-teal-900 w-7 h-7"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <p className="mb-2 font-bold md:text-lg">Students</p>
            <p className="text-gray-700">
              Have already connected with alumni's.
            </p>
          </div>
          <div>
            <div className="flex">
              <h6 className="mr-2 text-4xl font-bold md:text-5xl text-blue-900">
                125
              </h6>
              <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
                <svg
                  className="text-teal-900 w-7 h-7"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <p className="mb-2 font-bold md:text-lg">Talks</p>
            <p className="text-gray-700">
              Guidance given by Alumni to students.
            </p>
          </div>
        </div>
      </div>
    );
  };