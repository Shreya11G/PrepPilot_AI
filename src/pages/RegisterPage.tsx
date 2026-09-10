import { Link } from "react-router-dom";
import { ArrowRight, Code2 } from "lucide-react";

function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#070b14] px-4 py-8 text-white">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600/20">
              <Code2 className="h-7 w-7 text-purple-400" />
            </div>
          </div>

          <h1 className="text-2xl font-bold">Create your account</h1>

          <p className="mt-2 text-sm text-gray-400">
            Start your personalized SDE preparation journey
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-gray-800 bg-[#0d1320] p-6 shadow-xl">
          <form className="space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Full Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border border-gray-700 bg-[#080d18] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-gray-700 bg-[#080d18] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                placeholder="Create a password"
                className="w-full rounded-lg border border-gray-700 bg-[#080d18] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500"
              />
            </div>

            {/* Confirm password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Confirm Password
              </label>

              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                className="w-full rounded-lg border border-gray-700 bg-[#080d18] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500"
              />
            </div>

            {/* Register */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-purple-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-purple-500"
            >
              Create Account
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          {/* Login */}
          <p className="mt-6 text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-purple-400 hover:text-purple-300"
            >
              Sign in
            </Link>
          </p>
        </div>

        {/* Back */}
        <div className="mt-6 text-center">
          <Link
            to="/"
            className="text-sm text-gray-500 transition hover:text-gray-300"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;