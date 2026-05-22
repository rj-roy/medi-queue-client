import FooterC from "../components/shared/FooterC";
import NavBar from "../components/shared/NavBar";

export default function AuthLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <div className="grow">
                {children}
            </div>
            <FooterC />
        </div>
    )
}