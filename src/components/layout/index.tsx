import React, { ReactNode } from "react";
import Footer from "../footer";
import Header from "../header";
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-mainColor">
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
