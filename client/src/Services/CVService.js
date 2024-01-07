import Api from './Api'

//send cv submit endpoint
export const sendCV = async (data) => {
    return Api().post('CVtmplt/submitInfor', data);
}