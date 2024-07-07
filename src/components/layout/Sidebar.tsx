import { Link } from "@tanstack/react-router";
import pp from "../../assets/pp.png";
import { navLinks } from "../../constants";

const Sidebar = () => {
  return (
    <aside className="bg-white flex flex-col gap-12 z-30 px-2 sm:px-12 py-10 sticky md:flex top-0 h-screen">
      <div className="ml-4 size-[45px] sm:size-[60px]">
        <img
          src={pp}
          alt="picture"
          className="border-[2px] border-gray-400 rounded-full size-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        {navLinks.map((link, i) => (
          <Link
            className="text-[18px] flex justify-center sm:justify-start sm:px-4 py-2 rounded-md  whitespace-nowrap"
            key={i}
            activeProps={{ className: "bg-green-600 text-white font-medium" }}
            // activeOptions={{ exact: true }}
            to={link.url}
          >
            <span className="hidden sm:block">{link.label}</span>
            <link.icon className="size-[24px] sm:hidden" />
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
