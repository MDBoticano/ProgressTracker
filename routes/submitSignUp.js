var data = require('../data.json');

exports.signUp = function(req, res){
	//console.log(data); //displays data to console
  
    var inputUserName = req.query.username;
    var inputFirstName = req.query.first_name;
    var inputLastName = req.query.last_name;
    var inputEmail = req.query.email;
    var inputPassword = req.query.password;
  
    data.currentUser["username"]=inputUserName;
    data.currentUser["firstName"]=inputFirstName;
    data.currentUser["lastName"]=inputLastName;
    data.currentUser["email"]=inputEmail;
    data.currentUser["password"]=inputPassword;
  
    //console.log(data);
  
  console.log(data.currentUser);
    
	//res.render('signup',data);
    res.redirect("/");
};