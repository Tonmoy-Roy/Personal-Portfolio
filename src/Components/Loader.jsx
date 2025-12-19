import React from 'react';

const Loader = () => {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#2d2d2d] z-50">
            <div className="relative flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-4 border-transparent border-t-blue-500 border-r-purple-500 animate-spin"></div>
                <div className="absolute w-3 h-3 bg-white rounded-full animate-pulse"></div>
            </div>
            <p className="mt-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-bold tracking-widest animate-pulse">
                PROCESSING
            </p>
        </div>
    );
};

export default Loader;