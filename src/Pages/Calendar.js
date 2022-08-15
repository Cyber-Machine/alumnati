import { Nav } from "../Components/Nav";
import { Footer } from "../Components/Footer";
import CalendarModule from "../Components/CalendarModule";

export default function Calendar() {
    return(
      <>       
        <Nav/>
        <CalendarModule />
        <Footer />
      </>
    );
}