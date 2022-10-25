const express = require('express')
const router = express.Router();
const adloginController = require('../controllers/admin/adloginController');
const usersController = require('../controllers/users/usersController');
const adminHelper = require('../models/helpers/admin-helper');
const adminLoginHelper = require('../models/helpers/admin-helper')
const productHelper = require('../models/productHelpers.js')
const categoryHelpers = require("../models/categoryHelper")


router.get('/admin',adloginController.loginview)


router.post('/home-admin',adloginController.adminLoginAction)


router.get('/',usersController.userHomePage)


router.get('/user-management',adloginController.userManagement)


router.get('/products',adloginController.productManage)


router.get('/add-user',adloginController.productForm)


router.post('/addProduct',(req,res)=>{
    
    productHelper.addProduct(req.body,(result)=>{
        console.log(req.body)
            res.render('admin/addProduct')
            
    }) 
  
})

// for fijnding user and pass them to admin side user list

router.get('/',adloginController.userManagement)








//catgeory page

router.get('/admincategory',(req,res)=>{
    console.log("skjdvbk");
    
categoryHelpers.getAllCategories().then((Categories)=>{
    console.log("done",Categories);
     res.render('admin/adminCategory',{Categories})
})
   

   
})


router.post('/adminCategory',(req,res)=>{
    console.log(req.body)
    categoryHelpers.addCategory(req.body,(result)=>{
        res.redirect('adminCategory')
    })
    
})





module.exports =router

