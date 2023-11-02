import Api from '@/services/Api'

export default {
  // register endpoint
  register (credentials) {
    /* do post request to /signup endpoint on our backend */
    return Api().post('auth/signup', credentials)
  },
  // login endpoint
  login (credentials) {
    /* do post request to /signin endpoint on our backend */
    return Api().post('auth/signin', credentials)
  }
}
