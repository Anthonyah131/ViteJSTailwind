import { useState } from 'react';

function DataBinding() {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div className="flex flex-col items-center mt-4">
            <label htmlFor="text" className="mb-2">Data Binding</label>
            <input
                type="text"
                id="text"
                value={text}
                onChange={handleChange}
                placeholder="Please enter text"
                className="mt-2 border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
            <span className="mt-2">{text}</span>
        </div>
    );
}

export default DataBinding;
