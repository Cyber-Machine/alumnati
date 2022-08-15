export const NewsLetter = () => {
    return (
        <section class="flex flex-col max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-blue-800 md:flex-row md:h-48">
        <div class="md:flex md:items-center md:justify-center md:w-1/2 md:bg-blue-700 md:dark:bg-blue-800">
            <div class="px-6 py-6 md:px-8 md:py-0">
                <h2 class="text-lg font-bold text-white dark:text-white md:text-white">Sign Up For <span class="text-blue-600 dark:text-blue-400 md:text-blue-300">Project</span> Updates</h2>
                
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur obcaecati odio</p>
            </div>
        </div>

        <div class="flex items-center justify-center pb-6 md:py-0 md:w-1/2 ">
            <form>
                <div class="flex flex-col p-1 overflow-hidden border rounded-lg dark:border-white-600 lg:flex-row dark:focus-within:border-white-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-gray-400 focus-within:ring-gray-300">
                    <input class="px-6 py-2 text-blue-700 placeholder-blue-500 bg-white outline-none dark:bg-blue-800 dark:placeholder-blue-400 focus:placeholder-transparent dark:focus:placeholder-transparent" type="text" name="email" placeholder="Enter your email" aria-label="Enter your email"/>
                    
                    <button class="px-4 py-3 text-sm font-medium tracking-wider text-blue-100 uppercase transition-colors duration-200 transform bg-blue-700 rounded-lg hover:bg-blue-600 focus:bg-blue-600 focus:outline-none">subscribe</button>
                </div>
            </form>
        </div>
    </section>
    )
}