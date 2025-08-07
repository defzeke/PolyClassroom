import React from 'react';

interface ModalProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}

export default function Terms({ open, onClose, title, children }: ModalProps) {
    if (!open) return null;
    return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/20">
        <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative max-h-[90vh] overflow-y-auto">
            <button
            className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 cursor-pointer"
            onClick={onClose}
            >
            ×
            </button>
            {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
            <div>{children}</div>
        </div>
    </div>
    );
}