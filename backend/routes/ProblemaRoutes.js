import { Router } from "express";
import ProblemaController from "../controllers/ProblemaController.js";


export const router = Router();


router.get('/problem/:id', ProblemaController.getOne)
router.delete('/problem/:id/delete', ProblemaController.removeProblems)
router.put('/problem/:id/update',ProblemaController.updateProblem)
router.get('/get-all-problems', ProblemaController.getAll)
router.post('/save-problem', ProblemaController.saveProblem)
