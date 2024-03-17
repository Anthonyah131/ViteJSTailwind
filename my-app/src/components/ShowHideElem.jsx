import { useState } from 'react';

const ShowHideElem = () => {
    const [isHidden, setIsHidden] = useState(false);

    const toggleVisibility = () => {
        setIsHidden(!isHidden);
    };

    return (
        <div className="flex flex-col items-center">
            <button onClick={toggleVisibility} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
                {isHidden ? 'Show div Element' : 'Hide div Element'}
            </button>
            {!isHidden && (
                <div className="bg-gray-200 p-4 mt-4">
                    <p>Im here!.. Att This div</p>
                </div>
            )}
        </div>
    );
};

export default ShowHideElem;
