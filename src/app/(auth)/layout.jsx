import FooterC from "../components/shared/FooterC";
import NavBar from "../components/shared/NavBar";

export default function AuthLayout({ children }) {
    return (
        <div>
            <NavBar/>
            {children}
            <FooterC/>
        </div>
    )
}