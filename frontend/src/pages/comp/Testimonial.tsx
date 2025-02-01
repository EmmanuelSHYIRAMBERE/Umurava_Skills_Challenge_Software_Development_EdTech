
import welcom from "../../assets/welcome (1).mp4";
import { FaPlayCircle } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Manzi Jack",
      title: "Product Designer, Kigali",
      videoUrl: welcom, // Replace with actual video URL
    },
    {
      name: "Manzi Jack",
      title: "Product Designer, Kigali",
      videoUrl: welcom, // Replace with actual video URL
    },
    {
      name: "Manzi Jack",
      title: "Product Designer, Kigali",
      videoUrl: welcom, // Replace with actual video URL
    },
  ];

  return (
    <div className="py-16 px-4 md:px-16">
      <div className="max-w-sm  mb-16">
        <h2 className="text-2xl md:text-2xl font-bold mb-4">
          Users are in Love with Skills Challenges Program
        </h2>
        <p className="text-md md:text-md">
          See what our clients say about working with us. Their success speaks
          for our dedication and expertise.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md border border-[#D2D2D2] text-center relative"
          >
            <div className="relative pb-[56.25%] ">
              <div className="absolute inset-0 bg-blue-500 rounded-lg flex items-center justify-center">
                <FaPlayCircle className="text-white text-6xl" />
              </div>
              <video
                className="absolute inset-0 w-full h-full rounded-lg object-cover"
                src={testimonial.videoUrl}
                poster="../../assets/poster.jpg" // Optional: Add a poster image
                controls={false} // Hide default controls
              ></video>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-2 mb-8">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === 1 ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
