const BookedSessionLoader = () => {
    return (
        <tr className="animate-pulse">
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-200 mr-3 shrink-0" />
                    <div className="h-4 w-28 bg-gray-200 rounded" />
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="h-4 w-20 bg-gray-200 rounded" />
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="h-4 w-24 bg-gray-200 rounded" />
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="space-y-2">
                    <div className="h-4 w-28 bg-gray-200 rounded" />
                    <div className="h-3 w-16 bg-gray-200 rounded" />
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="h-5 w-16 bg-amber-100 rounded-full" />
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right">
                <div className="h-8 w-8 bg-gray-200 rounded ml-auto" />
            </td>
        </tr>
    );
};

export default BookedSessionLoader;