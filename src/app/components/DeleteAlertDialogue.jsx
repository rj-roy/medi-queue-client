'use client';
import { BellRing } from 'lucide-react';
import { useState } from 'react';

export function DeleteAlertDialog() {
  const [isOpen, setIsOpen] = useState(false);

  const handleConfirm = () => {
    setIsOpen(false);
    console.log("object");
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 rounded-lg bg-secondary text-white font-medium hover:bg-opacity-90 transition-colors"
      >
        Delete
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-secondary/10 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-4">
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-red-100 p-3">
                <BellRing/>
              </div>
            </div>

            <h2 className="text-center text-xl font-semibold text-gray-900 mb-2">
              Are you sure?
            </h2>

            <p className="text-center text-gray-600 text-sm mb-6 text-wrap">
              This action cannot be undone. Please confirm to proceed.
            </p>

            <div className="flex gap-3">
              <button
                onClick={()=>setIsOpen(false)}
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="flex-1 px-4 py-2 rounded-lg bg-secondary text-white font-medium hover:bg-opacity-90 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}