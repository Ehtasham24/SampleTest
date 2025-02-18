import { checkOverrideOverlap } from "../services/priceOverrides.services.js";

export const validateOverrideTimeRange = async (req, res, next) => {
  try {
    const { item_id, valid_from, valid_to } = req.body;
    const overrideId = req.params.id ? Number(req.params.id) : null;

    const existingOverride = await checkOverrideOverlap(
      item_id,
      valid_from,
      valid_to,
      overrideId
    );

    if (existingOverride) {
      return res.status(400).json({
        error: "Time range conflict with existing override",
        conflict: {
          id: existingOverride.id,
          valid_from: existingOverride.valid_from,
          valid_to: existingOverride.valid_to,
        },
      });
    }

    next();
  } catch (error) {
    console.error("Validation error:", error);
    res.status(500).json({ error: "Server error during validation" });
  }
};
