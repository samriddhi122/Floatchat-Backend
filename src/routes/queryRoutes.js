import express from "express";
import { getLocationData } from "../controllers/locationController.js";
import { getTimeSeries } from "../controllers/timeSeriesController.js";
import { getParameterData } from "../controllers/parameterController.js";
import { compareParameters } from "../controllers/compareController.js";
import { getStatistics } from "../controllers/statisticsController.js";
import { checkQuality } from "../controllers/qualityController.js";
import { getBGCData } from "../controllers/bgcController.js";
import { explainConcept } from "../controllers/explainController.js";

const router = express.Router();

router.get("/location", getLocationData);
router.get("/time-series", getTimeSeries);
router.get("/parameter", getParameterData);
router.get("/compare", compareParameters);
router.get("/statistics", getStatistics);
router.get("/quality-control", checkQuality);
router.get("/biogeochemical", getBGCData);
router.get("/explain", explainConcept);

export default router;
