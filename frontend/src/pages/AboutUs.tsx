import video from "../assets/video.png"
import challenge from "../assets/Challenges & Hackathons  Page.png"
import { RiStore2Line } from "react-icons/ri";
const AboutUs = () => {
  return (
    <>
      <div className="items-center justify-center min-h-screen max-w-6xl mx-auto mt-12">
        <section>
          <div className="flex flex-col md:flex-row items-center justify-center p-4 md:p-8">
            <div className="w-full md:w-1/2 p-4 h-full md:h-96 flex flex-col justify-center ">
              <h2 className="text-2xl font-bold text-blue-600 mb-5">
                Our Story
              </h2>
              <p className="text-gray-700 mb-8">
                With 3 years of experience matching African digital talents to
                local and global job markets, we still remain with a big number
                of jobs that remain unfilled due to the lack of experienced
                African Talents.
              </p>
              <p className="text-gray-700">
                Driven by our mission to place skilled and professional digital
                talent, we created Skills Challenges as a project-based learning
                solution for talents to gain real-world experience, solve
                problems, and build portfolios so that they become ready for
                global job markets.
              </p>
            </div>
            <div className="w-full md:w-1/2 p-4 h-full md:h-96">
              <div className="relative w-full h-full">
                <img
                  src={video}
                  alt="Umurava Skills Challenges"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="items-center justify-center min-h-screen max-w-5xl mx-auto mt-12">
            <div className="container mx-auto px-4 py-12">
              <h1 className="text-4xl font-bold text-center mb-20">
                Why we are solving this problem
              </h1>

              <div className="bg-blue-600 p-16 rounded-lg shadow-md mb-8 text-white ">
                <div className="flex-col items-center mb-4">
                  <div className="bg-white text-blue-500 p-3 rounded-lg mb-4 w-12 h-12">
                    <RiStore2Line className="text-2xl " />
                  </div>
                  <h2 className="text-2xl font-bold ">
                    Bridging the Experience Gap
                  </h2>
                </div>
                <p>
                  Many talents acquired theoretical knowledge and are rejected
                  from jobs because they lack work experience and are not able
                  to put in actions what they acquired in the schools.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-blue-600 text-white p-8 rounded-lg shadow-md">
                  <div className="flex-col items-center mb-4">
                    <div className="bg-white text-blue-500 p-3 rounded-lg mb-4 w-12 h-12">
                      <RiStore2Line className="text-2xl " />
                    </div>
                    <h2 className="text-2xl  font-bold">
                      Bridging Education and Employment
                    </h2>
                  </div>
                  <p>
                    Traditional education doesnt’ always prepare talents for the
                    demands of the tech and digital economy and we are providing
                    in-demand skills through Skills Challenges.
                  </p>
                </div>

                <div className="bg-blue-600 text-white p-8 rounded-lg shadow-md">
                  <div className="flex-col items-center mb-4">
                    <div className="bg-white text-blue-500 p-3 rounded-lg mb-4 w-12 h-12">
                      <RiStore2Line className="text-2xl " />
                    </div>
                    <h2 className="text-2xl font-bold">
                      Preparing Talents for Global Job Markets
                    </h2>
                  </div>
                  <p>
                    We are ensuring that African talents shine globally and
                    that’s why we are equipping them with global technical
                    experience and standout globally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          {" "}
          <div className="flex flex-col md:flex-row items-center justify-center p-4 md:p-8">
            <div className="w-full md:w-1/2  h-full md:h-96   flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Skills Challenges Program is built on the Umurava Talent
                Marketplace Platform
              </h2>
              <p className="text-gray-700 mb-4">
                A Project-based Learning Solution aimed at providing young and
                senior talents with an opportunity to showcase their skills to
                real-world projects and challenges from our partner companies
                and organizations.
              </p>
              <p className="text-gray-700 mb-4">
                Umurava Skills Challenges enables young talents to build a
                portfolio and experience that increases their readiness to
                access job opportunities and projects.
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-32">
                Get Started
              </button>
            </div>
            <div className="w-full md:w-1/2 p-4 h-full md:h-96 flex items-center justify-center ">
              <img
                src={challenge}
                alt="Skills Challenges Platform"
                className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default AboutUs;
