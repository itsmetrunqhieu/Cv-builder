import React, { useEffect, useState } from 'react';
import { useQuill } from 'react-quilljs';
import 'react-quill/dist/quill.snow.css';
import './editor.css'; 

const Editor5 = ({ onValueChange }) => {
    const { quill, quillRef } = useQuill();
    const [isPlaceholderVisible, setPlaceholderVisible] = useState(true);

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
                        <p>Write your summary here...</p>
                    </div>
                )}
                <div ref={quillRef} className="editor-content" />
            </div>
        </div>
    );
};

export default Editor5;
