import FormSubmit from "@/app/components/tutors/FormSubmit";
import { addTutorAction } from "@/lib/actions";

const AddTutor = () => {
    return (
        <div>
            <FormSubmit addTutorAction={addTutorAction} />            
        </div>
    );
};

export default AddTutor;