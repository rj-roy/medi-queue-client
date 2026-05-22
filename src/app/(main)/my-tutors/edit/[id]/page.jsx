import EditUserDialogue from "@/app/components/EditUserDialogue";
import { updateUserAction } from "@/lib/actions";
import { getAllTuros } from "@/lib/getData";

const EditUser = async ({ params }) => {
    const { id } = await params;
    const allTutors = await getAllTuros();

    const filteredTutor = allTutors?.find(b => b?._id === id);

    return (
        !filteredTutor ?
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-red-600">Tutor Not Found</h1>
                    <p className="text-gray-600 mt-2">No tutor profile exists for this ID</p>
                </div>
            </div>
            : 
            <div>
                <EditUserDialogue paramsId={id} tutorData={filteredTutor} updateUserAction={updateUserAction} />
            </div>
    );
};

export default EditUser;