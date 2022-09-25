import express from "express";
import { checkToken } from "../util/middleware.js";
import prisma from "../../prisma/client.js";

const router = express.Router();
const endpoint = "/users";

// Guide: https://www.prisma.io/docs/concepts/components/prisma-client/crud

router.get(`${endpoint}`, checkToken, async (req, res, next) => {
  try {
    const { skip, take, ...rest } = req.query;
    // "skip" and "take" are for pagination,
    // see https://www.prisma.io/docs/concepts/components/prisma-client/pagination

    const conditions = [];
    for (const key in rest) {
      conditions.push({
        [key]: { contains: rest[key] },
      });
    }

    const filter =
      conditions.length > 0
        ? {
            AND: conditions,
          }
        : {};

    const data = await prisma.user.findMany({
      where: filter,
      take: Number(take) || undefined,
      skip: Number(skip) || undefined,
    });

    res.json({
      message: `Successfully retrieved ${data.length} users!`,
      data: data,
    });
  } catch (err) {
    next(err);
  }
});

router.get(`${endpoint}/:id`, checkToken, async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const data = await prisma.user.findUniqueOrThrow({
      where: { id }
    });
    res.json({
      message: `Successfully retrieved the following user!`,
      data: data,
    });
  } catch (err) {
    next(err);
  }
});

router.post(`${endpoint}`, checkToken, async (req, res, next) => {
  try {
    const attributes = req.body;
    const data = await prisma.user.create({
      data: attributes,
    });
    res.status(201).json({
      message: `Successfully created the following user!`,
      data: data,
    });
  } catch (err) {
    next(err);
  }
});

router.put(`${endpoint}/:id`, checkToken, async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const attributes = req.body;
    const data = await prisma.user.update({
      where: { id },
      data: attributes,
    });
    res.json({
      message: `Successfully updated the following user!`,
      data: data,
    });
  } catch (err) {
    next(err);
  }
});

router.delete(`${endpoint}/:id`, checkToken, async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const data = await prisma.user.delete({
      where: { id },
    });
    res.json({
      message: `Successfully deleted the following user!`,
      data: data,
    });
  } catch (err) {
    next(err);
  }
});

export default router;