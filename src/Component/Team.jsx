import React from 'react'

function Team() {
    const name = "Our Clients Say"
    
    return (
        <div className='bg-white w-full h-auto flex justify-center'>
            <div className='flex container py-20 justify-center'>
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col gap-5'>
                        <div className='text-black text-4xl text-center '>
                            <h1>{name}</h1>
                        </div>
                        <div className='text-black text-sm text-center'>
                            <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan <br /> ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
                        </div>
                    </div>
                    <div>
                        <div class="grid gap-8 mx-24 mb-6 lg:mb-16 md:grid-cols-2">
                            <div class="items-center sm:flex dark:bg-gray-800 ">
                                <a href="#">
                                    <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar" />
                                </a>
                                <div class="p-5">
                                    <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        <a href="#">Panawat Srimuang</a>
                                    </h3>
                                    <span class="text-gray-500 dark:text-gray-400"> Web Developer</span>
                                    <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Skill Frontend developer and Backend developer</p>
                                </div>
                            </div>
                            <div class="items-center sm:flex dark:bg-gray-800 ">
                                <a href="#">
                                    <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar" />
                                </a>
                                <div class="p-5">
                                    <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        <a href="#">Panawat Srimuang</a>
                                    </h3>
                                    <span class="text-gray-500 dark:text-gray-400"> Web Developer</span>
                                    <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Skill Frontend developer and Backend developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
