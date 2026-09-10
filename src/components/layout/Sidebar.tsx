import {
  BarChart3,
  Bot,
  Code2,
  FileCheck2,
  LayoutDashboard,
  LogOut,
  Map,
  Settings,
  User,
} from "lucide-react";

const navigationItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    label: "DSA Preparation",
    icon: Code2,
    path: "/dsa",
  },
  {
    label: "ATS Checker",
    icon: FileCheck2,
    path: "/ats",
  },
  {
    label: "AI Mock Interview",
    icon: Bot,
    path: "/interview",
  },
  {
    label: "Analytics",
    icon: BarChart3,
    path: "/analytics",
  },
  {
    label: "My Roadmap",
    icon: Map,
    path: "/roadmap",
  },
];

const bottomItems = [
  {
    label: "Profile",
    icon: User,
    path: "/profile",
  },
  {
    label: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-white/10 bg-[#080c17]">
      {/* Logo */}
      <div className="flex h-24 items-center border-b border-white/10 px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-600/20 text-purple-400">
            <Code2 size={26} />
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">
              PrepPilot AI
            </h1>

            <p className="text-xs text-gray-400">
              Your SDE Preparation Partner
            </p>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-4 py-6">
        <div className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.path}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-400 transition-all duration-200 hover:bg-purple-500/10 hover:text-white"
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>

        <div className="my-6 border-t border-white/10" />

        <div className="space-y-2">
          {bottomItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.path}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-400 transition-all duration-200 hover:bg-purple-500/10 hover:text-white"
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>
      </nav>

      {/* Logout */}
      <div className="border-t border-white/10 p-4">
        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-400 transition-all duration-200 hover:bg-red-500/10 hover:text-red-400">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;