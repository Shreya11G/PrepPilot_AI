import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import DashboardPage from "./pages/DashboardPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoute from "./routes/ProtectedRoute";

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-white">{title}</h1>
      <p className="mt-2 text-gray-400">
        This section will be implemented in a later phase.
      </p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*Public Route */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/*Application routes*/}
        <Route element={<ProtectedRoute />}>
          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route
              path="/dsa"
              element={<PlaceholderPage title="DSA Preparation" />}
            />

            <Route
              path="/ats"
              element={<PlaceholderPage title="Resume ATS Checker" />}
            />

            <Route
              path="/interview"
              element={<PlaceholderPage title="AI Mock Interview" />}
            />

            <Route
              path="/analytics"
              element={<PlaceholderPage title="Progress & Analytics" />}
            />

            <Route
              path="/roadmap"
              element={<PlaceholderPage title="My Roadmap" />}
            />

            <Route
              path="/profile"
              element={<PlaceholderPage title="Profile" />}
            />

            <Route
              path="/settings"
              element={<PlaceholderPage title="Settings" />}
            />
          </Route>
        </Route>
        {/* 404 */}
        <Route
          path="*"
          element={
            <div className="flex min-h-screen items-center justify-center bg-[#070b14] text-white">
              <div className="text-center">
                <h1 className="text-5xl font-bold">404</h1>
                <p className="mt-3 text-gray-400">Page not found.</p>
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
