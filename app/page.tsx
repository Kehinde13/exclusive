import Banner from "./components/Banner";
import BestSeller from "./components/BestSeller";
import { Categories } from "./components/Categories";
import Featured from "./components/Featured";
import { Header } from "./components/Header";
import OurProducts from "./components/OurProducts";
import Services from "./components/Services";
import Today from "./components/Today";

export default function Home() {
  return (
    <main>
       <Header />
       <Today />
       <Categories />
       <BestSeller />
       <Banner />
       <OurProducts />
       <Featured />
       <Services />
    </main>
  );
}
