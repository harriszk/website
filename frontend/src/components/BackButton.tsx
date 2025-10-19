import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <div className="mb-4 mr-4">
            <button
                type="button"
                aria-label="Back"
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 text-sm rounded shadow-sm transition"
            >
                <ArrowLongLeftIcon className="h-4 w-4" />
                <span>Back</span>
            </button>
        </div>
    );
};

export default BackButton;
