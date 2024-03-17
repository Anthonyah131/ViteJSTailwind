const ChildComponent = ({ updateText }) => {
    return (
        <button onClick={updateText} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
            Update Text
        </button>
    );
};

export default ChildComponent;
