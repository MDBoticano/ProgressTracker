var data = require('../data.json');

exports.view = function(req, res){
	//console.log(data); //displays data to console
	res.render('viewDetails',data);
};


