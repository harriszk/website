import React from "react";
import { useState } from "react";

interface Props {
    onClick: () => void;
    fallbackText: string;
    icon?: React.ReactNode;
}

const Button = (props: Props) => {
    const [showTooltip, setShowTooltip] = useState<boolean>(false);

    return (
        <>
            <button
                onClick={props.onClick}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                className="flex items-center gap-2 px-2 py-1 border rounded hover:bg-gray-100"
            >
                {props.icon ? props.icon : props.fallbackText}
            </button>
            {props.icon && showTooltip && <div>{props.fallbackText}</div>}
        </>
    );
};

export default Button;
