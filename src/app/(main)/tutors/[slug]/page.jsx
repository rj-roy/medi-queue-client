import CardSkeleton from "@/app/components/ui/CardSkeleton";
import DetailsCard from "@/app/components/ui/DetailsCard";
import { getAllTuros } from "@/lib/getData";
import { Suspense } from "react";

const TutorDetails = async ({ params }) => {
    let { slug } = await params;

    return (
        <div className="w-full max-w-5xl mx-auto">
            <Suspense fallback={<CardSkeleton />}>
                <DetailsCard slug={slug} />
            </Suspense>
        </div>
    );
};

export default TutorDetails;