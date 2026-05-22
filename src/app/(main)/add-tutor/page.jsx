import FormSubmit from "@/app/components/tutors/FormSubmit";
import { addTutorAction } from "@/lib/actions";

export const metadata = {
    title: 'Medi Vibe Tutors | Add Tutors',
    description: 'Generate Your Tutor Profile',
};


const AddTutor = () => {
    return (
        <div>
            <FormSubmit addTutorAction={addTutorAction} />            
        </div>
    );
};

export default AddTutor;