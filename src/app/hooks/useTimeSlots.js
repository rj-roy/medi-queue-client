'use client'
import { useState } from 'react';

export const useTimeSlots = (setValue) => {
    const [timeSlots, setTimeSlots] = useState([
        { id: 1, startTime: '', endTime: '' }
    ]);

    const formatTime = (time24) => {
        if (!time24) return '';
        const [hours, minutes] = time24.split(':');
        const h = parseInt(hours);
        const period = h >= 12 ? 'PM' : 'AM';
        const h12 = h % 12 || 12;
        return `${h12}:${minutes} ${period}`;
    };

    const addTimeSlot = () => {
        const newId = Math.max(...timeSlots.map(s => s.id), 0) + 1;
        setTimeSlots([...timeSlots, { id: newId, startTime: '', endTime: '' }]);
        setValue('totalSlot', timeSlots.length + 1);
    };

    const removeTimeSlot = (id) => {
        if (timeSlots.length > 1) {
            const updated = timeSlots.filter(slot => slot.id !== id);
            setTimeSlots(updated);
            setValue('totalSlot', updated.length);

            const newTimeSlotObj = {};
            updated.forEach((slot, idx) => {
                const slotKey = `slot_${idx + 1}`;
                if (slot.startTime && slot.endTime) {
                    newTimeSlotObj[slotKey] = `${formatTime(slot.startTime)} - ${formatTime(slot.endTime)}`;
                }
            });
            setValue('timeSlot', newTimeSlotObj);
        }
    };

    const updateTimeSlot = (id, field, value) => {
        const updated = timeSlots.map(slot =>
            slot.id === id ? { ...slot, [field]: value } : slot
        );
        setTimeSlots(updated);

        const timeSlotObj = {};
        updated.forEach((slot, idx) => {
            const slotKey = `slot_${idx + 1}`;
            if (slot.startTime && slot.endTime) {
                timeSlotObj[slotKey] = `${formatTime(slot.startTime)} - ${formatTime(slot.endTime)}`;
            }
        });
        setValue('timeSlot', timeSlotObj);
    };

    return {
        timeSlots,
        setTimeSlots,
        addTimeSlot,
        removeTimeSlot,
        updateTimeSlot,
        formatTime
    };
};
