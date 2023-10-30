import Api from '@/services/Api'

export default {
  // register endpoint
  register (credentials) {
    /* do post request to /register endpoint on our backend */
    return Api().post('register', credentials)
  },
  // login endpoint
  login (credentials) {
    /* do post request to /login endpoint on our backend */
    return Api().post('login', credentials)
  }
}
