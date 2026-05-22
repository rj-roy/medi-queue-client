import { getBookings } from "@/lib/getData";
import FooterC from "./components/shared/FooterC";
import NavBar from "./components/shared/NavBar";
import "./globals.css";

export default async function RootLayout({ children }) {
  let bookingData = [];
  
  try {
    bookingData = await getBookings();
  } catch (error) {
    //
  }

  return (
    <html>
      <body className="flex flex-col min-h-screen">
        <NavBar bookingData={bookingData} />
        <main className="grow">
          {children}
        </main>
        <FooterC />
      </body>
    </html>
  );
}
