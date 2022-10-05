import { db } from "./db";
import { PrismaClient } from "@prisma/client";

export interface context {
  db: PrismaClient;
}

export const context = {
  db,
};
