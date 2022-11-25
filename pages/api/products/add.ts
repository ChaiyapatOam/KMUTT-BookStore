import type { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { prisma } from "../../../lib/prisma";
const addProduct = async () => {};
const handler = nc({ attachParams: true }).get(addProduct);

export default handler;
