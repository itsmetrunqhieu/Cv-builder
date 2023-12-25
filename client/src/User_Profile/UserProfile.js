// UserProfile.js
import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { username } = useParams();
  // Đây là nơi bạn có thể lấy dữ liệu từ API hoặc nơi khác để hiển thị thông tin người dùng
  const [userData, setUserData] = React.useState({
    fullName: 'defaultFullName',
    email: 'defaultEmail@example.com',
    phone: '123-456-7890',
    isMaleChecked: false,
    isFemaleChecked: true,
    isPreferNotToSayChecked: false,
  });

  const getUserData = async () => {
    //console.log(localStorage.getItem('user'));
    const user = await JSON.parse(localStorage.getItem('user'));
    setUserData({
      fullName: user.name,
      email: user.email,
      role: user.role,
    })
  };

  React.useEffect(() => {

    getUserData();

  }, [username]);

  return (
    <div>
      <h2>User Profile: {userData.username}</h2>
      <p>Full Name: {userData.fullName}</p>
      <p>Email: {userData.email}</p>
      <p>Phone: {userData.phone}</p>
      <p>Gender:
        {userData.isMaleChecked && ' Male '}
        {userData.isFemaleChecked && ' Female '}
        {userData.isPreferNotToSayChecked && ' Prefer not to say '}
      </p>
    </div>
  );
};

export default UserProfile;
