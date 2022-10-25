const adminHelper = require('../../models/helpers/admin-helper')
const adminLogin = require('../../models/helpers/admin-helper')
const userHelper = require('../../models/helpers/user-helper')


const loginview = (req,res)=>{
    res.render('../views/admin/admin-login')
}


const adminLoginAction = (req,res)=>{
    
    adminLogin.adminDoLogin(req.body).then((response)=>{
        if(response.status){
           
             res.render('admin/admin-panel')}
        else{
            res.redirect('/admin')
        }
    })
}
   
// admin user-management page direction

const userManagement = (req,res)=>{

   adminHelper.showUser(req.body).then((userDetails)=>{
    res.render('admin/user-management',{userDetails})
   })
    
    
}

//product to admin product section


const productManage = (req,res)=>{

    let AdminProducts = [
        {
            Category:'Pads',
            ProductName:'SS Bating Pad',
            Price : 2850,
            Quantity:28,
            ProductImage:"https://m.media-amazon.com/images/I/71wFa8jExdL._SL1500_.jpg"
        },
        {
            Category:'Pads',
            ProductName:'SS Bating Pad',
            Price : 2850,
            Quantity:28,
            ProductImage:"https://m.media-amazon.com/images/I/71wFa8jExdL._SL1500_.jpg"
        },
        {
            Category:'Pads',
            ProductName:'SS Bating Pad',
            Price : 2850,
            Quantity:28,
            ProductImage:"https://m.media-amazon.com/images/I/71wFa8jExdL._SL1500_.jpg"
        },
        {
            Category:'Pads',
            ProductName:'SS Bating Pad',
            Price : 2850,
            Quantity:28,
            ProductImage:"https://m.media-amazon.com/images/I/71wFa8jExdL._SL1500_.jpg"
        },
    ]

    res.render('admin/adminProductManage',{AdminProducts})
}



// admin product adding form

const productForm = (req,res)=>{
   
    res.render('admin/addProduct')
}




module.exports = {loginview,adminLoginAction,userManagement,productManage,productForm}