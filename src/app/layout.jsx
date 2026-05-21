import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {/* <NavBar /> */}
        {children}
      </body>
    </html>
  );
}
