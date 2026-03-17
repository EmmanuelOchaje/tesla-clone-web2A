import Navbar from "./components/nav";
import Hero from "./components/hero";
import VehicleCards from "./components/vehicle";
import Footer from "./components/footer";
import Features from "./components/features";
import Solar from "./components/solar";
import Tile from "./components/tile";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <VehicleCards />
      <Tile />
      <Features />
      <Solar />
      <Footer />
    </div>
  );
}
