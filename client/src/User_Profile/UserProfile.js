// UserProfile.js
import React from 'react';
import { Link } from 'react-router-dom';
import './UserProfile.css';

const UserProfile = () => {
    // Đây là nơi bạn có thể lấy dữ liệu từ API hoặc nơi khác để hiển thị thông tin người dùng
    const [userData, setUserData] = React.useState({
        username: 'defaultUsername',
        password: 'defaultPassword',
        fullName: 'defaultFullName',
        email: 'defaultEmail@example.com',
        phone: '123-456-7890',
        isMaleChecked: false,
        isFemaleChecked: true,
        isPreferNotToSayChecked: false,
    });

    // const getUserData = async () => {
    //   //console.log(localStorage.getItem('user'));
    //     const user = await JSON.parse(localStorage.getItem('user'));
    //     setUserData({
    //         fullName: user.name,
    //         email: user.email,
    //         role: user.role,
    //     })
    // };

    // React.useEffect(() => {

    //   getUserData();

    // }, [username]);

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
                        src='/Image/User_Profile/User_alt_light.svg'
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
                    <p className='user-profile-left-field-text'>Truong Tri Dung</p>
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
                    <p className='user-profile-left-field-text user-profile-left-field-username-field-text'>{userData.password}</p>
                    
                </div>
            </div>
            <div className='user-profile-right-field'>

            </div>
        </div>
    );
};

export default UserProfile;
