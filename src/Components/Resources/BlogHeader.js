    export  function BlogHeader() {
        const goToTop = () => {
            window.scrollTo({
                top: 500,
                behavior: 'smooth',
            });
        };
        return (
            <div className="relative bg-gray-900 mb-10">
            <div className="absolute inset-x-0 bottom-0">
                <svg
                viewBox="0 0 224 12"
                fill="currentColor"
                className="w-full -mb-1 text-white"
                preserveAspectRatio="none"
                >
                <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
                </svg>
            </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
                <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                    Get ideas for projects
                    <br className="hidden md:block" />
                    or simply read a blog{' '}
                    <span className="relative inline-block">
                    right here{' '}
                    <div className="w-full h-3 -mt-3 bg-blue-400" />
                    </span>
                </h2>
                <p className="mb-6 text-base font-thin tracking-wide text-gray-300 md:text-lg">
                    Share your email {'&'} directly get information whenever alumni posts a new blog/resources.
                </p>
                <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
                    <input
                    placeholder="Email"
                    required
                    type="text"
                    className="flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 bg-transparent border-2 border-gray-400 rounded appearance-none md:mr-2 md:mb-0 focus:border-blue-200 focus:outline-none focus:shadow-outline"
                    />
                    <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
                    >
                    Subscribe
                    </button>
                </form>
                <button
                    onClick={goToTop}
                    aria-label="Scroll down"
                    className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-blue-accent-400 hover:border-blue-accent-400 hover:shadow hover:scale-110"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="currentColor"
                    >
                    <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
                    </svg>
                </button>
                </div>
            </div>
            </div>
        );
    }