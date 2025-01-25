import express, { NextFunction, Request, Response } from "express";
import errorHandler from "../utils/errorhandler.utils";
import { globalErrorController } from "../controllers/error.controller";
import userRouter from "./user.route";
import challengeRouter from "./challenge.route";
import helpCenterRouter from "./help-center.routes";
import programRouter from "./program.routes";
import settingsRouter from "./setting.route";
import authRouter from "./auth.route";

const mainRouter = express.Router();

mainRouter.use("/user", userRouter);
mainRouter.use("/auth", authRouter);
mainRouter.use("/challenges", challengeRouter);
mainRouter.use("/programs", programRouter);
mainRouter.use("/help-center", helpCenterRouter);
mainRouter.use("/settings", settingsRouter);

mainRouter.all("*", (req: Request, res: Response, next: NextFunction) => {
  next(
    new errorHandler({
      message: `Failure connecting to the server!`,
      statusCode: 404,
    })
  );
});

mainRouter.use(globalErrorController);

export default mainRouter;
