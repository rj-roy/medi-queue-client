import { revalidatePath } from "next/cache";

export const bookingSubmiteAction = async (bookingData) => {
    'use server'
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(bookingData),
    });
    const data = await res.json();
    if (data.insertedId) {
        revalidatePath('/tutors')
    };
    return data;
};

export const addTutorAction = async (tutorData) => {
    'use server'
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(tutorData),
    });
    const data = await res.json();
    console.log(data);
    if(data.insertedId){
        revalidatePath('/tutors')
    };
    return data;
};