import { Request, Response, NextFunction } from "express";
import { ProgramService } from "../services/program.service";
import { IProgram } from "../models/program.model";
import errorHandler, { catchAsyncError } from "../utils/errorhandler.utils";

export class ProgramController {
  private programService: ProgramService;

  constructor() {
    this.programService = new ProgramService();
  }

  public createProgram = catchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
      const programData: IProgram = req.body;
      const newProgram = await this.programService.createProgram(programData);
      res.status(201).json({ program: newProgram });
    }
  );

  public getPrograms = catchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
      const programs = await this.programService.getPrograms();
      res.status(200).json({ programs });
    }
  );

  public getProgramById = catchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
      const programId = req.params.id;
      const program = await this.programService.getProgramById(programId);
      if (!program) {
        return next(
          new errorHandler({ message: "Program not found", statusCode: 404 })
        );
      }
      res.status(200).json({ program });
    }
  );

  public updateProgram = catchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
      const programId = req.params.id;
      const updateData: Partial<IProgram> = req.body;
      const updatedProgram = await this.programService.updateProgram(
        programId,
        updateData
      );
      if (!updatedProgram) {
        return next(
          new errorHandler({ message: "Program not found", statusCode: 404 })
        );
      }
      res.status(200).json({ program: updatedProgram });
    }
  );

  public deleteProgram = catchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
      const programId = req.params.id;
      const deletedProgram = await this.programService.deleteProgram(programId);
      if (!deletedProgram) {
        return next(
          new errorHandler({ message: "Program not found", statusCode: 404 })
        );
      }
      res.status(200).json({ message: "Program deleted successfully" });
    }
  );
}
