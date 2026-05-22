import { Pencil, Trash2, User } from "lucide-react";
import { Suspense } from "react";
import BookedSessionLoader from "./BookedSessionLoader";
import Image from "next/image";
import { DeleteAlertDialog } from "../DeleteAlertDialogue";
import EditUserDialogue from "../EditUserDialogue";
import Link from "next/link";

const MyTutorsCard = ({ tutors, userId, deleteTutors, filtered }) => {
    const url = "/my-tutors"

    const isImageByExtension = (url) => {
        if (!url) return false;
        return /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(url);
    };

    return (
        filtered.map((tutor, index) => {
            const isValidImage =
                tutor?.photo &&
                tutor?.photo?.startsWith("http") &&
                isImageByExtension(tutor?.photo);
            const id = tutor?._id

            return (
                <Suspense key={index} fallback={<BookedSessionLoader />}>
                    <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-700">
                                    {
                                        !isValidImage ? (
                                            <User size={50} className='text-secondary' />
                                        ) :
                                            <Image
                                                src={tutor?.photo}
                                                height={50}
                                                width={50}
                                                loading="eager"
                                                alt="tutor.tutorName"
                                                className="rounded-full"
                                            />
                                    }

                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">{tutor?.tutorName}</p>
                                    <p className="text-sm text-gray-500">{tutor?.institutionExperience}</p>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                            {tutor.subject}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                            {tutor.institutionExperience}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            {tutor.hourlyFee}
                        </td>
                        <td className="px-6 py-4">
                            {/* <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${tutor.status === "Active"
                            ? "bg-primary/30 text-teal-800"
                            : "bg-gray-100 text-gray-600"
                            }`}>
                            {tutor.status}
                        </span> */}
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border bg-amber-50 text-amber-700 border-amber-200`}>
                                Pending
                            </span>
                        </td>
                        <td className="px-6 py-4 text-right flex items-center justify-end gap-2">
                            <div>
                                <Link href={`/my-tutors/edit/${id}`} className="p-1.5 hover:bg-gray-100 rounded transition-colors">
                                    <Pencil className="w-4 h-4 text-gray-500" />
                                </Link>
                            </div>
                            {/* <EditUserDialogue/> */}
                            <DeleteAlertDialog id={id} whereToDelete={deleteTutors} url={url} />
                        </td>
                    </tr>
                </Suspense>

            )
        })
    );
};

export default MyTutorsCard;