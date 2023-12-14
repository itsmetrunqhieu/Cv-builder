import './create-cv.css';
import './create-cv-options.css';
import '../Login_Screen/Login.css'
import '../Home_Screen/Home.css'
import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Editor from './editor-step';

function CreateCV() {
    // Step 1: Personal Information
    const [firstname, setFirstname] = useState('');
    const [surname, setSurname] = useState('');
    const [profession, setProfession] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleFirstnameChange = (event) => {
        setFirstname(event.target.value);
    };
    
    const handleSurnameChange = (event) => {
        setSurname(event.target.value);
    };

    const handleProfessionChange = (event) => {
        setProfession(event.target.value);
    };

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };

    const handlePostalCodeChange = (event) => {
        setPostalCode(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    
    // Step 2: Job Information
    const [jobTitle, setJobTitle] = useState('');
    const [employer, setEmployer] = useState('');
    const [jobCity, setJobCity] = useState('');
    const [jobCountry, setJobCountry] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [currentlyWorkHere, setCurrentlyWorkHere] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [jobDescription, setJobDescription] = useState('');


    const handleJobTitleChange = (event) => {
        setJobTitle(event.target.value);
    };

    const handleEmployerChange = (event) => {
        setEmployer(event.target.value);
    };

    const handleJobCityChange = (event) => {
        setJobCity(event.target.value);
    };

    const handleJobCountryChange = (event) => {
        setJobCountry(event.target.value);
    };

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    };

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    };

    const handleCurrentlyWorkHereChange = (event) => {
        setCurrentlyWorkHere(event.target.checked);
    };

    const handleJobDescriptionChange = (value) => {
        if (value !== undefined && value !== null) {
            setJobDescription(value);
        }
    };

    // Step 3: Education Information
    const [schoolName, setSchoolName] = useState('');
    const [schoolLocation, setSchoolLocation] = useState('');
    const [degree, setDegree] = useState('');
    const [fieldOfStudy, setFieldOfStudy] = useState('');
    const [graduationStartDate, setGraduationStartDate] = useState('');
    const [graduationEndDate, setGraduationEndDate] = useState('');
    const [currentlyAttendHere, setCurrentlyAttendHere] = useState(false);
    
    const handleSchoolNameChange = (event) => {
        setSchoolName(event.target.value);
    };

    const handleSchoolLocationChange = (event) => {
        setSchoolLocation(event.target.value);
    };

    const handleDegreeChange = (event) => {
        setDegree(event.target.value);
    };

    const handleFieldOfStudyChange = (event) => {
        setFieldOfStudy(event.target.value);
    };

    const handleGraduationStartDateChange = (event) => {
        setGraduationStartDate(event.target.value);
    };

    const handleGraduationEndDateChange = (event) => {
        setGraduationEndDate(event.target.value);
    };

    const handleCurrentlyAttendHereChange = (event) => {
        setCurrentlyAttendHere(event.target.checked);
    };

    // Step 4: Skill Information
    // eslint-disable-next-line no-unused-vars
    const [skillDescription, setSkillDescription] = useState('');

    const handleSkillDescriptionChange = (value) => {
        if (value !== undefined && value !== null) {
            setSkillDescription(value);
        }
    };

    // Step 5: Summary Information
    // eslint-disable-next-line no-unused-vars
    const [summaryDescription, setSummaryDescription] = useState('');

    const handleSummaryDescriptionChange = (value) => {
        if (value !== undefined && value !== null) {
            setSummaryDescription(value);
        }
    };

    // Step 6: Finalize
    // eslint-disable-next-line no-unused-vars
    const [CVName, setCVName] = useState('');

    const handleCVNameChange = (event) => {
        setCVName(event.target.value);
    };

    const handleSubmit = () => {
        // Sử dụng username và password ở đây, có thể gửi đến server hoặc xử lý dữ liệu theo cách khác
    };

    const [currentStep, setCurrentStep] = useState(1);
    const [previousStep, setPreviousStep] = useState(1);

    useEffect(() => {
        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                console.log(entry);
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        };

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0,
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        const hiddenElements = document.querySelectorAll('.hidden-right');
        hiddenElements.forEach((el) => observer.observe(el));

        return () => {
            hiddenElements.forEach((el) => observer.unobserve(el));
        };
    }, [currentStep]);

    useEffect(() => {
        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                console.log(entry);
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        };

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0,
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));

        return () => {
            hiddenElements.forEach((el) => observer.unobserve(el));
        };
    }, [currentStep]);

    const stepNames = [
        "Heading",
        "Work History",
        "Education",
        "Skills",
        "Summary",
        "Finalize and Review"
    ];

    const handleStepClick = (step) => {
        if (currentStep !== step) {
            setPreviousStep(currentStep);
            setCurrentStep(step);
        }
    };
       

    const handleNextClick = () => {
        setPreviousStep(currentStep);
        setCurrentStep(currentStep + 1);  
        handleSubmit();
    };

    const handleBackClick = () => {
        setPreviousStep(currentStep);
        setCurrentStep(currentStep - 1);
    };

    // console.log('previous ',previousStep);
    // console.log('current ',currentStep);

    const [currentEditCVOption, setCurrentEditCVOption] = useState(0);

    const editCVOptionNames = [
        "Spell check",
        "Templates & color",
        "Formatting tools",
        "Add sections"
    ];

    const handleEditCVOptionClick = (step) => {
        if (currentEditCVOption !== step) {
            setCurrentEditCVOption(step);
        } else {
            setCurrentEditCVOption(0);
        }
    };   

    // console.log('current ',currentEditCVOption);

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
                        <div className={`${previousStep <= currentStep ? 'hidden-right' : 'hidden'}`}>
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
                                    value={surname}
                                    onChange={handleSurnameChange}
                                />
                            </div>
                            <div className="create-cv-profession-form-field">
                                <p className='create-cv-form-text'>Profession</p>
                                <input
                                    type="text"
                                    className="create-cv-form-input"
                                    placeholder="e.g. Jr. Software Developer"
                                    value={profession}
                                    onChange={handleProfessionChange}
                                />
                            </div>
                            <div className="create-cv-city-step1-form-field">
                                <p className='create-cv-form-text'>City/Municipality</p>
                                <input
                                    type="text"
                                    className="create-cv-form-input"
                                    placeholder="e.g. Ho Chi Minh"
                                    value={city}
                                    onChange={handleCityChange}
                                />
                            </div>
                            <div className="create-cv-country-step1-form-field">
                                <p className='create-cv-form-text'>Country</p>
                                <input
                                    type="text"
                                    className="create-cv-form-input"
                                    placeholder="e.g. Viet Nam"
                                    value={country}
                                    onChange={handleCountryChange}
                                />
                            </div>
                            <div className="create-cv-postal-code-form-field">
                                <p className='create-cv-form-text'>Postal Code</p>
                                <input
                                    type="text"
                                    className="create-cv-form-input"
                                    placeholder="e.g. 700000"
                                    value={postalCode}
                                    onChange={handlePostalCodeChange}
                                />
                            </div>
                            <div className="create-cv-phone-form-field">
                                <p className='create-cv-form-text'>Phone</p>
                                <input
                                    type="text"
                                    className="create-cv-form-input"
                                    placeholder="e.g. +84769807115"
                                    value={phone}
                                    onChange={handlePhoneChange}
                                />
                            </div>
                            <div className="create-cv-email-form-field">
                                <p className='create-cv-form-text'>Email</p>
                                <input
                                    type="email"
                                    className="create-cv-form-input"
                                    placeholder="e.g. dungtruong151@gmail.com"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            </div>
                        </div>
                        <Link to="/create-cv-options">
                            <div className="create-cv-options-button back-button create-cv-back-button">
                                <img 
                                    src='/Image/Create_CV/Arrow_alt_left_alt.svg'
                                    className='create-cv-options-icon'
                                    alt='icon'
                                />
                                <p className='create-cv-options-button-text create-cv-options-back-button-text'>Back</p>
                            </div>
                        </Link>
                        <div className="create-cv-options-button back-button create-cv-next-button" onClick={handleNextClick}>
                            <img 
                                src='/Image/Create_CV/Arrow_alt_lright_alt.svg'
                                className='create-cv-icon'
                                alt='icon'
                            />
                            <p className='create-cv-options-button-text create-cv-next-button-text'>Next</p>
                        </div>
                    </div> 
                }
                {currentStep === 2 && 
                    <div>
                        <div className={`${previousStep <= currentStep ? 'hidden-right' : 'hidden'}`}>
                            <h className='create-cv-content-title'>Tell us about your most recent job</h>
                            <div className="create-cv-jobtitle-form-field">
                                <p className='create-cv-form-text'>Job Title</p>
                                <input
                                    type="text"
                                    className="create-cv-form-input"
                                    placeholder="e.g. Front-end developer"
                                    value={jobTitle}
                                    onChange={handleJobTitleChange}
                                />
                            </div>
                            <div className="create-cv-employer-form-field">
                                <p className='create-cv-form-text'>Employer</p>
                                <input
                                    type="text"
                                    className="create-cv-form-input"
                                    placeholder="e.g. CV Builder"
                                    value={employer}
                                    onChange={handleEmployerChange}
                                />
                            </div>
                            <div className="create-cv-job-city-form-field">
                                <p className='create-cv-form-text'>City/Municipality</p>
                                <input
                                    type="text"
                                    className="create-cv-form-input"
                                    placeholder="e.g. Ho Chi Minh"
                                    value={jobCity}
                                    onChange={handleJobCityChange}
                                />
                            </div>
                            <div className="create-cv-job-country-form-field">
                                <p className='create-cv-form-text'>Country</p>
                                <input
                                    type="text"
                                    className="create-cv-form-input"
                                    placeholder="e.g. Viet Nam"
                                    value={jobCountry}
                                    onChange={handleJobCountryChange}
                                />
                            </div>
                            <div className="create-cv-start-date-form-field">
                                <p className='create-cv-form-text'>Start Date</p>
                                <input
                                    type="date"
                                    className="create-cv-form-input"
                                    value={startDate}
                                    onChange={handleStartDateChange}
                                />
                            </div>
                            <div className="create-cv-end-date-form-field">
                                <p className='create-cv-form-text'>End Date</p>
                                <input
                                    type="date"
                                    className="create-cv-form-input"
                                    value={endDate}
                                    onChange={handleEndDateChange}
                                />
                            </div>
                            <div className="create-cv-currently-work-form-field">
                                <input
                                    type="checkbox"
                                    className='currently-work-box'
                                    value={currentlyWorkHere}
                                    onChange={handleCurrentlyWorkHereChange}
                                />
                                <p className='create-cv-form-text currently-work-text'>I currently work here</p>
                            </div>
                            <div className="create-cv-job-description-form-field">
                                <p className='create-cv-form-text'>Job Description</p>
                                <Editor onValueChange={handleJobDescriptionChange} currentStep={currentStep} />
                            </div>
                        </div>
                        <div className="create-cv-options-button back-button create-cv-back-button" onClick={handleBackClick}>
                            <img 
                                src='/Image/Create_CV/Arrow_alt_left_alt.svg'
                                className='create-cv-options-icon'
                                alt='icon'
                            />
                            <p className='create-cv-options-button-text create-cv-options-back-button-text'>Back</p>
                        </div>
                        <div className="create-cv-options-button back-button create-cv-next-button" onClick={handleNextClick}>
                            <img 
                                src='/Image/Create_CV/Arrow_alt_lright_alt.svg'
                                className='create-cv-icon'
                                alt='icon'
                            />
                            <p className='create-cv-options-button-text create-cv-next-button-text'>Next</p>
                        </div>
                    </div>
                }
                {currentStep === 3 && 
                    <div>
                        <div className={`${previousStep <= currentStep ? 'hidden-right' : 'hidden'}`}>
                            <h className='create-cv-content-title'>Tell us about your education</h>
                            <div className="create-cv-school-name-form-field">
                                <p className='create-cv-form-text'>School Name</p>
                                <input
                                    type="text"
                                    className="create-cv-form-input"
                                    placeholder="e.g. International University-VNU-HCM"
                                    value={schoolName}
                                    onChange={handleSchoolNameChange}
                                />
                            </div>
                            <div className="create-cv-school-location-form-field">
                                <p className='create-cv-form-text'>School Location</p>
                                <input
                                    type="text"
                                    className="create-cv-form-input"
                                    placeholder="e.g. Ho Chi Minh City, Vietnam"
                                    value={schoolLocation}
                                    onChange={handleSchoolLocationChange}
                                />
                            </div>
                            <div className="create-cv-degree-form-field">
                                <p className='create-cv-form-text'>Degree</p>
                                <select
                                    id="mySelect"
                                    className="create-cv-form-input"
                                    value={degree}
                                    onChange={handleDegreeChange}
                                >
                                    <option value="">Select...</option>
                                    <option value="option1">High School Diploma</option>
                                    <option value="option2">GED</option>
                                    <option value="option3">Associate of Arts</option>
                                    <option value="option4">Associate of Science</option>
                                    <option value="option5">Associate of Applied Science</option>
                                    <option value="option6">Bachelor of Arts</option>
                                    <option value="option7">Bachelor of Science</option>
                                    <option value="option8">BBA</option>
                                    <option value="option10">Master of Arts</option>
                                    <option value="option11">Master of Science</option>
                                    <option value="option12">MBA</option>
                                    <option value="option13">J.D.</option>
                                    <option value="option14">M.D.</option>
                                    <option value="option15">Ph.D.</option>
                                    <option value="option16">Enter a different degree</option>
                                    <option value="option17">No Degree</option>
                                </select>
                            </div>
                            <div className="create-cv-field-of-study-form-field">
                                <p className='create-cv-form-text'>Field of Study</p>
                                <input
                                    type="text"
                                    className="create-cv-form-input"
                                    placeholder="e.g. Computer Science"
                                    value={fieldOfStudy}
                                    onChange={handleFieldOfStudyChange}
                                />
                            </div>
                            <div className="create-cv-graduation-start-date-form-field">
                                <p className='create-cv-form-text'>Graduation Start Date</p>
                                <input
                                    type="date"
                                    className="create-cv-form-input"
                                    value={graduationStartDate}
                                    onChange={handleGraduationStartDateChange}
                                />
                            </div>
                            <div className="create-cv-graduation-end-date-form-field">
                                <p className='create-cv-form-text'>Graduation End Date</p>
                                <input
                                    type="date"
                                    className="create-cv-form-input"
                                    value={graduationEndDate}
                                    onChange={handleGraduationEndDateChange}
                                />
                            </div>
                            <div className="create-cv-currently-attend-form-field">
                                <input
                                    type="checkbox"
                                    className='currently-work-box'
                                    value={currentlyAttendHere}
                                    onChange={handleCurrentlyAttendHereChange}
                                />
                                <p className='create-cv-form-text currently-work-text'>I currently attend here</p>
                            </div>
                        </div>
                        <div className="create-cv-options-button back-button create-cv-back-button" onClick={handleBackClick}>
                            <img 
                                src='/Image/Create_CV/Arrow_alt_left_alt.svg'
                                className='create-cv-options-icon'
                                alt='icon'
                            />
                            <p className='create-cv-options-button-text create-cv-options-back-button-text'>Back</p>
                        </div>
                        <div className="create-cv-options-button back-button create-cv-next-button" onClick={handleNextClick}>
                            <img 
                                src='/Image/Create_CV/Arrow_alt_lright_alt.svg'
                                className='create-cv-icon'
                                alt='icon'
                            />
                            <p className='create-cv-options-button-text create-cv-next-button-text'>Next</p>
                        </div>
                    </div>
                }
                {currentStep === 4 && 
                    <div>
                        <div className={`${previousStep <= currentStep ? 'hidden-right' : 'hidden'}`}>
                            <h className='create-cv-content-title'>What skills would you like to highlight?</h>
                            <div className="create-cv-skill-description-form-field">
                                <Editor onValueChange={handleSkillDescriptionChange} currentStep={currentStep} />
                            </div>
                        </div>
                        <div className="create-cv-options-button back-button create-cv-back-button" onClick={handleBackClick}>
                            <img 
                                src='/Image/Create_CV/Arrow_alt_left_alt.svg'
                                className='create-cv-options-icon'
                                alt='icon'
                            />
                            <p className='create-cv-options-button-text create-cv-options-back-button-text'>Back</p>
                        </div>
                        <div className="create-cv-options-button back-button create-cv-next-button" onClick={handleNextClick}>
                            <img 
                                src='/Image/Create_CV/Arrow_alt_lright_alt.svg'
                                className='create-cv-icon'
                                alt='icon'
                            />
                            <p className='create-cv-options-button-text create-cv-next-button-text'>Next</p>
                        </div>
                    </div>
                }
                {currentStep === 5 && 
                    <div>
                        <div className={`${previousStep <= currentStep ? 'hidden-right' : 'hidden'}`}>
                            <h className='create-cv-content-title'>Briefly tell us about your background</h>
                            <div className="create-cv-skill-description-form-field">
                                <Editor onValueChange={handleSummaryDescriptionChange} currentStep={currentStep} />
                            </div>
                        </div>
                        <div className="create-cv-options-button back-button create-cv-back-button" onClick={handleBackClick}>
                            <img 
                                src='/Image/Create_CV/Arrow_alt_left_alt.svg'
                                className='create-cv-options-icon'
                                alt='icon'
                            />
                            <p className='create-cv-options-button-text create-cv-options-back-button-text'>Back</p>
                        </div>
                        <div className="create-cv-options-button back-button create-cv-next-button" onClick={handleNextClick}>
                            <img 
                                src='/Image/Create_CV/Arrow_alt_lright_alt.svg'
                                className='create-cv-icon'
                                alt='icon'
                            />
                            <p className='create-cv-options-button-text create-cv-next-button-text'>Next</p>
                        </div>
                    </div>
                }
                {currentStep === 6 && 
                    <div>
                        <div className={`${previousStep <= currentStep ? 'hidden-right' : 'hidden'}`}>
                            <div className="create-cv-cv-name-form-field">
                                <img 
                                    src='/Image/Create_CV/Edit_light.svg'
                                    className='create-cv-options-icon'
                                    alt='icon'
                                />
                                <input
                                    type="text"
                                    className="create-cv-form-input create-cv-cv-name-form-input"
                                    placeholder="[Change CV file name]"       
                                    value={CVName}
                                    onChange={handleCVNameChange}
                                />
                            </div>
                            <div className='finish-cv-area'>
                                {/* Chèn cv sau khi xử lí vào đây */}
                            </div>
                            <Link to="">
                                <div className="create-cv-options-button create-cv-button create-cv-download-cv-button">
                                    <img 
                                        src='/Image/Create_CV/Arhive_load_light.svg'
                                        className='create-cv-options-icon'
                                        alt='icon'
                                    />
                                    <p className='create-cv-options-button-text'>Download as pdf</p>
                                </div>
                            </Link>
                            <Link to="">
                                <div className="create-cv-options-button create-cv-button create-cv-save-cv-button">
                                    <img 
                                        src='/Image/Create_CV/Save_light.svg'
                                        className='create-cv-options-icon'
                                        alt='icon'
                                    />
                                    <p className='create-cv-options-button-text'>Save your CV in storage</p>
                                </div>
                            </Link>
                            <div className='create-cv-edit-cv-area'>
                                {[1, 2, 3, 4].map(step => (
                                <div
                                    key={step}
                                    className={`create-cv-edit-cv-area-option 
                                                ${step === 1 ? 'create-cv-edit-cv-area-option-first' : ''}
                                                ${step === 4 ? 'create-cv-edit-cv-area-option-last' : ''}
                                                ${currentEditCVOption === step ? 'active' : ''}`}  
                                >
                                    <div 
                                        className='create-cv-edit-cv-area-option-header'
                                        onClick={() => handleEditCVOptionClick(step)}
                                    >
                                        <img 
                                            src={`  ${step === 1 ? '/Image/Create_CV/spell-check-solid-svgrepo-com.svg' : ''}
                                                    ${step === 2 ? '/Image/Create_CV/format-svgrepo-com.svg' : ''}
                                                    ${step === 3 ? '/Image/Create_CV/format-text-size-svgrepo-com.svg' : ''}
                                                    ${step === 4 ? '/Image/Create_CV/Add_ring_fill.svg' : ''}`}
                                            className='create-cv-options-icon create-cv-edit-cv-area-option-icon'
                                            alt='icon'
                                        />
                                        <p className='create-cv-options-button-text create-cv-edit-cv-area-option-header-text'>
                                            {editCVOptionNames[step - 1]}
                                        </p>
                                        <img 
                                            src={`${currentEditCVOption === step ? '/Image/Create_CV/Expand_up.svg' 
                                                                                : '/Image/Create_CV/Expand_down.svg'}`}
                                            className='create-cv-icon'
                                            alt='icon'
                                        />
                                    </div>
                                    {currentEditCVOption === 1 && 
                                        <div className={`${currentEditCVOption === step ? 'create-cv-edit-cv-area-extended' : ''}`}>

                                        </div>
                                    }
                                    {currentEditCVOption === 2 && 
                                        <div className={`${currentEditCVOption === step ? 'create-cv-edit-cv-area-extended' : ''}`}>

                                        </div>
                                    }
                                    {currentEditCVOption === 3 && 
                                        <div className={`${currentEditCVOption === step ? 'create-cv-edit-cv-area-extended' : ''}`}>

                                        </div>
                                    }
                                    {currentEditCVOption === 4 && 
                                        <div className={`${currentEditCVOption === step ? 'create-cv-edit-cv-area-extended' : ''}`}>

                                        </div>
                                    }
                                </div>
                                ))}
                            </div>
                        </div>
                        <div className="create-cv-options-button back-button create-cv-back-button" onClick={handleBackClick}>
                            <img 
                                src='/Image/Create_CV/Arrow_alt_left_alt.svg'
                                className='create-cv-options-icon'
                                alt='icon'
                            />
                            <p className='create-cv-options-button-text create-cv-options-back-button-text'>Back</p>
                        </div>
                        <Link to="/create-cv-options">
                            <div className="create-cv-options-button back-button create-cv-next-button" onClick={handleNextClick}>
                                <p className='create-cv-options-button-text create-cv-next-button-text create-cv-finish-button-text'>Finish Resumne</p>
                            </div>
                        </Link>
                    </div>
                }
            </div>
        </div>
    );
}

export default CreateCV;
