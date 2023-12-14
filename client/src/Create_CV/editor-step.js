import React, { useEffect, useState } from 'react';
import { useQuill } from 'react-quilljs';
import 'react-quill/dist/quill.snow.css';
import './editor.css'; 

const Editor = ({ onValueChange, currentStep }) => {

    const { quill, quillRef } = useQuill();
    const [isPlaceholderVisible, setPlaceholderVisible] = useState(true);
    const items_step4 = ['Excellent in Communication', 'Good Telephone Etiquette', '…'];

    useEffect(() => {
        if (quill && quillRef.current && quillRef.current.firstChild) {
            quill.on('text-change', () => {
                const editorContent = quillRef.current.firstChild.innerHTML;
                // console.log(editorContent);
                onValueChange(editorContent);

                // Check if content is empty to toggle placeholder visibility
                setPlaceholderVisible(editorContent.trim() === '');
            });
        }
    }, [quill, onValueChange, quillRef]);

    return (
        <div>
            <div className={`editor-container ${currentStep === 2 ? 'editor-container-step2' : ''}`}>
                {isPlaceholderVisible && (
                    <div className={`placeholder ${currentStep === 2 ? 'placeholder-step2' : ''}`}>
                        {currentStep === 2 && 
                            <div>
                                <p>Write your job description here...</p>
                            </div> 
                        }
                        {currentStep === 4 && 
                            <div>
                                <p>Type your skills here. It is better if you break it into bullet points.</p>
                                <p>E.g.</p>
                                <ul style={{ listStyleType: 'disc' }}>
                                    {items_step4.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div> 
                        }
                        {currentStep === 5 && 
                            <div>
                                <p>Write your summary here...</p>
                            </div> 
                        }
                    </div>
                )}
                <div ref={quillRef} className="editor-content" />
            </div>
        </div>
    );
};

export default Editor;
