'use client'
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
    User,
    BookOpen,
    DollarSign,
    Calendar,
    Link as LinkIcon,
    Clock,
    ChevronDown,
    Plus,
    Trash2,
    MapPin,
    Building2,
    Monitor
} from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { getAllTuros } from '@/lib/getData';
import { toast, ToastContainer } from 'react-toastify';

const FormSubmit = ({ addTutorAction }) => {
    const { register, handleSubmit, control, watch, setValue, formState: { errors } } = useForm({
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

    const [timeSlots, setTimeSlots] = useState([
        { id: 1, startTime: '', endTime: '' }
    ]);
    const watchDays = watch('availableDays');
    const watchMode = watch('teachingMode');
    const subjects = [
        'Mathematics',
        'Physics',
        'Chemistry',
        'Biology',
        'English',
        'Bangla',
        'General Science',
        'Higher Math',
        'Accounting',
        'Business Studies',
        'Economics',
        'History',
        'Geography',
        'ICT',
        'Religious Studies',
        'Drawing & Painting',
        'Music',
        'Physical Education'
    ];
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
    const formatTime = (time24) => {
        if (!time24) return '';
        const [hours, minutes] = time24.split(':');
        const h = parseInt(hours);
        const period = h >= 12 ? 'PM' : 'AM';
        const h12 = h % 12 || 12;
        return `${h12}:${minutes} ${period}`;
    };

    const { data: session, error } = authClient.useSession();
    const submittedUser = session?.user;
    const router = useRouter();

    const onSubmit = async (data) => {
        const getSubmittedData = await getAllTuros();

        const tutor = {
            tutorName: data.tutorName,
            photo: data.photo,
            subject: data.subject,
            availableDays: data.availableDays,
            timeSlot: data.timeSlot,
            totalSlot: data.totalSlot,
            hourlyFee: Number(data.hourlyFee),
            sessionStartDate: data.sessionStartDate,
            institutionExperience: data.institutionExperience,
            location: data.location,
            teachingMode: data.teachingMode,
            submittedUser: submittedUser,
        };

        const isAlreadySubmitted = getSubmittedData?.find(b =>b?.submittedUser?.id === submittedUser?.id);
        if (getSubmittedData) {
            if (isAlreadySubmitted) {
                toast.error("You Already Submitted, Please wait for the response from stutents...")
                return;
            } if (!isAlreadySubmitted) {
                addTutorAction(tutor);
                toast.success("Tutor Added");
                router.push('/tutors')
            };
        };

    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
            <ToastContainer />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-10">
                    <h1 className="text-4xl font-bold text-slate-900 mb-3">
                        Add New Tutor
                    </h1>
                    <p className="text-slate-600 text-lg">
                        Fill in the details below to create a new tutor profile
                    </p>
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
                        <button
                            type="button"
                            className="px-6 py-3 bg-white border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors shadow-sm"
                        >
                            Save Draft
                        </button>
                        <button
                            type="submit"
                            className="px-8 py-3 bg-secondary text-white font-medium rounded-lg hover:bg-secondary transition-colors shadow-lg shadow-blue-700/20"
                        >
                            Publish Tutor Profile
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormSubmit;