import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import React from 'react';

interface ConfirmationModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  text: string;
  option?: string;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onConfirm,
  onCancel,
  text,
  option
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-[100]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onCancel}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md bg-slate-800/90 backdrop-blur-md 
              rounded-lg shadow-2xl p-6 border border-slate-700
              transform transition-all duration-200"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-full bg-green-500/20">
                <AlertCircle className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Confirmation</h3>
            </div>
            
            <p className="text-slate-300 mb-6">
              {text}
              <br />
              <span className="text-green-400 font-medium mt-2 block">
                {option}
              </span>
            </p>
            
            <div className="flex justify-end gap-3">
              <button
                onClick={onCancel}
                className="px-4 py-2 rounded-md text-slate-300 
                  hover:bg-slate-700/50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={onConfirm}
                className="px-4 py-2 rounded-md bg-green-500 text-white
                  hover:bg-green-600 transition-colors"
              >
                Confirm
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default ConfirmationModal;