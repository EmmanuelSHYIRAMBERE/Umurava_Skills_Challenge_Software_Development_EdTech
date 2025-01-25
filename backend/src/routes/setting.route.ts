import express from "express";
import { settingsController } from "../controllers/setting.controller";
import { verifyAccessToken } from "../middlewares/tokenverification.middleware";

const settingsRouter = express.Router();

const settingsControllerInstance = new settingsController();

settingsRouter.post(
  "/",
  verifyAccessToken,
  settingsControllerInstance.createSettings
);

settingsRouter.get(
  "/:userId",
  verifyAccessToken,
  settingsControllerInstance.getSettings
);

settingsRouter.put(
  "/:userId",
  verifyAccessToken,
  settingsControllerInstance.updateSettings
);

export default settingsRouter;
