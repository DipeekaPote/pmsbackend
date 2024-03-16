const express = require('express')
const router = express.Router()

const { createRole, getRoles, getRole, deleteRole, updateRole } = require('../../controllers/Common/roleControler')
const { createTag, getTag, getTags, deleteTag, updateTag } = require('../../controllers/Common/tagController')
const { createAccessRight, getAccessRight, getAccessRights, deleteAccessRight, updateAccessRight } = require('../../controllers/Common/accessRightsController')
const { createContact, getContact, getContacts, deleteContact, updateContact } = require('../../controllers/Common/contactController')
const { createUser, getUsers, getUser, deleteUser, updateUser, adminSignup, getUserByEmail, updateUserPassword, updateLoginStatus } = require("../../controllers/Common/userController");
const { validateToken } = require("../../controllers/middlewares/authJwt");
const { generatetoken } = require("../../controllers/Common/loginController");
const { adminLogin } = require("../../controllers/Common/loginController");


//*******************ROLES START********************* */
//GET all roles 

router.get('/role',getRoles)

//GET single role 

router.get('/role/:id',getRole)

//POST a new role

router.post('/role',createRole)
    
//DELETE a role 

router.delete('/role/:id',deleteRole)

//PATCH UPDATE a role 

router.patch('/role/:id',updateRole)

//*******************ROLES END********************* */

//*******************USER START********************* */
//todo JWT token generate
router.post("/login/generatetoken", generatetoken);

//todo  JWT token Verify
router.get('/login/verifytoken', validateToken, (req, res) => {
    res.json({ message: 'Access granted', user: req.user });
});

// user logout
router.get("/login/logout", validateToken, async(req,res)=>{

    const currentTimeUnix = Date.now();

if (req.user.exp === currentTimeUnix){
    res.status(400).json({status:400})
}
else{
    res.clearCookie("usercookie",{path:"/"});
    res.status(200).json({status:200})
    console.log("Logout Successfull")
}
 })

//todo Admin application Login
router.post("/login", adminLogin);

router.post("/login/signup", adminSignup);     //It is also for create user

//! sop api
//GET all Users

router.get("/user", getUsers);

//GET single Users

router.get("/user/:id", getUser);

//POST a new User

router.post("/user", createUser);

//DELETE a User

router.delete("/user/:id", deleteUser);

//PATCH UPDATE a User

router.patch("/user/:id", updateUser);

//Get a User by email

router.get("/user/email/getuserbyemail", getUserByEmail);

//Get a User by email

router.post("/updateUserLoginStatus", updateLoginStatus);

//todo  JWT token Verify for reset password
router.get('/resetpassword/verifytoken', validateToken, (req, res) => {
    res.json({ message: 'Access granted', user: req.user });
});


//PATCH UPDATE a User

router.patch("/user/password/updateuserpassword/", updateUserPassword);


//*******************USER END********************* */


//*******************TAG START********************* */

//GET all tags 

router.get('/tag',getTags)

//GET single tag 

router.get('/tag/:id',getTag)

//POST a new tag

router.post('/tag',createTag)
    
//DELETE a tag 

router.delete('/tag/:id',deleteTag)

//PATCH UPDATE a tag 

router.patch('/tag/:id',updateTag)

//*******************TAG END********************* */


//*******************ACCESS RIGHTS START********************* */

//GET all accessright 

router.get('/accessright',getAccessRights)

//GET single accessright 

router.get('/accessright/:id',getAccessRight)

//POST a new accessright

router.post('/accessright',createAccessRight)
    
//DELETE a accessright 

router.delete('/accessright/:id',deleteAccessRight)

//PATCH UPDATE a accessright 

router.patch('/accessright/:id', updateAccessRight)

//*******************ACCESS RIGHTS END********************* */


//*******************CONTACT START********************* */

//GET all contact 

router.get('/contact',getContacts)

//GET single contact 

router.get('/contact/:id', getContact)

//POST a new contact

router.post('/contact', createContact)
    
//DELETE a contact 

router.delete('/contact/:id', deleteContact)

//PATCH UPDATE a contact 

router.patch('/contact/:id', updateContact)

//*******************CONTACT END********************* */


module.exports = router

