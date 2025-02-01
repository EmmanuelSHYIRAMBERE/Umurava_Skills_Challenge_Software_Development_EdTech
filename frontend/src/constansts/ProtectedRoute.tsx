// src/components/ProtectedRoute.tsx
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

type ProtectedRouteProps = {
  children: ReactNode;
  allowedRoles: string[];
};

type User = {
  role: string;
  // Add other user properties if needed
};

const ProtectedRoute = ({
  children,
  allowedRoles,
}: ProtectedRouteProps): JSX.Element => {
  const location = useLocation();

  // Get user from localStorage with proper type checking
  const userString = localStorage.getItem("user");
  const user: User | null = userString ? JSON.parse(userString) : null;

  // If no user or no user role, redirect to login
  if (!user || !user.role) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If user role is not in allowed roles, redirect to default route
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  // User is authenticated and authorized
  return <>{children}</>;
};

export default ProtectedRoute;
