import express from "express";
import { ProgramController } from "../controllers/program.controller";
import { verifyAccessToken } from "../middlewares/tokenverification.middleware";
import { adminauthorization } from "../middlewares/adminverification.middleware";

const programRouter = express.Router();
const programController = new ProgramController();

programRouter.post(
  "/",
  verifyAccessToken,
  adminauthorization,
  programController.createProgram
);
programRouter.get("/", verifyAccessToken, programController.getPrograms);
programRouter.get("/:id", verifyAccessToken, programController.getProgramById);
programRouter.put(
  "/:id",
  verifyAccessToken,
  adminauthorization,
  programController.updateProgram
);
programRouter.delete(
  "/:id",
  verifyAccessToken,
  adminauthorization,
  programController.deleteProgram
);

export default programRouter;
