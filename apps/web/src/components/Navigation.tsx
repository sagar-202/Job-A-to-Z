import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const navLinks = [
    { name: "Resume", path: "/" },
    { name: "Readiness", path: "/readiness" },
    { name: "Jobs", path: "/jobs" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="mr-4 flex">
          <NavLink to="/" className="mr-6 flex items-center space-x-2">
            <span className="text-xl font-bold font-serif tracking-tight">Career OS</span>
          </NavLink>
        </div>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  "transition-colors hover:text-foreground/80",
                  isActive ? "text-foreground font-semibold" : "text-muted-foreground"
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
