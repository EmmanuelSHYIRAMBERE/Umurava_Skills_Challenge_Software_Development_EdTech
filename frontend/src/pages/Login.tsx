import React, { useState, ChangeEvent, FormEvent } from "react";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";
import { SERVER_BASE_URL } from "@/constansts/constants";
import { useNavigate } from "react-router-dom";

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  name: string;
}

interface PasswordInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  error: string;
}

// Password Input component with toggle functionality
const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  name,
  error,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="mb-4 relative">
      <div className="flex items-center justify-between">
        <label className="block text-gray-700">{label}</label>
        {error && <p className="text-red-500 text-sm ml-2">{error}</p>}
      </div>
      <div className="relative flex items-center">
        <input
          type={showPassword ? "text" : "password"}
          className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 pr-10"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full
                   hover:bg-gray-100 transition-colors duration-200
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <EyeOff className="w-5 h-5 text-gray-500 hover:text-gray-700 transition-colors duration-200" />
          ) : (
            <Eye className="w-5 h-5 text-gray-500 hover:text-gray-700 transition-colors duration-200" />
          )}
        </button>
      </div>
    </div>
  );
};

const Login: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    name: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear the error message when the user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    if (isSignUp) {
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Confirm Password is required";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }

      if (!formData.phone) {
        newErrors.phone = "Phone Number is required";
      }

      if (!formData.name) {
        newErrors.name = "Name is required";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!validateForm()) return;

    const apiData = isSignUp
      ? {
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
          name: formData.name,
        }
      : { email: formData.email, password: formData.password };
console.log("apiData",apiData);
    try {
    const response = await axios.post(
      isSignUp
        ? `${SERVER_BASE_URL}/api/v1/user`
        : `${SERVER_BASE_URL}/api/v1/auth/login`,
      apiData
    );
      alert("Success!");
      console.log("response",response);
      // Store user data and token in local storage
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("token", response.data.access_token);

      // Navigate to the dashboard
      navigate("/dashboard");
    } catch (error) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        api: "An error occurred. Please try again.",
      }));
      console.log("error",error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen  bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg mt-8 shadow-md">
        <div className="flex justify-between mb-6">
          <button
            type="button"
            onClick={() => setIsSignUp(false)}
            className={`flex-1 py-2 text-center transition-all duration-200 ${
              isSignUp
                ? "text-gray-500 hover:text-gray-700"
                : "text-blue-500 font-bold border-b-2 border-blue-500"
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => setIsSignUp(true)}
            className={`flex-1 py-2 text-center transition-all duration-200 ${
              isSignUp
                ? "text-blue-500 font-bold border-b-2 border-blue-500"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Create Account
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <label className="block text-gray-700">Email</label>
              {errors.email && (
                <p className="text-red-500 text-sm ml-2">{errors.email}</p>
              )}
            </div>
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          {isSignUp && (
            <>
              <div className="mb-4">
                <div className="flex items-center justify-between">
                  <label className="block text-gray-700">Name</label>
                  {errors.name && (
                    <p className="text-red-500 text-sm ml-2">{errors.name}</p>
                  )}
                </div>
                <input
                  type="text"
                  name="name"
                  className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <div className="flex items-center justify-between">
                  <label className="block text-gray-700">Phone Number</label>
                  {errors.phone && (
                    <p className="text-red-500 text-sm ml-2">{errors.phone}</p>
                  )}
                </div>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter your Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </>
          )}
          <PasswordInput
            label="Password"
            placeholder="Enter your Password"
            value={formData.password}
            onChange={handleInputChange}
            name="password"
            error={errors.password}
          />

          {isSignUp && (
            <>
              <PasswordInput
                label="Confirm Password"
                placeholder="Confirm your Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                name="confirmPassword"
                error={errors.confirmPassword}
              />
            </>
          )}

          {errors.api && <p className="text-red-500 mb-4">{errors.api}</p>}

          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                     transition-colors duration-200"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
