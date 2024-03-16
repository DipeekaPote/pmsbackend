const express = require('express')
const router = express.Router()

const {  getPipelines, getPipeline, createPipeline, updatePipeline, deletePipeline} = require('../../controllers/Workflow/pipelineTemplateController')



//*******************Pipeline START********************* */

//GET all Pipeline 

router.get('/pipeline', getPipelines)

//GET single Pipeline 

router.get('/pipeline/:id', getPipeline)

//POST a new Pipeline

router.post('/pipeline', createPipeline)

//Delete a new Pipeline

router.delete('/pipeline/:id', deletePipeline)

//PATCH UPDATE a Pipeline 

router.patch('/pipeline/:id', updatePipeline)

//*******************Pipeline END********************* */


module.exports = router
