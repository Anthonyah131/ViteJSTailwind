import { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentState = () => {
    const [text, setText] = useState('Default text');

    const updateText = () => {
        setText('Text updated!');
    };

    return (
        <div className="flex flex-col items-center">
            <div className="box-wrapper">
                <h1>{text}</h1>
                <ChildComponent updateText={updateText} />
            </div>
        </div>
    );
};

export default ParentState;
