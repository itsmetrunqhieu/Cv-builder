import Api from './Api'

// register endpoint
export async function register (credentials) {
    /* do post request to /signup endpoint on our backend */
    return Api().post('auth/signup', credentials)
  }

  // login endpoint
export async function login (credentials) {
    /* do post request to /signin endpoint on our backend */
    return Api().post('auth/signin', credentials)
  }
