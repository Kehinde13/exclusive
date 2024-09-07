import Banner from "./components/Banner";
import BestSeller from "./components/BestSeller";
import { Categories } from "./components/Categories";
import { Header } from "./components/Header";
import NavBar from "./components/NavBar";
import OurProducts from "./components/OurProducts";
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
    </main>
  );
}
