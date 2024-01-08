import Api from './Api'

//send cv submit endpoint
export const sendCV = async (data) => {
    return Api().post('CVtmplt/submitInfor', data);
}

export const donwnload = async (html) => {
    return Api().post('CV/download', html,
        {
            headers: {
                'Authorization': `${document.cookie.split('=')[1]}`
            },
            responseType: 'blob'
        }
    );
}