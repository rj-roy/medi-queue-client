import HeroSec from "../components/home/HeroSec";
import WhyChoose from "../components/home/WhyChoose";

export const metadata = {
    title: 'Medi Vibe Tutors | Premier Online & In-Home Booking',
    description: 'Find and book highly qualified tutors instantly on Medi Vibe Tutors. Whether you need academic support in Rajshahi or remote classes, connect with top-rated educators tailored to your learning needs. Choose your subject and schedule your class now.',
};

const HomePage = () => {
    return (
        <div>
            <HeroSec/>
            <WhyChoose/>
        </div>
    );
};

export default HomePage;