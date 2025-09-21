import React from 'react';
import Button from './Button';

const ConfirmDialog = ({ isOpen, title, message, onConfirm, onCancel }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-700 mb-6">{message}</p>

                <div className="flex justify-end space-x-2">
                    <Button
                        variant="outline"
                        onClick={onCancel}
                    >
                        Cancelar
                    </Button>
                    <Button
                        variant="danger"
                        onClick={onConfirm}
                    >
                        Confirmar
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDialog;