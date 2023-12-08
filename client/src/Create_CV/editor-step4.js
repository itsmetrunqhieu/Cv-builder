import React, { useEffect, useState } from 'react';
import { useQuill } from 'react-quilljs';
import 'react-quill/dist/quill.snow.css';
import './editor.css'; 

const Editor4 = ({ onValueChange }) => {
    const { quill, quillRef } = useQuill();
    const [isPlaceholderVisible, setPlaceholderVisible] = useState(true);
    const items = ['Excellent in Communication', 'Good Telephone Etiquette', '…'];

    useEffect(() => {
        if (quill && quillRef.current && quillRef.current.firstChild) {
            quill.on('text-change', () => {
                const editorContent = quillRef.current.firstChild.innerHTML;
                console.log(editorContent);
                onValueChange(editorContent);

                // Check if content is empty to toggle placeholder visibility
                setPlaceholderVisible(editorContent.trim() === '');
            });
        }
    }, [quill, onValueChange, quillRef]);

    return (
        <div>
            <div className="editor-container">
                {isPlaceholderVisible && (
                    <div className="placeholder">
                        <p>Type your skills here. It is better if you break it into bullet points.</p>
                        <p>E.g.</p>
                        <ul style={{ listStyleType: 'disc' }}>
                            {items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <div ref={quillRef} className="editor-content" />
            </div>
        </div>
    );
};

export default Editor4;
