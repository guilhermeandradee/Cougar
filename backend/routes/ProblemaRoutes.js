import { Router } from "express";
import ProblemaController from "../controllers/ProblemaController.js";
import ImportController from "../controllers/ImportController.js";


export const router = Router();


router.get('/problem/:id', ProblemaController.getOne)
router.delete('/problem/:id/delete', ProblemaController.removeProblem)
router.put('/problem/:id/update',ProblemaController.updateProblem)
router.get('/get-all-problems', ProblemaController.getAll)
router.post('/save-problem', ProblemaController.saveProblem)
router.post('/import-problems',ImportController.ImportProblems)
