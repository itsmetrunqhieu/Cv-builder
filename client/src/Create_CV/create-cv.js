import './create-cv.css';
import './create-cv-options.css';
import '../Login_Screen/Login.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CreateCV() {
    const [currentStep, setCurrentStep] = useState(1);
    const [firstname, setFirstname] = useState('');

    const stepNames = [
        "Heading",
        "Work History",
        "Education",
        "Skills",
        "Summary",
        "Finalize and Review"
    ];

    const handleFirstnameChange = (event) => {
        setFirstname(event.target.value);
    };

    const handleSubmit = () => {
    // Sử dụng username và password ở đây, có thể gửi đến server hoặc xử lý dữ liệu theo cách khác
    };

    const handleStepClick = (step) => {
        setCurrentStep(step);
    };

    const handleNextClick = () => {
        setCurrentStep(currentStep < 6 ? currentStep + 1 : currentStep);
    };

    return (
        <div className="create-cv">
        <div className="create-cv-header">
            <Link to="/">
            <p className="CV-Buider-Name">CV Builder</p>
            </Link>
        </div>
        <div className='create-cv-left-nav'>
            {[1, 2, 3, 4, 5, 6].map(step => (
            <div
                key={step}
                className={`create-cv-step ${currentStep === step ? 'active' : ''}`}
                onClick={() => handleStepClick(step)}
            >
                <p className={'create-cv-order'}>
                {step}
                </p>
                <p className={'create-cv-step-name'}>
                    {stepNames[step - 1]}
                </p>
            </div>
            ))}
        </div>
        <div className='create-cv-content'>
            {currentStep === 1 && 
                <div>
                    <h className='create-cv-content-title'>What’s the best way for employers to contact you?</h>
                    <div className="create-cv-firstname-form-field">
                        <p className='create-cv-form-text'>First Name</p>
                        <input
                            type="text"
                            className="create-cv-form-input"
                            placeholder="e.g. Dung"
                            value={firstname}
                            onChange={handleFirstnameChange}
                        />
                    </div>
                    <div className="create-cv-surname-form-field">
                        <p className='create-cv-form-text'>Surname</p>
                        <input
                            type="text"
                            className="create-cv-form-input"
                            placeholder="e.g. Truong Tri"
                        />
                    </div>
                    <div className="create-cv-profession-form-field">
                        <p className='create-cv-form-text'>Profession</p>
                        <input
                            type="text"
                            className="create-cv-form-input"
                            placeholder="e.g. Jr. Software Developer"
                        />
                    </div>
                    <div className="create-cv-city-form-field">
                        <p className='create-cv-form-text'>City/Municipality</p>
                        <input
                            type="text"
                            className="create-cv-form-input"
                            placeholder="e.g. Ho Chi Minh"
                        />
                    </div>
                    <div className="create-cv-country-form-field">
                        <p className='create-cv-form-text'>Country</p>
                        <input
                            type="text"
                            className="create-cv-form-input"
                            placeholder="e.g. Viet Nam"
                        />
                    </div>
                    <div className="create-cv-postal-code-form-field">
                        <p className='create-cv-form-text'>Postal Code</p>
                        <input
                            type="text"
                            className="create-cv-form-input"
                            placeholder="e.g. 700000"
                        />
                    </div>
                    <div className="create-cv-phone-form-field">
                        <p className='create-cv-form-text'>Phone</p>
                        <input
                            type="text"
                            className="create-cv-form-input"
                            placeholder="e.g. +84769807115"
                        />
                    </div>
                    <div className="create-cv-email-form-field">
                        <p className='create-cv-form-text'>Email</p>
                        <input
                            type="email"
                            className="create-cv-form-input"
                            placeholder="e.g. dungtruong151@gmail.com"
                        />
                    </div>
                    <Link to="/create-cv-options">
                        <div className="create-cv-options-button back-button create-cv-back-button">
                            <img 
                                src='/Image/Create_CV_Options/Arrow_alt_left_alt.svg'
                                className='create-cv-options-icon'
                                alt='icon'
                            />
                            <p className='create-cv-options-button-text create-cv-options-back-button-text'>Back</p>
                        </div>
                    </Link>
                    <div className="create-cv-options-button back-button create-cv-next-button" onClick={handleNextClick}>
                        <img 
                            src='/Image/Create_CV_Options/Arrow_alt_lright_alt.svg'
                            className='create-cv-icon'
                            alt='icon'
                        />
                        <p className='create-cv-options-button-text create-cv-next-button-text'>Next</p>
                    </div>
                </div> 
            }
            {currentStep === 2 && <p>Content for Work History</p>}
            {currentStep === 3 && <p>Content for Education</p>}
            {currentStep === 4 && <p>Content for Skills</p>}
            {currentStep === 5 && <p>Content for Summary</p>}
            {currentStep === 6 && <p>Content for Finalize and Review</p>}
        </div>
        </div>
    );
}

export default CreateCV;

