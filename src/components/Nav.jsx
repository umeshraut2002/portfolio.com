import React from 'react'

const Nav = () => {
  return (
    <>
        <div className="w-full h-screen bg-black text-white flex flex-col">
      <nav className="w-full flex justify-between items-center px-10 py-5 bg-orange-500">
        <div className="text-2xl font-bold">MyPortfolio</div>
        <ul className="flex space-x-8">
          <li className="hover:text-white uppercase font-bold">About</li>
          <li className="hover:text-white uppercase font-bold">Project</li>
          <li className="hover:text-white uppercase font-bold">Blog</li>
          <li className="hover:text-white uppercase font-bold">Contact</li>
        </ul>
      </nav>

      <div className="flex-grow flex items-center justify-center">
        <div className="w-1/2 h-full hidden lg:flex items-center justify-center">
          <img 
            src="https://media.istockphoto.com/id/1299077558/photo/lead-yourself-to-a-life-of-success.jpg?s=612x612&w=0&k=20&c=OQZPSnM1Eq-4Xx8bxJE8KQ5olJFfRw_YMc29aQ0Au6U=" 
            alt="Placeholder" 
            className="rounded-2xl shadow-lg"
          />
        </div>

        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center px-10">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg lg:text-xl mb-6 italic">
            I’m a passionate full-stack developer specializing in creating beautiful, functional, and accessible web experiences. Explore my work and get in touch!
          </p>
          <button className="px-6 py-3 bg-white hover:bg-orange-400 text-black font-bold rounded-lg shadow-lg transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
    </>
  );
}


export default Nav
