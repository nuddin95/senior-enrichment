const router = require('express').Router();
const { Students } = require('../../db/models');

router.get('/', (req, res, next)=>{
	Students.findAll({})
	.then(result => res.json(result));
});

router.get('/:id', (req, res, next)=>{
	const studentId = req.params.id;
	Students.findOne({
		where:{
			id:studentId
		}
	})
	.then(result => res.json(result));
});

router.post('/', (req, res, next)=>{
	const firstName = req.body.firstName;
	const lastName = req.body.lastName;
	const email = req.body.email;
	const campusId = req.body.campusId;
	//TRY AND USE REQ.BODY FOR CREATE ARGUMENT
	Students.create({
		firstName,
		lastName,
		email,
		campusId
	})
	.then(createdStudent => res.json(createdStudent));
});

router.put('/:id', (req, res, next)=>{
	Students.findById(req.params.id)
	.then(selectedStudent => selectedStudent.update(req.body))
	.then(updatedStudent => res.json(updatedStudent));
})

router.delete('/:id', (req, res, next)=>{
	Students.findById(req.params.id)
	.then(selectedStudent => selectedStudent.destroy())
	.then(deletedStudent => res.json(deletedStudent));
})







module.exports = router;