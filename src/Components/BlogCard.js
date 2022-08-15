export function BlogCard({Title , Desc , Tags , Link }){
    const link = Link || '#'
    return(
        <>
        
            <div class="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                <a href={link} class="w-full block h-full">
                    {/* <img alt="blog photo" src="" class="max-h-40 w-full object-cover"/> */}
                    <div class="bg-white w-full p-4">
                        <p class="text-indigo-500 text-md font-medium">
                            BLOG
                        </p>
                        <p class="text-gray-900  text-xl font-medium mb-2">
                            {Title}
                        </p>
                        <p class="text-gray-800  font-medium text-md">
                            {Desc}
                        </p>
                        <div class="flex flex-wrap justify-starts items-center mt-4">
                            {
                                Tags.map((tag)=>  <div class="text-xs mr-2 py-1.5 px-4 text-gray-700 bg-blue-100 rounded-2xl">
                                #{tag}

                            </div>)
                            }
                          
                        </div>
                    </div>
                </a>
            </div>

        </>
    );
}