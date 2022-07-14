export default function BlogHeader() {
    return (
        <>
        <div className="container mx-auto px-4 py-14 sm:px-6 xl:px-12">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <h1 className="text-4xl font-bold tracking-normal sm:text-5xl lg:text-6xl">Blog</h1>
            <p className="max-w-screen-sm text-lg text-gray-600 sm:text-2xl">We write about tips, best tools, and resources to create and sell interactive online programming courses.</p>
            <form className="flex w-full max-w-md flex-col items-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3"><input type="email" required="" className="w-full rounded-md border bg-gray-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50" placeholder="you@website.com" value="" /><button type="submit" className="w-full rounded-md border border-blue-500 bg-blue-500 py-2 px-6 text-white transition hover:border-blue-600 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-blue-500 disabled:hover:bg-blue-500 sm:max-w-max">Subscribe</button></form>
        </div>
        </div>

        
        </>
    );
}