import { Router } from "express";
import ProblemaController from "../controllers/ProblemaController.js";


export const router = Router();


router.get('/get-all-problems', ProblemaController.getAll)
router.post('/save-problem', ProblemaController.saveProblem)
router.delete('/delete-problem', ProblemaController.removeProblems)
