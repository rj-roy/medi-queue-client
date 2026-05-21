export const getAllTuros = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors`)
    const data = res.json();
    return data;
}
export const getTutorBySlug = async (slug) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/${slug}`);
        if (!res.ok) {
            throw new Error(`Failed to fetch tutor: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching tutor:', error);
        return null;
    }
};

export const getBookings = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`)
    const data = await res.json();
    return data;
};