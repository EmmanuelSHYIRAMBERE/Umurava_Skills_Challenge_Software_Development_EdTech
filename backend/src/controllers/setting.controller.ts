import { NextFunction, Request, Response } from "express";
import { SettingsService } from "../services/setting.service";
import { settingsValidationSchema } from "../utils/validators";
import errorHandler, { catchAsyncError } from "../utils/errorhandler.utils";

export class settingsController {
  private settingsService: SettingsService;

  constructor() {
    this.settingsService = new SettingsService();
  }

  public createSettings = catchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
      const userId = req.user._id;

      const { error } = settingsValidationSchema.validate(req.body, {
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

      // Append the userId to the request body
      req.body.userId = userId;

      const settings = await this.settingsService.CreateSettings(req.body);

      if (!settings) {
        return next(
          new errorHandler({
            message: "Failed to create settings",
            statusCode: 500,
          })
        );
      }

      res.status(201).json({ settings });
    }
  );

  public getSettings = catchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
      const userId = req.params.userId;
      const settings = await this.settingsService.GetSettingsByUserId(userId);

      if (!settings) {
        return next(
          new errorHandler({
            message: "Settings not found",
            statusCode: 404,
          })
        );
      }

      res.status(200).json({ settings });
    }
  );

  public updateSettings = catchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
      const userId = req.params.userId;
      const updateData = req.body;

      const { error } = settingsValidationSchema.validate(updateData, {
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

      const updatedSettings = await this.settingsService.UpdateSettings(
        userId,
        updateData
      );

      if (!updatedSettings) {
        return next(
          new errorHandler({
            message: "Settings not found",
            statusCode: 404,
          })
        );
      }

      res.status(200).json({ settings: updatedSettings });
    }
  );
}
