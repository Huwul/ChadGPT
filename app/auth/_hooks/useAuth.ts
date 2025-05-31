import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { RegisterInput, LoginInput } from "@/lib/validations";

interface AuthResponse {
  message: string;
  user: {
    id: string;
    email: string;
    fullName: string;
  };
}

interface AuthError {
  error: string;
  details?: string;
}

const authApi = {
  register: async (data: RegisterInput): Promise<AuthResponse> => {
    const response = await axios.post("/api/auth/register", data);
    return response.data;
  },

  login: async (data: LoginInput): Promise<AuthResponse> => {
    const response = await axios.post("/api/auth/login", data);
    return response.data;
  },
};

export const useRegister = () => {
  return useMutation({
    mutationFn: authApi.register,
    onSuccess: (data: AuthResponse) => {
      console.log("Registration successful:", data);
      window.location.href = "/dashboard";
    },
    onError: (error: AxiosError<AuthError>) => {
      console.error(
        "Registration failed:",
        error.response?.data?.error || error.message
      );
    },
  });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: authApi.login,
    onSuccess: (data: AuthResponse) => {
      console.log("Login successful:", data);
      window.location.href = "/dashboard";
    },
    onError: (error: AxiosError<AuthError>) => {
      console.error(
        "Login failed:",
        error.response?.data?.error || error.message
      );
    },
  });
};
