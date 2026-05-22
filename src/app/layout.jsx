import FooterC from "./components/shared/FooterC";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="flex flex-col min-h-screen">
        <main className="grow">
          {children}
        </main>
        <FooterC />
      </body>
    </html>
  );
}
