import { Nav } from "../Components/Nav"
import { Header } from "../Components/Header";
import { Alumni } from "../Components/Alumni";
import { Content } from "../Components/Content";
import { Statistic } from "../Components/Statistics";
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