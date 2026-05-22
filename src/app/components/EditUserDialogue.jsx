'use client'
import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { User, BookOpen, DollarSign, Calendar, Link as LinkIcon, Clock, ChevronDown, Plus, Trash2, MapPin, Building2, Monitor, Pencil } from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import { useTimeSlots } from '@/app/hooks/useTimeSlots';
import Link from 'next/link';

const EditUserDialogue = ({ paramsId, tutorData, updateUserAction }) => {
    const { register, handleSubmit, control, watch, setValue, formState: { errors } } = useForm(
        {
            defaultValues: {
                tutorName: '',
                photo: '',
                subject: '',
                availableDays: '',
                timeSlot: {},
                totalSlot: 1,
                hourlyFee: '',
                sessionStartDate: '',
                institutionExperience: '',
                location: '',
                teachingMode: ''
            }
        });

    const { timeSlots, setTimeSlots, addTimeSlot, removeTimeSlot, updateTimeSlot, formatTime } = useTimeSlots(setValue);

    const watchDays = watch('availableDays');
    const watchMode = watch('teachingMode');

    const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Bangla', 'General Science', 'Higher Math', 'Accounting', 'Business Studies', 'Economics', 'History', 'ICT', 'Religious Studies', 'Drawing & Painting', 'Music', 'Physical Education'];
    const teachingModes = ['Online', 'Offline', 'Both'];
    const daysOptions = [
        { label: 'Sat - Thu', value: 'Sat - Thu' },
        { label: 'Sun - Thu', value: 'Sun - Thu' },
        { label: 'Sat - Wed', value: 'Sat - Wed' },
        { label: 'Daily', value: 'Daily' },
        { label: 'Weekends Only', value: 'Weekends Only' },
        { label: 'Weekdays Only', value: 'Weekdays Only' },
        { label: 'Custom', value: 'Custom' }
    ];

    const { data: session, error } = authClient.useSession();

    useEffect(() => {
        if (tutorData) {
            setValue('tutorName', tutorData?.tutorName || '');
            setValue('photo', tutorData?.photo || '');
            setValue('subject', tutorData?.subject || '');
            setValue('availableDays', tutorData?.availableDays || '');
            setValue('hourlyFee', tutorData?.hourlyFee || '');
            setValue('sessionStartDate', tutorData?.sessionStartDate || '');
            setValue('institutionExperience', tutorData?.institutionExperience || '');
            setValue('location', tutorData?.location || '');
            setValue('teachingMode', tutorData?.teachingMode || '');
            setValue('totalSlot', tutorData?.totalSlot || 1);
            
            if (tutorData?.timeSlot && Object.keys(tutorData.timeSlot).length > 0) {
                const slots = [];
                Object.entries(tutorData.timeSlot).forEach(([key, value]) => {
                    const idx = parseInt(key.split('_')[1]);
                    if (value) {
                        const [startTime, endTime] = value.split(' - ').map(time => {
                            let [timePart, period] = time.trim().split(' ');
                            let [hours, minutes] = timePart.split(':');
                            hours = parseInt(hours);
                            if (period === 'PM' && hours !== 12) hours += 12;
                            if (period === 'AM' && hours === 12) hours = 0;
                            return `${String(hours).padStart(2, '0')}:${minutes}`;
                        });
                        slots.push({ id: idx, startTime, endTime });
                    }
                });
                if (slots.length > 0) {
                    setTimeSlots(slots);
                    setValue('timeSlot', tutorData.timeSlot);
                }
            }
        }
    }, [tutorData, setValue, setTimeSlots]);
    


    const router = useRouter();
    const onSubmit = async (data) => {
        try {
            const result = await updateUserAction(paramsId, data);
            
            if (result.modifiedCount > 0) {
                toast.success('Tutor updated successfully!');
                setTimeout(() => {
                    router.push('/my-tutors');
                }, 1500);
            } else if (result.modifiedCount === 0) {
                toast.info('No changes were made');
            } else {
                toast.error('Failed to update tutor');
            }
        } catch (error) {
            console.error('Error updating tutor:', error);
            toast.error('Error updating tutor: ' + error.message);
        }
    };



    return (
        <>
            <div className="bg-slate-50 font-sans text-slate-900 pb-20">
                <ToastContainer />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="mb-10">
                        <h1 className="text-4xl font-bold text-slate-900 mb-3">
                            Edit Your Information
                        </h1>
                        {/* <p className="text-slate-600 text-lg">
                            Fill in the details below to create a new tutor profile
                        </p> */}
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                            <div className="p-6 border-b border-slate-100">
                                <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                                    <User className="w-5 h-5 text-slate-500" />
                                    Basic Information
                                </h2>
                            </div>
                            <div className="p-6 space-y-6">
                                <div>
                                    <label htmlFor="tutorName" className="block text-sm font-medium text-slate-700 mb-2">
                                        Tutor Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="tutorName"
                                        placeholder="Enter full name"
                                        required
                                        {...register('tutorName', { required: 'Tutor name is required' })}
                                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                        data-metadata="personal-info"
                                    />
                                    {errors.tutorName && <p className="text-red-500 text-sm mt-1">{errors.tutorName.message}</p>}
                                </div>
                                <div>
                                    <label htmlFor="photo" className="block text-sm font-medium text-slate-700 mb-2">
                                        Photo URL (ImgBB)
                                    </label>
                                    <div className="relative">
                                        <LinkIcon className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                                        <input
                                            type="url"
                                            id="photo"
                                            placeholder="https://i.ibb.co/your-image.jpg"
                                            {...register('photo')}
                                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                            data-metadata="image-info"
                                        />
                                    </div>
                                    <p className="text-sm text-slate-500 mt-1">
                                        Upload your photo to <a href="https://imgbb.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ImgBB</a> and paste the direct link here
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                                            Subject / Category <span className="text-red-500">*</span>
                                        </label>
                                        <Controller
                                            name="subject"
                                            control={control}
                                            rules={{ required: 'Subject is required' }}
                                            render={({ field }) => (
                                                <div className="relative">
                                                    <select
                                                        id="subject"
                                                        {...field}
                                                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                                        data-metadata="subject-info"
                                                    >
                                                        <option value="">Select subject</option>
                                                        {subjects.map((subject) => (
                                                            <option key={subject} value={subject}>
                                                                {subject}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <ChevronDown className="absolute right-3 top-3 w-5 h-5 text-slate-400 pointer-events-none" />
                                                </div>
                                            )}
                                        />
                                        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="teachingMode" className="block text-sm font-medium text-slate-700 mb-2">
                                            Teaching Mode <span className="text-red-500">*</span>
                                        </label>
                                        <Controller
                                            name="teachingMode"
                                            control={control}
                                            rules={{ required: 'Teaching mode is required' }}
                                            render={({ field }) => (
                                                <div className="relative">
                                                    <Monitor className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                                                    <select
                                                        id="teachingMode"
                                                        {...field}
                                                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                                        data-metadata="mode-info"
                                                    >
                                                        <option value="">Select mode</option>
                                                        {teachingModes.map((mode) => (
                                                            <option key={mode} value={mode}>
                                                                {mode}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <ChevronDown className="absolute right-3 top-3 w-5 h-5 text-slate-400 pointer-events-none" />
                                                </div>
                                            )}
                                        />
                                        {errors.teachingMode && <p className="text-red-500 text-sm mt-1">{errors.teachingMode.message}</p>}
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="institutionExperience" className="block text-sm font-medium text-slate-700 mb-2">
                                            Institution & Experience
                                        </label>
                                        <div className="relative">
                                            <Building2 className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                                            <input
                                                type="text"
                                                id="institutionExperience"
                                                placeholder="e.g. Dhaka University, 5 years"
                                                {...register('institutionExperience')}
                                                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                                data-metadata="professional-info"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="location" className="block text-sm font-medium text-slate-700 mb-2">
                                            Location (Area/City)
                                        </label>
                                        <div className="relative">
                                            <MapPin className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                                            <input
                                                type="text"
                                                id="location"
                                                placeholder="e.g. Dhanmondi, Dhaka"
                                                {...register('location')}
                                                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                                data-metadata="location-info"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                            <div className="p-6 border-b border-slate-100">
                                <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                                    <Calendar className="w-5 h-5 text-slate-500" />
                                    Availability
                                </h2>
                            </div>
                            <div className="p-6 space-y-4">
                                <p className="text-sm text-slate-600 mb-4">
                                    Select your available days and add time slots. At least one slot is required.
                                </p>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        Available Days <span className="text-red-500">*</span>
                                    </label>
                                    <Controller
                                        name="availableDays"
                                        control={control}
                                        rules={{ required: 'Available days are required' }}
                                        render={({ field }) => (
                                            <div className="relative">
                                                <select
                                                    {...field}
                                                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                                >
                                                    <option value="">Select days</option>
                                                    {daysOptions.map((day) => (
                                                        <option key={day.value} value={day.value}>
                                                            {day.label}
                                                        </option>
                                                    ))}
                                                </select>
                                                <ChevronDown className="absolute right-3 top-3 w-5 h-5 text-slate-400 pointer-events-none" />
                                            </div>
                                        )}
                                    />
                                    {errors.availableDays && <p className="text-red-500 text-sm mt-1">{errors.availableDays.message}</p>}
                                </div>

                                <div className="space-y-4">
                                    <label className="block text-sm font-medium text-slate-700">
                                        Time Slots <span className="text-red-500">*</span>
                                    </label>

                                    {timeSlots.map((slot, index) => (
                                        <div key={slot.id} className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-4">
                                            <div className="flex items-center justify-between">
                                                <h3 className="font-medium text-slate-900">Slot {index + 1}</h3>
                                                {timeSlots.length > 1 && (
                                                    <button
                                                        type="button"
                                                        onClick={() => removeTimeSlot(slot.id)}
                                                        className="text-red-600 hover:text-red-800 p-1 hover:bg-red-50 rounded transition-colors"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                )}
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                                        Start Time
                                                    </label>
                                                    <div className="relative">
                                                        <Clock className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                                                        <input
                                                            type="time"
                                                            value={slot.startTime}
                                                            onChange={(e) => updateTimeSlot(slot.id, 'startTime', e.target.value)}
                                                            className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm"
                                                            required={index === 0}
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                                        End Time
                                                    </label>
                                                    <div className="relative">
                                                        <Clock className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                                                        <input
                                                            type="time"
                                                            value={slot.endTime}
                                                            onChange={(e) => updateTimeSlot(slot.id, 'endTime', e.target.value)}
                                                            className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm"
                                                            required={index === 0}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {slot.startTime && slot.endTime && (
                                                <p className="text-sm text-slate-600 bg-blue-50 px-3 py-2 rounded">
                                                    Preview: {formatTime(slot.startTime)} - {formatTime(slot.endTime)}
                                                </p>
                                            )}
                                        </div>
                                    ))}

                                    <button
                                        type="button"
                                        onClick={addTimeSlot}
                                        className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                                    >
                                        <Plus className="w-4 h-4" />
                                        Add Another Time Slot
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                            <div className="p-6 border-b border-slate-100">
                                <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                                    <DollarSign className="w-5 h-5 text-slate-500" />
                                    Pricing & Schedule
                                </h2>
                            </div>
                            <div className="p-6 space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div>
                                        <label htmlFor="hourlyFee" className="block text-sm font-medium text-slate-700 mb-2">
                                            Hourly Fee (BDT) <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-2.5 text-slate-500">৳</span>
                                            <input
                                                type="number"
                                                id="hourlyFee"
                                                placeholder="500"
                                                min="0"
                                                step="50"
                                                required
                                                {...register('hourlyFee', {
                                                    required: 'Hourly fee is required',
                                                    valueAsNumber: true
                                                })}
                                                className="w-full pl-8 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                                data-metadata="pricing-info"
                                            />
                                        </div>
                                        {errors.hourlyFee && <p className="text-red-500 text-sm mt-1">{errors.hourlyFee.message}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="totalSlot" className="block text-sm font-medium text-slate-700 mb-2">
                                            Total Slots <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="number"
                                            id="totalSlot"
                                            placeholder="10"
                                            min="1"
                                            max="100"
                                            disabled
                                            {...register('totalSlot', {
                                                required: 'Total slots required',
                                                valueAsNumber: true,
                                                min: { value: 1, message: 'Minimum 1 slot' }
                                            })}
                                            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                            data-metadata="capacity-info"
                                        />
                                        {errors.totalSlot && <p className="text-red-500 text-sm mt-1">{errors.totalSlot.message}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="sessionStartDate" className="block text-sm font-medium text-slate-700 mb-2">
                                            Session Start Date <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <Calendar className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                                            <input
                                                type="date"
                                                id="sessionStartDate"
                                                required
                                                {...register('sessionStartDate', { required: 'Start date is required' })}
                                                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                                data-metadata="schedule-info"
                                            />
                                        </div>
                                        {errors.sessionStartDate && <p className="text-red-500 text-sm mt-1">{errors.sessionStartDate.message}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end gap-4 pt-4">
                            <Link href={'/my-tutors'}
                                type="button"
                                className="px-6 py-3 bg-white border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors shadow-sm"
                            >
                                Cancel
                            </Link>
                            <button
                                type="submit"
                                className="px-8 py-3 bg-secondary text-white font-medium rounded-lg hover:bg-secondary transition-colors shadow-lg shadow-blue-700/20"
                            >
                                Edit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>

    );
};

export default EditUserDialogue;