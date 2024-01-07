// UserProfile.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './UserProfile.css';
import Switch from './Switch';
import { useEffect } from 'react';

import { getUser ,updateUser } from '../Services/UserService';

const UserProfile = () => {
    // Đây là nơi bạn có thể lấy dữ liệu từ API hoặc nơi khác để hiển thị thông tin người dùng
    const [userData, setUserData] = React.useState({
        username: 'defaultUsername',
        password: 'defaultPassword',
        fullName: 'defaultFullName',
        firstName: 'defaultFirstName',
        surName: 'defaultSurName',
        phone: 'defaultPhone',
        email: 'defaultEmail@example.com',
        jobTitle: 'defaultJobTitle',
        employer: 'defaultEmployer',
        cityMunicipality: 'defaultCityMunicipality',
        country: 'defaultCountry',
    });

    const handleSubmit = async () => {
        // Sử dụng username và password ở đây, có thể gửi đến server hoặc xử lý dữ liệu theo cách khác
        const req = {
            firstname: firstname,
            surname: surname,
            phone: phone,
            email: email,
            jobTitle: jobTitle,
            employer: employer,
            citymunicipality: city,
            country: country,
        };

        await updateUser(req);

        const user = (await getUserData()).data;

        // console.log(user);

        localStorage.setItem('user', JSON.stringify(user));

        window.location.reload();

    };

    const handleLogOut = () => {
        localStorage.removeItem('user');
        document.cookie.replace('access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;');
        window.location.reload();
    }

    const getUserData = async () => {
        return await getUser();
    }

    useEffect(() => {
        // console.log("user profile local storage");
        // console.log(JSON.stringify(localStorage.getItem('user')));
        
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user || user === '') {
            window.location.href = "/login";
        }

        setUserData({
            username: user.name || 'defaultUsername',
            password: 'defaultPassword',
            fullName: user.fullname || 'defaultFullName',
            firstName: user.firstname || 'defaultFirstName',
            surName: user.surname || 'defaultSurName',
            phone: user.phone || 'defaultPhone',
            email: user.email || 'defaultEmail@example.com',
            jobTitle: user.jobTitle || 'defaultJobTitle',
            employer: user.employer || 'defaultEmployer',
            cityMunicipality: user.citymunicipality || 'defaultCityMunicipality',
            country: user.country || 'defaultCountry',
        });

    }, []);

    const [firstname, setFirstname] = useState('');
    const [surname, setSurname] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [employer, setEmployer] = useState('');

    const handleFirstnameChange = (event) => {
        setFirstname(event.target.value);
    };

    const handleSurnameChange = (event) => {
        setSurname(event.target.value);
    };

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleJobTitleChange = (event) => {
        setJobTitle(event.target.value);
    };

    const handleEmployerChange = (event) => {
        setEmployer(event.target.value);
    };

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleCurrentPasswordChange = (event) => {
        setCurrentPassword(event.target.value);
    };

    const handleNewPasswordChange = (event) => {
        setNewPassword(event.target.value);
    };

    const [isPasswordVisible1, setIsPasswordVisible1] = useState(false);
    const [isPasswordVisible2, setIsPasswordVisible2] = useState(false);
    const [isPasswordVisible3, setIsPasswordVisible3] = useState(false);

    const togglePasswordVisibility1 = () => {
        setIsPasswordVisible1(!isPasswordVisible1);
    };

    const togglePasswordVisibility2 = () => {
        setIsPasswordVisible2(!isPasswordVisible2);
    };

    const togglePasswordVisibility3 = () => {
        setIsPasswordVisible3(!isPasswordVisible3);
    };

    const imgStyle = {
        cursor: 'pointer',
    };

    const [currentUserProfileOption, setCurrentUserProfileOption] = useState(1);

    const userProfileOptionNames = [
        "Basic Information",
        "CV Storage",
        "Account settings"
    ];

    const handleUserProfileOptionClick = (step) => {
        setCurrentUserProfileOption(step);
        handleSubmit();
    };

    const [isNotificationsChecked, setIsNotificationsChecked] = useState(false);

    const handleSwitchChange = (newCheckedValue) => {
        setIsNotificationsChecked(newCheckedValue);
    };

    const [isEnglishChecked, setIsEnglishChecked] = useState(true);
    const [isVietnameseChecked, setIsVietnameseChecked] = useState(false);

    const handleEnglishCheck = () => {
        setIsEnglishChecked(true);
        setIsVietnameseChecked(false);
    };

    const handleVietnameseCheck = () => {
        setIsEnglishChecked(false);
        setIsVietnameseChecked(true);
    };

    return (
        <div className='user-profile'>
            <div className='user-profile-header'>
                <Link to="/">
                    <p className="CV-Buider-Name">CV Builder</p>
                </Link>
            </div>
            <div className='user-profile-cover-field'>
                <img
                    src='/Image/User_Profile/user-profile-cover.png'
                    className='user-profile-cover'
                    alt='cover'
                />
                <Link to="">
                    <div className="create-cv-options-button create-cv-button user-profile-change-cover-button">
                        <img
                            src='/Image/User_Profile/Camera_light.svg'
                            className='create-cv-options-icon'
                            alt='icon'
                        />
                        <p className='user-profile-change-cover-button-text'>Change cover</p>
                    </div>
                </Link>
            </div>

            <div className='user-profile-left-field'>
                <div className='user-profile-avata-field'>
                    <img
                        src='/Image/User_Profile/User_fill.svg'
                        className='user-profile-avata'
                        alt='icon'
                    />
                    <Link to="">
                        <img
                            src='/Image/User_Profile/Camera_fill.svg'
                            className='user-profile-avata-field-icon'
                            alt='icon'
                        />
                    </Link>
                </div>
                <div className='user-profile-left-field-profile-name-field'>
                    <p className='user-profile-left-field-text'>{userData.fullName}</p>
                </div>
                <div className='user-profile-left-field-account-info-field'>
                    <p className='user-profile-left-field-text user-profile-left-field-account-info-field-text'>Account Information</p>
                </div>
                <div className='user-profile-left-field-username-field'>
                    <p className='user-profile-left-field-text'>Username:</p>
                    <p className='user-profile-left-field-text user-profile-left-field-username-field-text'>{userData.username}</p>
                </div>
                <div className='user-profile-left-field-username-field'>
                    <p className='user-profile-left-field-text'>Password:</p>
                    <p className='user-profile-left-field-text user-profile-left-field-username-field-text'>
                        {isPasswordVisible1 ? userData.password : userData.password.replace(/./g, '*')}
                    </p>
                    <img
                        src={isPasswordVisible1 ? "/Image/Login_Screen/View_light.svg"
                            : "/Image/Login_Screen/View_hide_light.svg"}
                        className="user-profile-left-field-username-field-icon"
                        alt="icon"
                        onClick={togglePasswordVisibility1}
                        style={imgStyle}
                    />
                </div>
                <div>
                    <div className='user-profile-left-field-button'>
                        <p className='user-profile-left-field-text user-profile-left-field-button-text' onClick={handleLogOut}>Log out</p>
                    </div>
                </div>
            </div>

            <div className='user-profile-right-field'>
                <div className='user-profile-right-field-option-header'>
                    {[1, 2, 3].map(step => (
                        <div
                            key={step}
                            className='user-profile-right-field-option'
                        >
                            <p
                                className='user-profile-left-field-text user-profile-right-field-option-header-text'
                                onClick={() => handleUserProfileOptionClick(step)}
                            >
                                {userProfileOptionNames[step - 1]}
                            </p>
                            {currentUserProfileOption === step &&
                                <div className='user-profile-right-field-option-active-signal'></div>
                            }
                        </div>
                    ))}
                </div>
                <div className='user-profile-right-field-content'>
                    {currentUserProfileOption === 1 &&
                        <div>
                            <div className="user-profile-right-field-firstname-form-field">
                                <p className='create-cv-form-text'>First Name:</p>
                                <input
                                    type="text"
                                    className="create-cv-form-input"
                                    placeholder={userData.firstName}
                                    value={firstname}
                                    onChange={handleFirstnameChange}
                                />
                            </div>
                            <div className="user-profile-right-field-surname-form-field">
                                <p className='create-cv-form-text'>Surname:</p>
                                <input
                                    type="text"
                                    className="create-cv-form-input"
                                    placeholder={userData.surName}
                                    value={surname}
                                    onChange={handleSurnameChange}
                                />
                            </div>
                            <div className="user-profile-right-field-phone-form-field">
                                <p className='create-cv-form-text'>Phone:</p>
                                <input
                                    type="text"
                                    className="create-cv-form-input"
                                    placeholder={userData.phone}
                                    value={phone}
                                    onChange={handlePhoneChange}
                                />
                            </div>
                            <div className="user-profile-right-field-email-form-field">
                                <p className='create-cv-form-text'>Email:</p>
                                <input
                                    type="email"
                                    className="create-cv-form-input"
                                    placeholder={userData.email}
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            </div>
                            <div className="user-profile-right-field-jobtitle-form-field">
                                <p className='create-cv-form-text'>Job Title:</p>
                                <input
                                    type="text"
                                    className="create-cv-form-input"
                                    placeholder={userData.jobTitle}
                                    value={jobTitle}
                                    onChange={handleJobTitleChange}
                                />
                            </div>
                            <div className="user-profile-right-field-employer-form-field">
                                <p className='create-cv-form-text'>Employer:</p>
                                <input
                                    type="text"
                                    className="create-cv-form-input"
                                    placeholder={userData.employer}
                                    value={employer}
                                    onChange={handleEmployerChange}
                                />
                            </div>
                            <div className="user-profile-right-field-city-step1-form-field">
                                <p className='create-cv-form-text'>City/Municipality:</p>
                                <input
                                    type="text"
                                    className="create-cv-form-input"
                                    placeholder={userData.cityMunicipality}
                                    value={city}
                                    onChange={handleCityChange}
                                />
                            </div>
                            <div className="user-profile-right-field-country-step1-form-field">
                                <p className='create-cv-form-text'>Country:</p>
                                <input
                                    type="text"
                                    className="create-cv-form-input"
                                    placeholder={userData.country}
                                    value={country}
                                    onChange={handleCountryChange}
                                />
                            </div>
                            <div className='user-profile-right-field-button' onClick={handleSubmit}>
                                <p className='user-profile-left-field-text user-profile-right-field-button-text'>Update</p>
                            </div>
                        </div>
                    }
                    {currentUserProfileOption === 2 &&
                        <div className='cv-storage-field'>
                            <img
                                src='/Image/User_Profile/cv1.png'
                                className='user-profile-cv-storange-pic'
                                alt='cv'
                                style={imgStyle}
                            />
                            <img
                                src='/Image/User_Profile/cv2.png'
                                className='user-profile-cv-storange-pic'
                                alt='cv'
                                style={imgStyle}
                            />
                            <img
                                src='/Image/User_Profile/cv7.png'
                                className='user-profile-cv-storange-pic'
                                alt='cv'
                                style={imgStyle}
                            />
                            <img
                                src='/Image/User_Profile/cv8.png'
                                className='user-profile-cv-storange-pic'
                                alt='cv'
                                style={imgStyle}
                            />
                            <img
                                src='/Image/User_Profile/cv9.png'
                                className='user-profile-cv-storange-pic'
                                alt='cv'
                                style={imgStyle}
                            />
                            <img
                                src='/Image/User_Profile/cv5.png'
                                className='user-profile-cv-storange-pic'
                                alt='cv'
                                style={imgStyle}
                            />
                            <img
                                src='/Image/User_Profile/cv6.png'
                                className='user-profile-cv-storange-pic'
                                alt='cv'
                                style={imgStyle}
                            />
                            <img
                                src='/Image/User_Profile/cv10.png'
                                className='user-profile-cv-storange-pic'
                                alt='cv'
                                style={imgStyle}
                            />
                            <img
                                src='/Image/User_Profile/cv3.png'
                                className='user-profile-cv-storange-pic'
                                alt='cv'
                                style={imgStyle}
                            />
                            <img
                                src='/Image/User_Profile/cv4.png'
                                className='user-profile-cv-storange-pic'
                                alt='cv'
                                style={imgStyle}
                            />
                        </div>
                    }
                    {currentUserProfileOption === 3 &&
                        <div>
                            <div className="user-profile-right-field-reset-password-form-field">
                                <p className='create-cv-form-text'>Reset Password</p>
                                <div className="user-profile-right-field-current-password-form-field">
                                    <input
                                        type={isPasswordVisible2 ? 'text' : 'password'}
                                        className="create-cv-form-input user-profile-right-field-reset-password-form-input"
                                        placeholder="Current Password"
                                        value={currentPassword}
                                        onChange={handleCurrentPasswordChange}
                                    >
                                    </input>
                                    <img
                                        src={isPasswordVisible2 ? "/Image/Login_Screen/View_light.svg"
                                            : "/Image/Login_Screen/View_hide_light.svg"}
                                        className="user-profile-right-field-reset-password-icon1"
                                        alt="icon"
                                        onClick={togglePasswordVisibility2}
                                        style={imgStyle}
                                    />
                                </div>
                                <div className="user-profile-right-field-current-password-form-field">
                                    <input
                                        type={isPasswordVisible3 ? 'text' : 'password'}
                                        className="create-cv-form-input user-profile-right-field-reset-password-form-input"
                                        placeholder="New Password"
                                        value={newPassword}
                                        onChange={handleNewPasswordChange}
                                    >
                                    </input>
                                    <img
                                        src={isPasswordVisible3 ? "/Image/Login_Screen/View_light.svg"
                                            : "/Image/Login_Screen/View_hide_light.svg"}
                                        className="user-profile-right-field-reset-password-icon2"
                                        alt="icon"
                                        onClick={togglePasswordVisibility3}
                                        style={imgStyle}
                                    />
                                </div>
                            </div>
                            <Link to=''>
                                <div className='user-profile-right-field-privacy-field'>
                                    <p className='create-cv-form-text'>Privacy</p>
                                </div>
                            </Link>
                            <div className='user-profile-right-field-privacy-field'>
                                <p className='create-cv-form-text'>Notifications</p>
                                <div className='user-profile-right-field-notifications-switch'>
                                    <Switch onChange={handleSwitchChange} />
                                </div>
                                <p className='user-profile-left-field-text user-profile-left-field-username-field-text user-profile-right-field-notifications-text' >
                                    The notification will let you know whenever new CV template is posted
                                </p>
                            </div>
                            <div className='user-profile-right-field-privacy-field'>
                                <p className='create-cv-form-text'>Language</p>
                                <div className='user-profile-right-field-english-field'>
                                    <input
                                        type="checkbox"
                                        className='user-profile-right-field-language-checkbox'
                                        checked={isEnglishChecked}
                                        onChange={handleEnglishCheck}
                                    />
                                    <img
                                        src='/Image/User_Profile/Flag_of_the_United_States.svg'
                                        className='user-profile-flag-icon'
                                        alt='icon'
                                    />
                                    <p className='user-profile-left-field-text user-profile-right-field-language-text'>English</p>
                                </div>
                                <div className='user-profile-right-field-english-field'>
                                    <input
                                        type="checkbox"
                                        className='user-profile-right-field-language-checkbox'
                                        checked={isVietnameseChecked}
                                        onChange={handleVietnameseCheck}
                                    />
                                    <img
                                        src='/Image/User_Profile/Flag_of_Vietnam.svg'
                                        className='user-profile-flag-icon'
                                        alt='icon'
                                    />
                                    <p className='user-profile-left-field-text user-profile-right-field-language-text'>Vietnamese</p>
                                </div>
                            </div>
                            <div className='user-profile-right-field-button user-profile-right-field-save-button' onClick={handleSubmit}>
                                <p className='user-profile-left-field-text user-profile-right-field-button-text'>Save</p>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
