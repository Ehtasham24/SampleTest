import { body, validationResult } from "express-validator";

export const priceOverrideValidationRules = () => {
  return [
    body("item_id")
      .isInt({ gt: 0 })
      .withMessage("item_id must be a positive integer"),
    body("override_price")
      .isDecimal()
      .withMessage("override_price must be a decimal")
      .custom((value) => {
        if (parseFloat(value) < 0) {
          throw new Error("override_price must be a positive value");
        }
        return true;
      }),
    body("valid_from")
      .isISO8601()
      .withMessage("valid_from must be a valid ISO8601 date"),
    body("valid_to")
      .isISO8601()
      .withMessage("valid_to must be a valid ISO8601 date"),
  ];
};

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(422).json({ errors: errors.array() });
};
