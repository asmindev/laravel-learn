import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
export default function ModalLayout({ closeModal, children }) {
    return (
        <div className="fixed z-[99999999] inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen text-center sm:block">
                <div
                    className="fixed inset-0 transition-opacity backdrop-blur-xl"
                    aria-hidden="true"
                >
                    <motion.div
                        initial={{ opacity: 0, width: 0, height: 0 }}
                        animate={{
                            opacity: 0.75,
                            width: '100%',
                            height: '100%',
                        }}
                        exit={{ opacity: 0, width: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0"
                    />
                    <div className="transform w-full h-full">
                        <AnimatePresence mode="wait">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 50 }}
                                transition={{ duration: 0.4 }}
                                className="w-full h-full transform flex items-center justify-center"
                            >
                                {children}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    )
}
