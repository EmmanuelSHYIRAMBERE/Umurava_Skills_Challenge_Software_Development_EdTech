import React, { useState, ChangeEvent, FormEvent } from "react";
import { Eye, EyeOff } from "lucide-react";

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

interface PasswordInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

// Password Input component with toggle functionality
const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  name,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="mb-4 relative">
      <label className="block text-gray-700">{label}</label>
      <div className="relative">
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
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
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
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <PasswordInput
            label="Password"
            placeholder="Enter your Password"
            value={formData.password}
            onChange={handleInputChange}
            name="password"
          />

          {isSignUp && (
            <PasswordInput
              label="Confirm Password"
              placeholder="Confirm your Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              name="confirmPassword"
            />
          )}

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
