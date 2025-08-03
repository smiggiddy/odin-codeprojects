// import { PrismaClient } from "";
import {
  PrismaClient,
  Prisma,
} from "../../node_modules/.prisma/generated/client";

const prisma = new PrismaClient();

export default prisma;
export { Prisma };
