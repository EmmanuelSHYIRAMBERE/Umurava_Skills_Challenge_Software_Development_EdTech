import express from "express";
import { HelpCenterController } from "../controllers/help-center.controller";

const helpCenterRouter = express.Router();
const helpCenterController = new HelpCenterController();

helpCenterRouter.post("/", helpCenterController.createHelpCenterItem);
helpCenterRouter.get("/", helpCenterController.getHelpCenterItems);
helpCenterRouter.get("/:id", helpCenterController.getHelpCenterItemById);
helpCenterRouter.put("/:id", helpCenterController.updateHelpCenterItem);
helpCenterRouter.delete("/:id", helpCenterController.deleteHelpCenterItem);

export default helpCenterRouter;
