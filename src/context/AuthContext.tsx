import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

export interface User {
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("preppilot_user");

    if (!storedUser) {
      return null;
    }

    try {
      return JSON.parse(storedUser);
    } catch {
      localStorage.removeItem("preppilot_user");
      return null;
    }
  });

  const login = (userData: User) => {
    console.log("AuthContext login:", userData);

    localStorage.setItem(
      "preppilot_user",
      JSON.stringify(userData)
    );

    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("preppilot_user");
    setUser(null);
  };

  const isAuthenticated = Boolean(user);

  console.log("AuthContext state:", {
    user,
    isAuthenticated,
  });

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}