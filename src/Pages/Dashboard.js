import { Nav } from "../Components/Nav"
import { Header } from "../Components/Header";
import { Alumni } from "../Components/Home/Alumni";
import { Content } from "../Components/Home/Content";
import { Statistic } from "../Components/Home/Statistics";
import { Footer } from "../Components/Footer";
export default function Dashboard () {
    return(
      <>       
        <Nav/>
        <Header/>
        <Statistic/>
        <Content/>
        <Alumni/>
        <Footer />
      </>
    );
}