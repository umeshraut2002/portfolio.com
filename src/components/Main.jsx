import React from 'react';
import Nav from './Nav';

const Main = () => {
    return(
        <div className='w-full min-h-80 bg-white text-orange-500 flex flex-col'>
            <div className='w-full h-full flex flex-col items-start mx-10 my-10 p-10'>
                <h1 className='text-orange-700 font-bold'>About</h1>
                <p className='border-solid border-black font-bold italic m-5 p-5 hover:text-black cursor'>Hi, my name is Umesh Raut, and I am a front-end engineer with a strong foundation in HTML, CSS, and Tailwind CSS. I specialize in JavaScript and have in-depth expertise in advanced technologies such as session storage, local storage, web workers, IndexedDB, crypto API, and various browser APIs. Additionally, I have strong knowledge of modern front-end development practices and tools, enabling me to build dynamic, efficient, and secure web applications.</p>
            </div>
            </div>
    )
}

export default Main;