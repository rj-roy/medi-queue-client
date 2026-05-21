export default function CardSkeleton() {
  return (
    <div className="border rounded-xl overflow-hidden animate-pulse my-10">
      <div className="h-56 bg-gray-300" />

      <div className="p-4 space-y-3">
        <div className="h-6 bg-gray-300 rounded w-2/3" />

        <div className="h-4 bg-gray-300 rounded w-1/3" />

        <div className="h-4 bg-gray-300 rounded" />
        <div className="h-4 bg-gray-300 rounded" />

        <div className="h-10 bg-gray-300 rounded w-24" />
      </div>
    </div>
  );
}