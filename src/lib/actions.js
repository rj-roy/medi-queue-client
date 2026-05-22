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
    if (data.insertedId) {
        revalidatePath('/tutors')
    };
    return data;
};

export const deleteBooking = async (bookedId) => {
    "use server"
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/del/${bookedId}`, {
        method: 'DELETE',
    });
    const data = await res.json();
    if (data.deletedCount < 0) {
        revalidatePath('/my-booked-tutors');
    };
    return data;
};

export const deleteTutors = async (userId) => {
    "use server"
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/del/tutors/${userId}`, {
        method: 'DELETE',
    });
    const data = await res.json();
    console.log(data);
    if (data.deletedCount < 0) {
        revalidatePath('/my-tutors');
    };
    return data;
};


export const updateUserAction = async (userId, formData) => {
    'use server'
    const userUpdate = formData;

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/${userId}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(userUpdate),
    });
    const data = await res.json();
    if (data.modifiedCount > 0) {
        revalidatePath('/my-tutors');
    }
    console.log("after-update", data);
    return data;
};