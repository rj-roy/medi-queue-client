import { getAllTuros } from "@/lib/getData";
import HeroSec from "../components/home/HeroSec";
import WhyChoose from "../components/home/WhyChoose";
import FeaturedTutors from "../components/home/FeaturedTutors";
import SuccessStories from "../components/home/SuccessStories";
import NewsletterS from "../components/home/NewsLater";

export const metadata = {
    title: 'Medi Vibe Tutors | Premier Online & Tutor Booking',
    description: 'Find and book highly qualified tutors instantly on Medi Vibe Tutors. Whether you need academic support in Rajshahi or remote classes, connect with top-rated educators tailored to your learning needs. Choose your subject and schedule your class now.',
};

const HomePage = async () => {
    const tutors = await getAllTuros();

    return (
        <div>
            <HeroSec/>
            <WhyChoose/>
            <FeaturedTutors tutors={tutors}/>
            <SuccessStories/>
            <NewsletterS/>
        </div>
    );
};

export default HomePage;