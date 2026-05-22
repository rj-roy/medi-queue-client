import { getBookings } from "@/lib/getData";
import NavBar from "../components/shared/NavBar";
import FooterC from "../components/shared/FooterC";

export default async function MainLayout({ children }) {
    const bookingData = await getBookings();
    return (
        <div>
            <NavBar bookingData={bookingData} />
            {children}
            <FooterC/>
        </div>
    )
}