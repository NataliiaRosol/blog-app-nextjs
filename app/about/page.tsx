import Image from 'next/image';
import image from '../../public/userImg.avif'

function About() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-16 bg-gray-100 ">
        <div className="w-full max-w-4xl p-8 bg-white shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0">
              <div className="relative w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src={image}
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
              <p className="text-gray-600 text-lg mb-4">
              Hello! My name is Nataliia, and I’m a passionate Frontend Developer dedicated to crafting engaging and user-friendly web experiences. With a strong foundation in modern web development technologies, I thrive on turning ideas into functional, visually appealing websites and applications.
              </p>
              <p className="text-gray-600 text-lg">
                Whether you're just starting out or looking to sharpen your skills, you'll find a variety of resources and insights here. Let's explore the world of programming together!
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About