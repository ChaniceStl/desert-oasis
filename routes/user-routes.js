const router = require('express').Router();
const models = require('../server/models')


////////////////
///FUNCTION/////
////////////////
const addUser = (req,res) => {
	models.User.create({
		first_name:req.body.first_name,
		last_name:req.body.last_name,
		user_name:req.body.user_name,
		e_mail:req.body.e_mail,
		password:req.body.password,
	})
	.then(data => res.send(data))
	.catch(error => res.status(500).send(error))
}

const getUser = (req,res) => {
	models.User.findOne({
		where:{
			id:req.params.userId
		},
		 include:[models.Market]
	})
	.then(data => res.send(data))
	.catch(error => res.status(500).send(error))
}

function getUserByUsername(req, res) {
	models.User.findOne({
		where: {
			user_name: req.params.userName
		},
		include: [models.Market, models.TreasureChest]
	})
	.then(function(user) {
		console.log('USER: ===>', user)
		res.send(user)
	})
}

////////////////
/////ROUTES/////
////////////////
router.route('/user')
	.post(addUser)
router.route('/user/:userId')
	.get(getUser)
router.route('/user/username/:userName')
	.get(getUserByUsername)
////////////////
///EXPORTS//////
////////////////
module.exports = router;