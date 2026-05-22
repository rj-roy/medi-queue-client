import { getBookings } from "@/lib/getData";
import NavBar from "../components/shared/NavBar";
import FooterC from "../components/shared/FooterC";

export default async function MainLayout({ children }) {
    const bookingData = await getBookings();
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar bookingData={bookingData} />
            <div className="grow relative">
                {children}
            </div>
            <FooterC />
        </div>
    )
}