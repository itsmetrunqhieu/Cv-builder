const AuthController = require('./controllers/AuthController')
//const UpdateController = require('./controllers/UpdateController')

module.exports = (app) => {

    // test query
    app.get('/test', 
        AuthController.test)

    // register route
    app.post('/register',
        // TODO: middleware validation
        AuthController.register)

    // login route
    app.post('/login',
        AuthController.login)
    
    // update Info route
    // app.post('/updateInfo',
    //     UpdateController.updateUserInfo)
}
