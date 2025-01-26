

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen max-w-6xl mx-auto  ">
        <section className="flex gap-8 items-center bg-red-500">
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
          {/* <div className="w-[275px] h-[443px] relative bg-[#2b71f0] rounded-[32px] overflow-hidden">
            <div className="w-[294px] h-[294px] left-[49px] top-[-3.29px] absolute origin-top-left rotate-[55.69deg] bg-white rounded-full" />
            <div className="w-[342.46px] h-[406.14px] left-[-34.23px] top-[37px] absolute">
              <img
                className="w-[342.46px] h-[406.14px] left-0 top-0 absolute"
                src="/api/placeholder/342/406"
                alt="Placeholder"
              />
              <img
                className="w-[66.12px] h-[21.94px] left-[138.07px] top-[295.74px] absolute origin-top-left rotate-[-1.39deg]"
                src="/api/placeholder/66/22"
                alt="Placeholder"
              />
              <img
                className="w-[20.11px] h-[6.64px] left-[216.87px] top-[233.18px] absolute origin-top-left rotate-[-1.39deg]"
                src="/api/placeholder/20/7"
                alt="Placeholder"
              />
            </div>
            <div className="w-[275px] h-[86px] left-0 top-[355px] absolute bg-gradient-to-b from-[#2b70ef] to-[#2b71f0] rounded-[32px]" />
          </div> */}
        </section>
      </div>
    </>
  );
}
