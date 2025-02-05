import React from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import { MuiOtpInput } from "mui-one-time-password-input";
import { Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import usePost from "@/hooks/use-post";
import { useToast } from "@/hooks/use-toast";
import { IUser } from "@/types";

const VerifyOtp = () => {
  const navigate = useNavigate();

  const { toast } = useToast();

  const [otp, setOtp] = React.useState("");

  const [isResending, setIsResending] = React.useState(false);

  const { add, isAdding } = usePost("/api/v1/auth/verifyEmail");

  // Get user from localStorage with proper type checking
  const userString = localStorage.getItem("user");

  console.log("userString", userString);

  const user: IUser | null = userString ? JSON.parse(userString) : null;

  console.log("user", user);

  // If no user or no user role, redirect to login
  if (!user || !user.email) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const userData = user;

  const handleOtpChange = (newValue: string) => {
    setOtp(newValue);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userData) {
      toast({
        title: "Error",
        description: "User data is missing. Please log in again.",
      });
      navigate("/login");
      return;
    }
    try {
      await add({ email: userData.email, otp });

      toast({
        title: "Success",
        description: "Successfully account verified! Redirecting...",
      });

      navigate("/login");
    } catch (error) {
      console.log("Error verifying email", error);
      toast({
        title: "Error",
        description: "Failed to verify email.",
      });
    }
  };

  const handleResendEmail = async () => {
    setIsResending(true);

    if (!userData) {
      toast({
        title: "Error",
        description: "User data is missing. Please log in again.",
      });
      navigate("/login");
      return;
    }

    try {
      const response = await fetch("/api/v1/user/resendToken", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userData.email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to resend verification email");
      }

      toast({
        title: "Success",
        description: "Email sent successfully!",
      });
      setOtp("");
    } catch (err) {
      console.error("Error resending email", err);
      toast({
        title: "Error",
        description: "Failed to resend verification email",
      });
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-blue-600 p-4">
      <div className="text-white text-left mr-10 hidden md:block">
        <h1 className="text-3xl font-bold">UMURAVA</h1>
        <p className="text-lg">OTP Verification</p>
      </div>
      <Card className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
        <CardContent className="flex flex-col items-center space-y-6">
          <div className="bg-blue-100 p-3 rounded-full">
            <ShieldCheck className="text-blue-600 w-10 h-10" />
          </div>
          <p className="text-gray-700 text-lg font-medium">Enter OTP Code</p>
          <p className="text-gray-500 text-sm">
            We have sent an OTP to your email
            <span className="font-semibold">{userData && userData.email}</span>.
            Please check your inbox.
          </p>
          <div className="flex space-x-3">
            <MuiOtpInput
              value={otp}
              onChange={handleOtpChange}
              length={6}
              validateChar={(char: string) => char.match(/[0-9]/) !== null}
              sx={{ mb: 2 }}
            />
          </div>
          <Button
            className="w-full flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg"
            onClick={handleSubmit}
            disabled={isAdding}
          >
            {isAdding && <span className="animate-spin mr-2">🔄</span>}
            {isAdding ? "Verifying..." : "Verify OTP"}
          </Button>
          <Button
            className="w-full flex items-center justify-center gap-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 rounded-lg mt-2"
            onClick={handleResendEmail}
            disabled={isResending}
          >
            {isResending && <span className="animate-spin mr-2">🔄</span>}

            {isResending ? "Resending..." : "Resend Token"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default VerifyOtp;
