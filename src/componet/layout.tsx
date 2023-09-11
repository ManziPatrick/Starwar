import  { ReactNode } from "react";
import NavBar from "./navbar";
import Foaterbar from "./Footer";

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <NavBar />
      {children}
      <Foaterbar/>
    </>
  );
}

export default MainLayout;
