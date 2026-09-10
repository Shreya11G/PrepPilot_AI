import { Bell, Search } from "lucide-react";

function Navbar() {
  return (
    <header className="fixed right-0 top-0 z-30 flex h-20 items-center justify-between border-b border-white/10 bg-[#080c17]/90 px-8 backdrop-blur-md">
      {/* Search */}
      <div className="relative w-96">
        <Search
          size={19}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
        />

        <input
          type="text"
          placeholder="Search anything..."
          className="w-full rounded-xl border border-white/10 bg-white/3 py-3 pl-11 pr-20 text-sm text-white outline-none placeholder:text-gray-500 transition focus:border-purple-500/50"
        />

        <div className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md border border-white/10 px-2 py-1 text-xs text-gray-500">
          Ctrl + K
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        {/* Notifications */}
        <button className="relative text-gray-400 transition hover:text-white">
          <Bell size={22} />

          <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-purple-600 text-[10px] font-bold text-white">
            3
          </span>
        </button>

        {/* User */}
        <button className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600/20 text-sm font-semibold text-purple-300">
            SG
          </div>

          <div className="hidden text-left sm:block">
            <p className="text-sm font-medium text-white">
              Shreya Gupta
            </p>

            <p className="text-xs text-gray-500">
              SDE Aspirant
            </p>
          </div>
        </button>
      </div>
    </header>
  );
}

export default Navbar;