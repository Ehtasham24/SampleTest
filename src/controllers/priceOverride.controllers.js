import {
  createPriceOverride,
  getActiveOverridesByItemId,
  updatePriceOverride,
  deletePriceOverride,
} from "../services/priceOverrides.services.js";

export const createOverride = async (req, res) => {
  try {
    const override = await createPriceOverride(req.body);
    res.status(201).json(override);
  } catch (error) {
    console.error("Error creating override:", error);
    res.status(500).json({ error: "Server error." });
  }
};

export const getOverrides = async (req, res) => {
  try {
    const { item_id } = req.params;
    const overrides = await getActiveOverridesByItemId(item_id);

    if (overrides.length === 0) {
      return res
        .status(404)
        .json({ message: "No active price overrides found." });
    }

    res.json(overrides);
  } catch (error) {
    console.error("Error fetching overrides:", error);
    res.status(500).json({ error: "Server error." });
  }
};

export const updateOverride = async (req, res) => {
  try {
    const updatedOverride = await updatePriceOverride(req.params.id, req.body);
    res.json(updatedOverride);
  } catch (error) {
    console.error("Error updating override:", error);
    res.status(500).json({ error: "Server error." });
  }
};

export const deleteOverride = async (req, res) => {
  try {
    const { id } = req.params;
    await deletePriceOverride(id);
    res.json({ message: "Price override deleted successfully." });
  } catch (error) {
    console.error("Error deleting override:", error);
    res.status(500).json({ error: "Server error." });
  }
};
