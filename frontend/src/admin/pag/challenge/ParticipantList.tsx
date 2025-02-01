
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const ParticipantsList = () => {
  const participants = [
    {
      name: "Hilaire Sh",
      role: "Product Designer",
      status: "offline",
      avatar: "/api/placeholder/32/32",
    },
    {
      name: "Christian Manzi",
      role: "UI/UX Designer",
      status: "online",
      avatar: "/api/placeholder/32/32",
    },
    {
      name: "Jolly Mutesi",
      role: "Content Creator",
      status: "online",
      avatar: "/api/placeholder/32/32",
    },
    {
      name: "Dr. Samuel Smith",
      role: "Mental Health Professional",
      status: "online",
      avatar: "/api/placeholder/32/32",
    },
    {
      name: "Dr. Lily Chen",
      role: "Dermatologist",
      status: "online",
      avatar: "/api/placeholder/32/32",
    },
  ];

  return (
    <Card className="max-w-md">
      <CardHeader className="flex flex-row items-center justify-between py-4 px-6 border-b">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold">Participants</h2>
          <span className="bg-blue-600 text-white text-sm px-2 py-0.5 rounded-full">
            250
          </span>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <div className="divide-y">
          {participants.map((participant, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors"
            >
              {/* Avatar */}
              <div className="relative">
                <img
                  src={participant.avatar}
                  alt={participant.name}
                  className="w-8 h-8 rounded-full bg-gray-200"
                />
                {participant.status === "online" && (
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>

              {/* Participant Info */}
              <div className="flex-1">
                <div className="font-medium">{participant.name}</div>
                <div className="text-sm text-gray-500">{participant.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <button className="w-2/3 flex justify-center items-center mx-auto py-3 rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-colors font-medium mt-4 mb-4">
          View All
        </button>
      </CardContent>
    </Card>
  );
};

export default ParticipantsList;
