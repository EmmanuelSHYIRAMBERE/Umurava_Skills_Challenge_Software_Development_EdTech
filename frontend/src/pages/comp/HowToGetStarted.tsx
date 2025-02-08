
import login from "../../assets/login.png";
import challenge from "../../assets/challe.png";

const GetStartedSection = () => {
  const steps = [
    {
      number: 1,
      title: "Sign up on Umurava Platform",
      description: "Submit your completed project for evaluation",
      image: login,
    },
    {
      number: 2,
      title: "Browse Open Challenges",
      description:
        "Explore the range of challenges and hackathons and choose one that aligns with your interests and career goals",
      image: challenge,
    },
    {
      number: 3,
      title: "Register and Participate",
      description:
        "Sign up for the challenge and start working on the project.",
    },
    {
      number: 4,
      title: "Submit your work",
      description: "Submit your completed project for evaluation",
    },
    {
      number: 5,
      title: "Receive Feedback and Recognition",
      description: "Get feedback on your work and celebrate your achievements",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto ml-10 px-4 py-16 mb-16 ">
      <h1 className="text-4xl font-bold text-center mb-20 text-gray-900">
        How to Get Started
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Column */}
        <div className="space-y-12">
          {steps.slice(0, 2).map((step) => (
            <div
              key={step.number}
              className="relative bg-white p-6 rounded-lg shadow-md w-full md:w-[450px] h-[330px]"
            >
              <span className="inline-flex items-center justify-center px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-md mb-4">
                Step {step.number}
              </span>
              <div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-6">{step.description}</p>
                {step.image && (
                  <div className="rounded-lg overflow-hidden ">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="ml-40 "
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-12">
          {steps.slice(2).map((step) => (
            <div
              key={step.number}
              className="relative bg-white p-6 rounded-lg shadow-md w-full md:w-[450px] h-[200px]"
            >
              <span className="inline-flex items-center justify-center px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-md mb-4">
                Step {step.number}
              </span>
              <div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetStartedSection;
