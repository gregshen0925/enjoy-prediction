import dynamic from "next/dynamic";
import { FC, ReactNode, Suspense } from "react";
import { Toaster } from 'react-hot-toast';

const toastOptions = {
    style: {
        background: "rgb(0, 0, 0)",
        color: "white",
    },
    success: {
        className: "border border-green-500",
        iconTheme: {
            primary: "#10B981",
            secondary: "white",
        },
    },
    error: {
        className: "border border-red-500",
        iconTheme: {
            primary: "#EF4444",
            secondary: "white",
        },
    },
    loading: { className: "border border-yello-300" },
};


const Header = dynamic(() => import("./Header"), { suspense: true });
const NavigationTab = dynamic(() => import("./NavigationTab"), { suspense: true });
interface Props {
    children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <div className="h-screen snap-y overflow-y-scroll bg-black">
            <Toaster position="bottom-right" toastOptions={toastOptions} />
            <Suspense fallback={<div className="flex h-screen w-full justify-center items-center">
            </div>}>
                <div className=' min-h-screen flex flex-col items-center'>
                    <Header />
                    {children}
                </div>
                <div className='sticky inset-x-0 bottom-0 items-center justify-center flex '>
                    <NavigationTab />
                </div>
            </Suspense>
        </div>

    );
};

export default Layout;
