import express from "express";
import {
  createOverride,
  getOverrides,
  updateOverride,
  deleteOverride,
} from "../controllers/priceOverride.controllers.js";
import { validateOverrideTimeRange } from "../middlewares/overrideValidation.middleware.js";
import {
  authenticateToken,
  authorizeAdmin,
} from "../middlewares/auth.middleware.js";
import {
  priceOverrideValidationRules,
  validate,
} from "../validators/priceOverride.validators.js";

const router = express.Router();

router.get("/price-overrides/:item_id", getOverrides);

// Protected
router.post(
  "/price-overrides",
  authenticateToken,
  authorizeAdmin,
  priceOverrideValidationRules(),
  validate,
  validateOverrideTimeRange,
  createOverride
);

router.put(
  "/price-overrides/:id",
  authenticateToken,
  authorizeAdmin,
  priceOverrideValidationRules(),
  validate,
  validateOverrideTimeRange,
  updateOverride
);

router.delete(
  "/price-overrides/:id",
  authenticateToken,
  authorizeAdmin,
  deleteOverride
);

export default router;
