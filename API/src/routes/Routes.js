const express = require('express');
const router = express.Router();

const authenticate = require('../controllers/Authenticate');
const create_account = require('../controllers/CreateAccount');
const roles = require('../controllers/Roles')

router.post('/authenticate', authenticate);
router.post('/create-account', create_account);

router.post('/getRoles',
    function(req, res, next) {
        console.log('Getting Roles');
        client.connect((err, client, done) => {
            if (err) {
                console.log(err);
                done();
                return res.status(500).json({success: false, data: err});
            }

            const {dbResponse} = client.query('SELECT * from g28formRoles')
            dbResponse
            done()
            if (err) {
                res.status(500).json({success: false, message: JSON.stringify(err)});
            } else {
                console.log('Got Roles from db!');
                res.send(dbResponse);
            }
        });
    });

module.exports = router;