const { response } = require('express');
const express = require('express')
const router = express.Router();
const usersController = require('../controllers/users/usersController')
const userHelpers = require('../models/helpers/user-helper')



router.get('/',usersController.usersLog)

router.post('/signup',usersController.userSignup)

router.get('/login',usersController.userLogin)

router.get("/header/usersignup",usersController.signupFromHome)

router.post('/toHome',usersController.toUserHome)

router.get('/header/userlogin',usersController.loginFromHome)



router.post('/login',(req,res)=>{
    userHelpers.userDoLogin(req.body).then((response)=>{
        if(response.status){
            req.session.loggedIn=true
            req.session.user = response.user
            res.render('users/userHome')
        }else{
            res.render('users/usersLogin')
        }
    })
})

router.post('/signup',(req,res)=>{
    userHelpers.doSignup(req.body).then((response)=>{
        console.log(response);
        res.render("users/userHome",{user:true,admin:false})
    })
})



module.exports=router