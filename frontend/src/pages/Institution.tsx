import {
  FaBriefcase,
  FaChalkboardTeacher,
  FaUsers,
  FaUserTie,
  FaClipboardList,
} from "react-icons/fa";
import skills from "../assets/skill section banner 2.png";
import students from "../assets/student.png";
import tori from "../assets/logo/Tori 1.png";
import google from "../assets/logo/Gdg_Kigali 1.png";
import education from "../assets/logo/EducationCollaborative 1.png";
import keppler from "../assets/logo/KeplerLogo 1.png";
import hill from "../assets/logo/HiiL_Logo 1.png";
import cib from "../assets/logo/CIBA 1.png";
import ared from "../assets/logo/Ared 1.png";
import igihe from "../assets/logo/IGIHE_LOGO 1.png";
import viamo from "../assets/logo/EducationCollaborative 2.png";
import laterite from "../assets/logo/HiiL_Logo 2.png";
import sokofund from "../assets/logo/SokoFund 1.png";

const partners = [
  tori,
  google,
  education,
  keppler,
  hill,
  cib,
  ared,
  igihe,
  viamo,
  keppler,
  laterite,
  sokofund,
];
const Institution = () => {
  return (
    <>
      <div className="items-center justify-center min-h-screen max-w-6xl mx-auto mt-12">
        <section>
          <div className=" py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                  Accelerate Your Students and Trainees Employability and Career
                  Growth through Project-based Learning Solution
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  We partner with Universities, Schools, and Training
                  Institutions to build the work experience of their students
                  and trainees through project-based learning challenges and
                  hackathons
                </p>
                <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600">
                  Partner with us
                </button>
              </div>
              <div className="lg:w-1/2 mt-8 lg:mt-0">
                <img
                  src={students}
                  alt="Students"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
                Key Offerings & Benefits:
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* First Row */}
                <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg flex items-start">
                  <div className="mr-4">
                    <FaBriefcase size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Employability and Career Development Opportunities
                    </h3>
                    <p className="text-base">
                      Students gain hands-on experience working on real-world
                      challenges and help them build professional networks that
                      increase their chances and readiness of landing job
                      opportunities and this lead to career advancement and
                      long-term success.
                    </p>
                  </div>
                </div>
                <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg flex items-start">
                  <div className="mr-4">
                    <FaChalkboardTeacher size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Practical Application of Classroom Knowledge
                    </h3>
                    <p className="text-base">
                      The Skills Challenges bridge the gap between theoretical
                      learning and practical application, reinforcing what
                      students learn in their academic courses.
                    </p>
                  </div>
                </div>
                <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg flex items-start">
                  <div className="mr-4">
                    <FaUsers size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Students & Trainees Engagement
                    </h3>
                    <p className="text-base">
                      Embed and incorporate Skills Challenges into your courses
                      to give students and trainees hands-on projects and
                      practices that enhance their learning experience and
                      skills mastery. Competitive and project-based challenges
                      keep students motivated and actively engaged in their
                      learning journey.
                    </p>
                  </div>
                </div>

                {/* Second Row */}
                <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg flex items-start sm:col-span-2 lg:col-span-2">
                  <div className="mr-4">
                    <FaUserTie size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Access to the Industry Experts & Mentors
                    </h3>
                    <p className="text-base">
                      Skills Challenges expose students to industry experts and
                      mentors who offer guidance, support, and insights on the
                      trends of digital careers. This can help students gain a
                      deep understanding of their chosen field.
                    </p>
                  </div>
                </div>
                <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg flex items-start">
                  <div className="mr-4">
                    <FaClipboardList size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Skills Assessments
                    </h3>
                    <p className="text-base">
                      Embed our projects-based tests and skills assessments
                      directly into your curriculum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          {" "}
          <div className="bg-white py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-gray-900 text-center max-w-3xl mx-auto mb-8">
                Join a few Educational Institutions using Skills Challenges by
                Umurava
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  gap-8">
                {partners.map((partner, index) => (
                  <div key={index} className="flex justify-center">
                    <img
                      src={partner}
                      alt={`Partner ${index}`}
                      className="h-16"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex flex-col  items-center justify-center p-8">
            <h3 className="text-2xl font-bold text-center max-w-xl mb-8">
              How Skills Challenges Program can Be Integrated into your Learning
              Institution
            </h3>
            <div className="flex gap-20 mt-12">
              <div className="w-full md:w-1/2  p-4">
                <ul className="list-none p-0">
                  {[
                    "As Career Development and Job Readiness Program",
                    "As Skills Assessments Method after a course or a term",
                    "As extracurricular activities to complement academic courses",
                    "As the portfolio of the Students",
                    "As part of Capstone Projects or final-year assignments",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-8 h-8 mr-3 text-white bg-blue-500 rounded-full">
                        {index + 1}
                      </div>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/2 p-4 h-96 flex items-center justify-center ">
                <img
                  src={skills}
                  alt="Skills Challenges Program"
                  className="w-full h-96 rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex flex-col items-center justify-center mb-16 mt-8">
            <div className="relative flex items-center justify-center w-full h-64 bg-blue-500 rounded-xl ">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-50"></div>
              <div className="relative z-10 p-6 text-center text-white">
                <h1 className="text-3xl font-bold mb-4 max-w-lg">
                  Ready to transform your learning institution?
                </h1>
                <button className="px-20 py-3 text-lg font-semibold text-blue-500 bg-white rounded-lg shadow-md hover:bg-gray-100">
                  Let's Partner
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Institution;
