const router = require('express').Router();
const { Campuses } = require('../../db/models');

router.get('/', (req, res, next)=>{
	Campuses.findAll({})
	.then(result => res.json(result));
});

router.get('/:id', (req, res, next)=>{
	const campusId = req.params.id;
	Campuses.findOne({
		where:{
			id:campusId
		}
	})
	.then(result => res.json(result));
});

router.post('/', (req, res, next)=>{
	Campuses.create(req.body)
	.then(createdCampus => res.json(createdCampus));
});

router.put('/:id', (req, res, next)=>{
	Campuses.findById(req.params.id)
	.then(selectedCampus => selectedCampus.update(req.body))
	.then(updatedCampus => res.json(updatedCampus));
})

router.delete('/:id', (req, res, next)=>{
	Campuses.findById(req.params.id)
	.then(selectedCampus => selectedCampus.destroy())
	.then(deletedCampus => res.json(deletedCampus));
})

module.exports = router;