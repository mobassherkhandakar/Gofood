import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide text-center uppercase">About</h2>
          <p className="mt-2 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Hi, I'm a React Developer!
          </p>
          <div className='flex gap-4 items-center justify-center'>
            <img className='w-52 rounded-full' src="https://media.licdn.com/dms/image/D4E03AQHAaSVclWla6w/profile-displayphoto-shrink_800_800/0/1668186324180?e=2147483647&v=beta&t=OhKsEu-JpTjlLCTImB3Zhpbm8OdvHWOyZhjpDTZxaxA" alt="" />
          <p className=" w-2/4 text-xl text-gray-500">
            I love building web applications using React and other modern web technologies. I have experience working with a variety of front-end frameworks and libraries, and I'm always looking to learn and improve my skills.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
