import React from "react";
import { JobImg } from "../assets";


const About = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 '>
      <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
        <div className='w-full md:2/3 2xl:w-2/4'>
          <h1 className='text-3xl text-blue-600 font-bold mb-5'>About Us</h1>
          <p className='text-justify leading-7'>
          🚀 Passionate Full Stack Developer | Turning Ideas into Reality.
          Check me out <a
                href='https://www.linkedin.com/in/manugyadastidar/'
                className='text-[#1199e7] ml-1'
                target='_blank'
                rel='noopener noreferrer'
              >
                @LinkedIn
              </a> 
              <a
                href='https://github.com/Manugya29'
                className='text-[#1199e7] ml-1'
                target='_blank'
                rel='noopener noreferrer'
              >
                @GitHub
              </a> 
          </p>
        </div>
        
        <img src={JobImg} alt='About' className='w-auto h-[300px]' />
      </div>

      <div className='leading-8 px-5 text-justify'>
        <p>
        I thrive in the dynamic world of full stack development. My journey began with a curiosity to understand how things work,
        leading me to explore every layer of web development from front-end design to back-end architecture.
        I specialize in crafting seamless user experiences that not only meet but exceed expectations.
        Leveraging my expertise in HTML, CSS, JavaScript.
        My proficiency in frameworks like React enables me to build robust front-end solutions that are as powerful as they are elegant.
        But my passion doesn't stop at the front end. I am equally adept at building scalable back-end systems using technologies like Node.js, Express.js and MongoDb.
        From database design to server optimization, I architect solutions that lay a solid foundation for success.
        I bring designs to life with precision and creativity, ensuring every pixel serves a purpose.

        I firmly believe that great achievements are never accomplished alone. 
        I thrive in collaborative environments where ideas are shared, feedback is valued, and teamwork is celebrated.
        &sp; Together, we can turn visions into realities and push the boundaries of what's possible.

        Let's
        <a
                href='https://www.linkedin.com/in/manugyadastidar/'
                className='text-[#1199e7] ml-1'
                target='_blank'
                rel='noopener noreferrer'
              >
                Connect&ensp;
              </a> 
          and explore how we can collaborate to bring your next project to life!

        </p>
      </div>
    </div>
  );
};

export default About;
