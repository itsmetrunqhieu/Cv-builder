import Api from './Api'

// update user endpoint
export const updateUser = async (data) => {
    // console.log(document.cookie.split('=')[1]);
    return Api().patch(
        'user/patch',
        data,
        {
            headers: {
                'Authorization': `${document.cookie.split('=')[1]}`
            }
        }
    );
}

// get user endpoint
export const getUser = async () => {
    return Api().get(
        'user/getuser',
        {
            headers: {
                'Authorization': `${document.cookie.split('=')[1]}`
            }
        }
    );
}