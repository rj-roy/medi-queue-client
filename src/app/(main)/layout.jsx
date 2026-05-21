import { getBookings } from "@/lib/getData";
import NavBar from "../components/shared/NavBar";

export default async function MainLayout({ children }) {
    const bookingData = await getBookings();
    return (
        <div>
            <NavBar bookingData={bookingData} />
            {children}
        </div>
    )
}