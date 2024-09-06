import { Header } from "./components/Header";
import NavBar from "./components/NavBar";
import Today from "./components/Today";

export default function Home() {
  return (
    <main>
       <NavBar />
       <Header />
       <Today />
    </main>
  );
}
