import { useState } from "react";
import { Search, User, Reply, Filter as FilterIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Message {
  from: "user" | "admin";
  message: string;
  timestamp: string;
  isRead: boolean;
}

interface Ticket {
  id: string;
  user: string;
  email: string;
  subject: string;
  status: "new" | "in-progress" | "resolved" | "closed";
  priority: "high" | "medium" | "low";
  created: string;
  lastUpdate: string;
  isRead: boolean;
  hasReply: boolean;
  messages: Message[];
}

interface Filters {
  status: "all" | "new" | "in-progress" | "resolved" | "closed";
  readStatus: "all" | "unread" | "read";
  replyStatus: "all" | "replied" | "unreplied";
  priority: "all" | "high" | "medium" | "low";
}

const AdminSupportDashboard: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [filters, setFilters] = useState<Filters>({
    status: "all",
    readStatus: "all",
    replyStatus: "all",
    priority: "all",
  });

  const tickets: Ticket[] = [
    {
      id: "T-1234",
      user: "John Doe",
      email: "john@example.com",
      subject: "Password Reset Issue",
      status: "new",
      priority: "high",
      created: "2025-02-01T10:30:00",
      lastUpdate: "2025-02-01T10:30:00",
      isRead: false,
      hasReply: false,
      messages: [
        {
          from: "user",
          message: "I can't reset my password. The reset link isn't working.",
          timestamp: "2025-02-01T10:30:00",
          isRead: false,
        },
      ],
    },
    {
      id: "T-1235",
      user: "Jane Smith",
      email: "jane@example.com",
      subject: "Account Access Problems",
      status: "in-progress",
      priority: "medium",
      created: "2025-02-01T09:15:00",
      lastUpdate: "2025-02-01T11:20:00",
      isRead: true,
      hasReply: true,
      messages: [
        {
          from: "user",
          message: "I'm unable to access my account settings.",
          timestamp: "2025-02-01T09:15:00",
          isRead: true,
        },
        {
          from: "admin",
          message: "Could you please provide your account ID?",
          timestamp: "2025-02-01T11:20:00",
          isRead: true,
        },
      ],
    },
  ];

  const getStatusColor = (status: Ticket["status"]): string => {
    const colors: Record<Ticket["status"], string> = {
      new: "bg-blue-100 text-blue-800",
      "in-progress": "bg-yellow-100 text-yellow-800",
      resolved: "bg-green-100 text-green-800",
      closed: "bg-gray-100 text-gray-800",
    };
    return colors[status];
  };

  const getPriorityColor = (priority: Ticket["priority"]): string => {
    const colors: Record<Ticket["priority"], string> = {
      high: "text-red-600",
      medium: "text-yellow-600",
      low: "text-green-600",
    };
    return colors[priority];
  };

  const [newMessage, setNewMessage] = useState<string>("");

  const filteredTickets = tickets.filter((ticket) => {
    const matchesStatus =
      filters.status === "all" || ticket.status === filters.status;
    const matchesReadStatus =
      filters.readStatus === "all" ||
      (filters.readStatus === "unread" && !ticket.isRead) ||
      (filters.readStatus === "read" && ticket.isRead);
    const matchesReplyStatus =
      filters.replyStatus === "all" ||
      (filters.replyStatus === "replied" && ticket.hasReply) ||
      (filters.replyStatus === "unreplied" && !ticket.hasReply);
    const matchesPriority =
      filters.priority === "all" || ticket.priority === filters.priority;
    const matchesSearch =
      ticket.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.id.toLowerCase().includes(searchQuery.toLowerCase());

    return (
      matchesStatus &&
      matchesReadStatus &&
      matchesReplyStatus &&
      matchesPriority &&
      matchesSearch
    );
  });

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, status: e.target.value as Filters["status"] });
  };

  const handleReadStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({
      ...filters,
      readStatus: e.target.value as Filters["readStatus"],
    });
  };

  const handleReplyStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({
      ...filters,
      replyStatus: e.target.value as Filters["replyStatus"],
    });
  };

  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, priority: e.target.value as Filters["priority"] });
  };

  return (
    <div className="min-h-screen px-8 ml-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Support Dashboard</h1>
          <div className="flex gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search tickets..."
                className="pl-10 pr-4 py-2 border rounded-lg w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <Card className="mb-6">
          <CardContent className="py-4">
            <div className="flex gap-4 items-center">
              <FilterIcon className="h-5 w-5 text-gray-500" />
              <select
                className="px-3 py-2 border rounded-lg"
                value={filters.status}
                onChange={handleStatusChange}
              >
                <option value="all">All Status</option>
                <option value="new">New</option>
                <option value="in-progress">In Progress</option>
                <option value="resolved">Resolved</option>
                <option value="closed">Closed</option>
              </select>

              <select
                className="px-3 py-2 border rounded-lg"
                value={filters.readStatus}
                onChange={handleReadStatusChange}
              >
                <option value="all">All Messages</option>
                <option value="unread">Unread</option>
                <option value="read">Read</option>
              </select>

              <select
                className="px-3 py-2 border rounded-lg"
                value={filters.replyStatus}
                onChange={handleReplyStatusChange}
              >
                <option value="all">All Replies</option>
                <option value="unreplied">Needs Reply</option>
                <option value="replied">Replied</option>
              </select>

              <select
                className="px-3 py-2 border rounded-lg"
                value={filters.priority}
                onChange={handlePriorityChange}
              >
                <option value="all">All Priority</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-12 gap-8">
          {/* Tickets List */}
          <div className="col-span-5">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl font-bold">
                  Support Tickets
                </CardTitle>
                <div className="text-sm text-gray-500">
                  Showing {filteredTickets.length} tickets
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredTickets.map((ticket) => (
                    <div
                      key={ticket.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${
                        selectedTicket?.id === ticket.id
                          ? "border-blue-500 bg-blue-50"
                          : "hover:border-gray-300"
                      }`}
                      onClick={() => setSelectedTicket(ticket)}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="flex items-center gap-2">
                            {!ticket.isRead && (
                              <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            )}
                            <span className="font-semibold">
                              {ticket.subject}
                            </span>
                          </div>
                          <div className="text-sm text-gray-600">
                            {ticket.user} - {ticket.id}
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${getStatusColor(
                              ticket.status
                            )}`}
                          >
                            {ticket.status}
                          </span>
                          {ticket.hasReply && (
                            <span className="text-xs text-green-600 flex items-center">
                              <Reply className="h-3 w-3 mr-1" />
                              Replied
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">
                          {new Date(ticket.lastUpdate).toLocaleString()}
                        </span>
                        <span
                          className={`font-medium ${getPriorityColor(
                            ticket.priority
                          )}`}
                        >
                          {ticket.priority}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Ticket Details */}
          <div className="col-span-7">
            {selectedTicket ? (
              <Card>
                <CardHeader className="border-b">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-bold mb-2">
                        {selectedTicket.subject}
                      </CardTitle>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {selectedTicket.user}
                        </span>
                        <span>ID: {selectedTicket.id}</span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${getStatusColor(
                            selectedTicket.status
                          )}`}
                        >
                          {selectedTicket.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <select
                        className="px-3 py-1 border rounded"
                        value={selectedTicket.status}
                      >
                        <option value="new">New</option>
                        <option value="in-progress">In Progress</option>
                        <option value="resolved">Resolved</option>
                        <option value="closed">Closed</option>
                      </select>
                      <select
                        className="px-3 py-1 border rounded"
                        value={selectedTicket.priority}
                      >
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                      </select>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6 py-4">
                    {selectedTicket.messages.map((message, index) => (
                      <div
                        key={index}
                        className={`flex ${
                          message.from === "admin"
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-[80%] p-4 rounded-lg ${
                            message.from === "admin"
                              ? "bg-blue-500 text-white"
                              : "bg-gray-100"
                          }`}
                        >
                          <p>{message.message}</p>
                          <span className="text-xs mt-2 block opacity-75">
                            {new Date(message.timestamp).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <textarea
                      className="w-full p-3 border rounded-lg resize-none"
                      rows={4}
                      placeholder="Type your response..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <div className="flex justify-end mt-2">
                      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                        Send Response
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-500">
                Select a ticket to view details
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSupportDashboard;
