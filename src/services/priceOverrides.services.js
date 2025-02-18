import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//post
export const createPriceOverride = async (data) => {
  return await prisma.priceOverrides.create({ data });
};

export const checkOverrideOverlap = async (
  item_id,
  valid_from,
  valid_to,
  excludeId = null
) => {
  return await prisma.priceOverrides.findFirst({
    where: {
      item_id: Number(item_id),
      NOT: excludeId ? { id: Number(excludeId) } : undefined,
      valid_from: { lte: new Date(valid_to) },
      valid_to: { gte: new Date(valid_from) },
    },
  });
};

//get
export const getActiveOverridesByItemId = async (item_id) => {
  return await prisma.priceOverrides.findMany({
    where: {
      item_id: Number(item_id),
      valid_from: { lte: new Date() },
      valid_to: { gte: new Date() },
    },
  });
};

//update
export const updatePriceOverride = async (id, data) => {
  return await prisma.priceOverrides.update({
    where: { id: Number(id) },
    data,
  });
};

// Delete
export const deletePriceOverride = async (id) => {
  return await prisma.priceOverrides.delete({
    where: { id: Number(id) },
  });
};
