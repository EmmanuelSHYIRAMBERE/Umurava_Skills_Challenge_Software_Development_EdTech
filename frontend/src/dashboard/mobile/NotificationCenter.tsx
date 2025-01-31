import { useState } from "react";
import { Bell } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Notification {
  id: string;
  title: string;
  message: string;
  type: "info" | "warning" | "success" | "error";
  timestamp: Date;
  read: boolean;
}

export const NotificationCenter = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      title: "Hackathon Registration Open",
      message: "Web3 Global Hackathon 2025 is now accepting registrations!",
      type: "info",
      timestamp: new Date(),
      read: false,
    },
    {
      id: "2",
      title: "Project Submission Deadline",
      message:
        "24 hours remaining to submit your project for AI Innovation Hack",
      type: "warning",
      timestamp: new Date(),
      read: false,
    },
    {
      id: "3",
      title: "New Team Request",
      message: "Sarah Miller wants to join your hackathon team",
      type: "info",
      timestamp: new Date(),
      read: false,
    },
    {
      id: "4",
      title: "Community Achievement",
      message: "You've earned the 'Collaboration Champion' badge!",
      type: "success",
      timestamp: new Date(),
      read: false,
    },
    {
      id: "5",
      title: "Workshop Starting Soon",
      message: "Reminder: 'Building with Web3' workshop starts in 30 minutes",
      type: "warning",
      timestamp: new Date(),
      read: true,
    },
    {
      id: "6",
      title: "Project Featured",
      message: "Your project 'EcoChain' was featured in Community Spotlight!",
      type: "success",
      timestamp: new Date(),
      read: true,
    },
  ]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        {notifications.length === 0 ? (
          <DropdownMenuItem>No new notifications</DropdownMenuItem>
        ) : (
          <>
            {notifications.map((notification) => (
              <DropdownMenuItem
                key={notification.id}
                onClick={() => markAsRead(notification.id)}
                className="flex flex-col items-start p-4"
              >
                <div className="flex items-center justify-between w-full">
                  <span className="font-medium">{notification.title}</span>
                  {!notification.read && (
                    <Badge variant="secondary" className="ml-2">
                      New
                    </Badge>
                  )}
                </div>
                <span className="text-sm text-gray-500">
                  {notification.message}
                </span>
                <span className="text-xs text-gray-400 mt-1">
                  {notification.timestamp.toLocaleTimeString()}
                </span>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-center">
              View all notifications
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
