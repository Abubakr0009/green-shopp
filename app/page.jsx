import Footer from "./components/Footer";
import Footertop from "./components/Footertop";
import Navbar from "./components/Nabvar";
import SwiperComponent from "./components/Swiper";
import Dashboard from "./dashboard/page";
import Main from "./main/page";

export default function Home() {
  return (
    <div className="m-auto w-[1165px]">
      <Navbar />
      <SwiperComponent />
      <Main />
      <Dashboard />
      <Footertop />
      <Footer />
    </div>
  );
}
