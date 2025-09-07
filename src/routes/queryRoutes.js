import express from "express";
import multer from "multer";
import { getLocationData } from "../controllers/locationController.js";
import { getTimeSeries } from "../controllers/timeSeriesController.js";
import { getParameterData } from "../controllers/parameterController.js";
import { compareParameters } from "../controllers/compareController.js";
import { getStatistics } from "../controllers/statisticsController.js";
import { checkQuality } from "../controllers/qualityController.js";
import { biogeochemical } from "../controllers/biogeochemicalController.js";
import { explainConcept } from "../controllers/explainController.js";

import { uploadController } from "../controllers/uploadController.js";


const router = express.Router();
const upload = multer(); 

router.get("/location", getLocationData);
router.get("/time-series", getTimeSeries);
router.get("/parameter", getParameterData);
router.get("/compare", compareParameters);
router.get("/statistics", getStatistics);
router.get("/quality-control", checkQuality);
router.get("/biogeochemical", biogeochemical);
router.get("/explain", explainConcept);

router.post("/upload", upload.single("file"), uploadController);


export default router;
