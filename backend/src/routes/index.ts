import express, { NextFunction, Request, Response } from "express";
import errorHandler from "../utils/errorhandler.utils";
import { globalErrorController } from "../controllers/error.controller";

const mainRouter = express.Router();

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
