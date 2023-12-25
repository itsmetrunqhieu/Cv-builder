// UserProfile.js
import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { username } = useParams();
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

  // const fetchData = async () => {
  //   const data = await fetch()
  // }

  React.useEffect(() => {
    // Trong thực tế, bạn sẽ gọi API để lấy dữ liệu người dùng dựa trên `username`
    // Tạm thời, sử dụng setUserData để cập nhật dữ liệu người dùng
    setUserData((prevUserData) => ({
      ...prevUserData,
      username, // Cập nhật username dựa trên useParams
      // Các giá trị khác sẽ được cập nhật tương tự dựa trên dữ liệu từ API hoặc nơi khác
    }));
  }, [username]);

  return (
    <div>
      <h2>User Profile: {userData.username}</h2>
      <p>Password: {userData.password}</p>
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
