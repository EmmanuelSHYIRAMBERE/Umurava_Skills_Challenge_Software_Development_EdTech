import { NextFunction, Request, Response } from "express";
import { ChallengeService } from "../services/challenge.service";
import { challengeValidationSchema } from "../utils/validators";
import errorHandler, { catchAsyncError } from "../utils/errorhandler.utils";

export class ChallengeController {
  private challengeService: ChallengeService;

  constructor() {
    this.challengeService = new ChallengeService();
  }

  public createChallenge = catchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
      const { error } = challengeValidationSchema.validate(req.body, {
        abortEarly: false,
      });

      if (error) {
        const errorMessage = error.details.map((err) => err.message).join(", ");
        return next(
          new errorHandler({
            message: errorMessage,
            statusCode: 400,
          })
        );
      }

      const challenge = await this.challengeService.createChallenge(req.body);

      if (!challenge || !challenge._id) {
        return next(
          new errorHandler({
            message: "Failed to create challenge",
            statusCode: 500,
          })
        );
      }

      res.status(201).json({ challenge });
    }
  );

  public getOpenChallenges = catchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
      const challenges = await this.challengeService.getOpenChallenges();
      res.status(200).json({ challenges });
    }
  );

  public getChallenges = catchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
      const challenges = await this.challengeService.getAllChallenges();
      res.status(200).json({ challenges });
    }
  );

  public getChallengeById = catchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
      const challengeId = req.params.id;
      const challenge = await this.challengeService.getChallengeById(
        challengeId
      );

      if (!challenge) {
        return next(
          new errorHandler({
            message: "Challenge not found",
            statusCode: 404,
          })
        );
      }

      res.status(200).json({ challenge });
    }
  );

  public updateChallenge = catchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
      const challengeId = req.params.id;
      const updateData = req.body;

      const { error } = challengeValidationSchema.validate(updateData, {
        abortEarly: false,
      });

      if (error) {
        const errorMessage = error.details.map((err) => err.message).join(", ");
        return next(
          new errorHandler({
            message: errorMessage,
            statusCode: 400,
          })
        );
      }

      const updatedChallenge = await this.challengeService.updateChallenge(
        challengeId,
        updateData
      );

      if (!updatedChallenge) {
        return next(
          new errorHandler({
            message: "Challenge not found",
            statusCode: 404,
          })
        );
      }

      res.status(200).json({ challenge: updatedChallenge });
    }
  );

  public deleteChallenge = catchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
      const challengeId = req.params.id;
      const deletedChallenge = await this.challengeService.deleteChallenge(
        challengeId
      );

      if (!deletedChallenge) {
        return next(
          new errorHandler({
            message: "Challenge not found",
            statusCode: 404,
          })
        );
      }

      res.status(200).send("Challenge deleted successfully");
    }
  );
}
