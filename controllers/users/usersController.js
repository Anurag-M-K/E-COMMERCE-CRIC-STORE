const userHelpers = require('../../models/helpers/user-helper')



const usersLog = (req,res)=>{
    res.render('../views/users/usersLogin')
}

const userSignup = (req,res)=>{
    userHelpers.doSignup(req.body).then((response)=>{
        console.log(response)
        res.render('users/usersLogin',{user:true})
    })
    }


const userHomePage = (req,res)=>{
    res.render('users/userHome')
}

const loginFromHome = (req,res)=>{
    res.render('users/usersLogin')
}

// register click to user signup

const signupFromHome = (req,res)=>{
    res.render("users/usersSignup")
}

const userLogin = (req,res)=>{
    res.render('./users/usersLogin')
}



const toUserHome = (req,res)=>{
    res.render('users/userHome')
}







// exports.usersLog = usersLog;
module.exports = {usersLog,userSignup,userHomePage,loginFromHome,signupFromHome,userLogin,toUserHome}