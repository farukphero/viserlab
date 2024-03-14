import Banner from "./_components/Banner";
import BuildingTomorrows from "./_components/BuildingTomorrows";
import Empowering from "./_components/Empowering";
import EmpoweringForPhone from "./_components/EmpoweringForPhone";
import FeaturedItems from "./_components/FeaturedItems";
import { NavBar } from "./_components/NavBar/NavBar";
import SolutionsPart from "./_components/SolutionsPart";

export default function Home() {
  return (
    <div>
      <div
        className="h-[440px] lg:h-screen   w-full bg-[#edf4f9]  "
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
      <BuildingTomorrows />
      <FeaturedItems />
      <SolutionsPart />
      <Empowering />
      <EmpoweringForPhone />
    </div>
  );
}
