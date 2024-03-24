import { NavBar } from "../(home)/_components/NavBar/NavBar";

export const metadata = {
  title: "viserlab-hosting",
  description: "Generated by create next app",
};

export default function HostingLayout({ children }) {
  return (
    <div>
      <NavBar />
      <div className="mt-20 lg:mt-0 lg:my-20 lg:w-[85%] lg:mx-auto mx-5">
        {children}
      </div>
    </div>
  );
}