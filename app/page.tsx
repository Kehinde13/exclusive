import Banner from "./components/Banner";
import BestSeller from "./components/BestSeller";
import { Categories } from "./components/Categories";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import NavBar from "./components/NavBar";
import OurProducts from "./components/OurProducts";
import Services from "./components/Services";
import Today from "./components/Today";

export default function Home() {
  return (
    <main>
       <NavBar />
       <Header />
       <Today />
       <Categories />
       <BestSeller />
       <Banner />
       <OurProducts />
       <Featured />
       <Services />
       <Footer />
    </main>
  );
}
