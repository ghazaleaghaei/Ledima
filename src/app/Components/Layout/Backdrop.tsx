import React from "react";

interface BackdropProps {
    click: () => void;
}

const Backdrop: React.FC<BackdropProps> = ({ click }) => {

    return <>
        <div
            onClick={click}
            className="w-screen h-screen fixed top-0 start-0 bg-gray-700/80 z-40"></div>
    </>
}

export default Backdrop
