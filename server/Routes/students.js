const router = require('express').Router();
const { Students } = require('../../db/models');

router.get('/', (req, res, next)=>{
	Students.findAll({include:[{all:true}]})
	.then(result => res.json(result));
});

router.get('/:id', (req, res, next)=>{
	const studentId = req.params.id;
	Students.findOne({
		where:{
			id:studentId
		},
		include:[{all:true}]
	})
	.then(result => res.json(result));
});

router.post('/', (req, res, next)=>{
	Students.create(req.body)
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
	.then(deletedStudent => res.json(deletedStudent))
})

module.exports = router;