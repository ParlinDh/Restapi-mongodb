module.exports = (app) => {
    const users = require('../controller/User.controller');
    const router = require('express').Router();

    router.get('/', users.findAll)

    app.use('/api/users', router)
}