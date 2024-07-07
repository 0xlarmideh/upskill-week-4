import { ReactNode } from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex max-w-7xl mx-auto flex-auto flex-col">
      <div className="flex gap-4 flex-auto min-w-0">
        <Sidebar />
        <div className="flex flex-col flex-auto min-h-screen min-w-0 relative w-full ">
          <main className="flex-1 tracking-tighter py-10 px-2 h-full grow">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
