import Banner from "./_components/Banner";
import { NavBar } from "./_components/NavBar/NavBar";

export default function Home() {
  return (
    <div>
      <div
        className="h-[500px] lg:h-screen   w-full bg-[#ecf6fe]  "
        style={{
          backgroundImage: `url("https://viserlab.com/assets/images/shapes/banner-shape.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <NavBar />
        <div className="h-full flex justify-center lg:items-center">
          <Banner />
        </div>
      </div>
    </div>
  );
}
