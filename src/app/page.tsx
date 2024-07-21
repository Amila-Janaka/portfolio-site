import Head from "next/head";
import Image from "next/image";
// icons
import { LuMoonStar } from "react-icons/lu";
import { FaGithub, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
//images
import profileImage from "../../public/assets/Amila.jpg"

export default function Home() {
  return (
    <div>
      <main className="bg-yellow-50 min-h-screen px-10">
        {/* NAV AND HERO */}
        <section>
          {/* nav  */}
          <nav className="py-10 flex justify-between">
            <h1>Amila Janaka</h1>
            <ul className="flex items-center">
              {/* icons */}
              <li>
                <LuMoonStar className="cursor-pointer text-xl mx-5" />
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1ch_myTBUNjnJMZiOBUfZYHGFaXEMPAOJ/view?usp=sharing" target="_blank" download={"Amila Janaka Resume"} className="bg-yellow-400 text-black px-4 py-2 border-none rounded-3xl">Resume</a>
              </li>
            </ul>
          </nav>

          {/* hero  */}
          <div className="text-center p-10">
            <h1 className="text-5xl font-bold text-yellow-400">Hi! I'm Amila Janaka</h1>
            <h3 className="text-2xl py-4">
              Web Developer / Mobile App Developer
            </h3>
            <p className="text-sm text-gray-400 leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sint veniam nesciunt est recusandae voluptate itaque, ullam doloribus dolores nihil provident dolore laborum accusamus nostrum deserunt nam quam alias quo.
            </p>
            {/* socials */}
            <div className="text-5xl flex justify-center gap-16 text-gray-600 py-6">
              <a href="https://github.com/Amila-Janaka" target="_blank"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/amila-janaka-395724225/" target="_blank"><FaLinkedin /></a>
              <a href="https://github.com/Amila-Janaka" target="_blank"><FaFacebookSquare /></a>
            </div>
            {/* profile */}
            <div className="flex justify-center mt-6">
              <Image src={profileImage} alt="Amila Janaka"
                className=" w-80 h-90 rounded-bl-full rounded-br-full rounded-tr-full rounded-tl-full"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
