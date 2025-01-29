import { RiStore2Line } from "react-icons/ri";
import rectange from "../assets/Rectangle 4386 1.png";
import Testimonials from "./comp/Testimonial";
import ared2 from "../assets/logo/Ared 2.png";
import dash from "../assets/payrolldashboard 1.png";
import screenshot from "../assets/skill section banner 2.png";
import { FaArrowRightLong } from "react-icons/fa6";
import group from "../assets/joyful-group-classmates 1.png";
import {
  FaBriefcase,
  FaAward,
  FaUserGraduate,
  FaChalkboardTeacher,
} from "react-icons/fa";
import GetStarted from "./comp/HowToGetStarted";

export default function Home() {
  return (
    <>
      <div className="items-center justify-center min-h-screen max-w-6xl mx-auto">
        <section className="flex gap-8 items-center ">
          <div className="bg-white rounded-lg shadow-md p-6 w-1/2">
            <div className="max-w-sm mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-blue-500">
                Build Work Experience through Skills Challenges
              </h2>
              <p className="mb-4 text-sm">
                Enhance employability and accelerate career growth by working on
                hands-on projects & hackathons from businesses & organizations.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
                Get Started
              </button>
            </div>
          </div>

          {/* second */}
          <div className="w-[746px] h-[501px] relative bg-gray-100">
            <div className="left-[134px] top-[58px] absolute flex justify-start items-end gap-5">
              <div className="w-[275px] h-[443px] relative bg-[#2b71f0] rounded-[32px] overflow-hidden">
                <div className="w-[294px] h-[294px] left-[206.71px] top-[68.55px] absolute origin-top-left rotate-[140.71deg] bg-white rounded-full" />
                <img
                  className="w-[600px] h-[400px] left-[-181px] top-[55px] absolute"
                  src={group}
                  alt="Group of people"
                />
              </div>
              <div className="w-[275px] h-[443px] relative bg-[#2b71f0] rounded-[32px] overflow-hidden">
                <div className="w-[294px] h-[294px] left-[49px] top-[-3.29px] absolute origin-top-left rotate-[55.69deg] bg-white rounded-full" />
                <div className="w-[342.46px] h-[406.14px] left-[-34.23px] top-[37px] absolute">
                  <img
                    className="w-[342.46px] h-[406.14px] left-0 top-0 absolute"
                    src="https://via.placeholder.com/342x406"
                    alt="Person with laptop"
                  />
                  <img
                    className="w-[66.12px] h-[21.94px] left-[138.07px] top-[295.74px] absolute origin-top-left rotate-[-1.39deg]"
                    src="https://via.placeholder.com/66x22"
                    alt="Logo 1"
                  />
                  <img
                    className="w-[20.11px] h-[6.64px] left-[216.87px] top-[233.18px] absolute origin-top-left rotate-[-1.39deg]"
                    src="https://via.placeholder.com/20x7"
                    alt="Logo 2"
                  />
                </div>
                <div className="w-[275px] h-[86px] left-0 top-[355px] absolute bg-gradient-to-b from-[#2b70ef] to-[#2b71f0] rounded-[32px]" />
              </div>
            </div>
            <div className="w-[201px] h-[53.95px] left-[56px] top-[431px] absolute bg-white rounded-[52.89px] overflow-hidden">
              <div className="w-[179.84px] left-[10.58px] top-[10.58px] absolute flex justify-start items-center gap-[14.35px]">
                <div className="flex justify-start items-center">
                  <img
                    className="w-[31.68px] h-[31.68px] rounded-full border border-white"
                    src="https://via.placeholder.com/32x32"
                    alt="Avatar 1"
                  />
                  <img
                    className="w-[31.68px] h-[31.68px] rounded-full border border-white"
                    src="https://via.placeholder.com/32x32"
                    alt="Avatar 2"
                  />
                  <img
                    className="w-[31.68px] h-[31.68px] rounded-full border border-white"
                    src="https://via.placeholder.com/32x32"
                    alt="Avatar 3"
                  />
                  <img
                    className="w-[31.68px] h-[31.68px] rounded-full border border-white"
                    src="https://via.placeholder.com/32x32"
                    alt="Avatar 4"
                  />
                </div>
                <div className="text-[#2b3338] text-[10.76px] font-bold font-['DM Sans'] leading-none">
                  20K+ Talents
                </div>
              </div>
            </div>
            <img
              className="w-[120px] h-[120px] left-[243px] top-0 absolute"
              src="https://via.placeholder.com/120x120"
              alt="Logo"
            />
          </div>
        </section>
        
        <section>
          <div className="items-center justify-center  max-w-5xl mx-auto mt-1">
            <div className="container mx-auto px-4 py-12 ">
              <h1 className="text-4xl font-bold text-center max-w-2xl mb-8 mx-auto">
                Experience a New Way of Building Work Experience
              </h1>
              <p className="text-center mb-12 max-w-2xl mx-auto">
                Join Skills Challenges Program to accelerate your career growth
                and become part of Africa's largest workforce of digital
                professionals.
              </p>

              <div className="items-center justify-center min-h-screen max-w-5xl mx-auto mt-12">
                <div className="container mx-auto px-4 py-12">
                  <div className="bg-blue-600 p-16 rounded-lg shadow-md mb-8 text-white ">
                    <div className="flex-col items-center mb-4">
                      <div className="bg-white text-blue-500 p-3 rounded-lg mb-4 w-12 h-12">
                        <RiStore2Line className="text-2xl " />
                      </div>
                      <h2 className="text-2xl font-bold ">
                        Build a Strong Portfolio and Hand-On Experience
                      </h2>
                    </div>
                    <p>
                      Tackle real-world projects through challenges and
                      hackathons that mirror real world challenges faced by
                      businesses and organizations. Therefore, showcase your
                      skills and accomplishments to potential employers and
                      clients through a portofolio of completed projects.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-blue-600 text-white p-8 rounded-lg shadow-md">
                      <div className="flex-col items-center mb-4">
                        <div className="bg-white text-blue-500 p-3 rounded-lg mb-4 w-12 h-12">
                          <RiStore2Line className="text-2xl " />
                        </div>
                        <h2 className="text-2xl  font-bold">
                          Enhance Your Employment Path
                        </h2>
                      </div>
                      <p>
                        elop the in-demand skills and build a strong portofolio
                        to increase your chances of landing your dream job or
                        contract.
                      </p>
                    </div>

                    <div className="bg-blue-600 text-white p-8 rounded-lg shadow-md">
                      <div className="flex-col items-center mb-4">
                        <div className="bg-white text-blue-500 p-3 rounded-lg mb-4 w-12 h-12">
                          <RiStore2Line className="text-2xl " />
                        </div>
                        <h2 className="text-2xl font-bold">
                          Earn Recognition and Prizes
                        </h2>
                      </div>
                      <p>
                        Earn both Money and Knowledge Prizes by participating in
                        various contests and competitions by working on real
                        world projects and hackathons from our partner companies
                        & organizations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex justify-center items-center h-40 bg-blue-500 text-white rounded-xl mx-auto my-8">
            <div className="flex justify-around w-full">
              <div className="text-center">
                <p className="text-2xl font-bold">1 Year</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">500+</p>
                <p>Challenges Completed</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">10K+</p>
                <p>users</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">6+</p>
                <p>Countries</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className=" p-8 mt-16">
            <h3 className="text-2xl font-bold text-center max-w-xl mx-auto mb-4">
              Skills Challenges Cover various in-demand skills and Careers for
              the digital economy
            </h3>
            <p className="text-center mb-16">
              Explore the projects that various talents are working on.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
                UI/UX Design
              </button>
              <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg shadow-md hover:bg-gray-300">
                Data Science
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg shadow-md hover:bg-gray-300">
                Graphic Design
              </button>
              <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg shadow-md hover:bg-gray-300">
                Data Analysis & Research
              </button>
              <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg shadow-md hover:bg-gray-300">
                Animation
              </button>
              <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg shadow-md hover:bg-gray-300">
                Videography & Photography
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg shadow-md hover:bg-gray-300">
                Data Science
              </button>
              <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg shadow-md hover:bg-gray-300">
                AI & Machine Learning
              </button>
              <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg shadow-md hover:bg-gray-300">
                Web3
              </button>
              <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg shadow-md hover:bg-gray-300">
                Digital Marketing & Communications
              </button>
            </div>
          </div>
        </section>
        <section>
          <div className=" items-center justify-between p-10 bg-gray-100 mt-16 rounded-lg">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 p-6 flex flex-col justify-center">
                <div className="flex flex-col  mb-4">
                  <img src={ared2} alt="Logo" className="w-12 h-12" />
                  <div className="mt-8">
                    <h1 className="text-2xl font-bold text-gray-800">
                      The Embedded Finance Platform and Payroll Management
                      Software Solutions for your organization and Workforce.
                    </h1>
                    <button className="mt-20 flex items-center content-center text-blue-500 px-4  gap-6">
                      Learn more
                      <span className="bg-blue-500 text-white rounded-full p-2">
                        <FaArrowRightLong className=" h-3 w-3  text-white" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-6 flex justify-center">
                <img src={dash} alt="Screen" className="w-full h-auto " />
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <div className="flex space-x-2">
                {[...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === 2 ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section> {/* <section>challeng card</section> */}</section>

        <section>
          <div className=" py-16 px-4  mt-16">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h1 className="text-3xl md:text-3xl font-bold mb-4">
                What else can I gain from participating in Skills Challenges?
              </h1>
              <p className="text-lg md:text-md text-gray-600 ">
                Join Skills Challenges Program to accelerate your career growth
                and become part of Africa's largest workforce of digital
                professionals.
              </p>
            </div>
            <div className="flex gap-8 mt-24">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
                <div className="bg-white ">
                  <div className="text-white bg-blue-500 p-3 rounded-lg mb-4 w-10 h-10">
                    <FaBriefcase className=" text-1xl" />
                  </div>
                  <h2 className="text-xl font-semibold mb-2">
                    Enhance Your Employment Path
                  </h2>
                  <p className="text-gray-600">
                    Network with other talented individuals and learn from their
                    experiences.
                  </p>
                </div>
                <div className="bg-white ">
                  <div className="text-white bg-blue-500 p-3 rounded-lg mb-4 w-10 h-10">
                    <FaAward className=" text-1xl" />
                  </div>
                  <h2 className="text-xl font-semibold mb-2">
                    Earn Recognition and Prizes
                  </h2>
                  <p className="text-gray-600">
                    Gain valuable experience and knowledge to advance your
                    career in the digital economy.
                  </p>
                </div>
                <div className="bg-white ">
                  <div className="text-white bg-blue-500 p-3 rounded-lg mb-4 w-10 h-10">
                    <FaUserGraduate className="text-1xl" />
                  </div>
                  <h2 className="text-xl font-semibold mb-2">
                    Personal Growth
                  </h2>
                  <p className="text-gray-600">
                    Challenge yourself, learn new skills, and expand your
                    professional network.
                  </p>
                </div>
                <div className="bg-white ">
                  <div className="text-white bg-blue-500 p-3 rounded-lg mb-4 w-10 h-10">
                    <FaChalkboardTeacher className=" text-1xl" />
                  </div>
                  <h2 className="text-xl font-semibold mb-2">
                    Learn from Industry Experts
                  </h2>
                  <p className="text-gray-600">
                    Access valuable insights and guidance from experienced
                    professionals in the digital careers fields and spaces.
                  </p>
                </div>
              </div>
              <div className="flex justify-end ">
                <img
                  src={screenshot}
                  alt="Screenshot"
                  className="rounded-lg shadow-lg max-w-sm max-h-80"
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <Testimonials />
        </section>
        <section className="bg-[#F9FAFB]">
          <GetStarted />
        </section>
        <section>
          <div className="bg-blue-500 text-white py-12 px-4 text-center relative mb-16">
            <div className="max-w-4xl mx-auto bg-white text-blue-900 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <img
                  src={rectange}
                  alt="Career Potential"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Unlock Your Career Potential Today!
                </h2>
                <p className="mb-6">
                  Join a challenge or a hackathon to gain valuable work
                  experience, build an impressive portfolio and increase your
                  chances to land job opportunities and accelerate your career
                  growth.
                </p>
                <button className="bg-white text-blue-500 hover:bg-blue-700 hover:text-white border border-blue-500 text-sm rounded-full px-8 py-2 transition duration-300">
                  View Challenge
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
