import { Head, Link } from '@inertiajs/react'
import { AnimatePresence, motion } from 'framer-motion'
import Sidebar from './Navigation/Sidebar'
import Topbar from './Navigation/Topbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Layouts({ children, user, title = 'Dashboard' }) {
    const variants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        },
        exit: {
            opacity: 0,
        },
    }

    return (
        <>
            <Head title={title} />
            <ToastContainer />
            <div className="w-full h-full flex flex-col md:flex-row">
                <Sidebar user={user} />
                <main className="w-full">
                    <Topbar user={user} />
                    <AnimatePresence mode="wait">
                        <motion.main
                            variants={variants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.5 }}
                            className="w-full h-full mt-20 md:mt-0 flex-1 basis-full"
                        >
                            {children}
                        </motion.main>
                    </AnimatePresence>
                </main>
            </div>
        </>
    )
}
