import { Request, Response, NextFunction } from "express";
import { HelpCenterService } from "../services/help-center.service";

export class HelpCenterController {
  private helpCenterService: HelpCenterService;

  constructor() {
    this.helpCenterService = new HelpCenterService();
  }

  public createHelpCenterItem = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const newHelpCenterItem =
        await this.helpCenterService.createHelpCenterItem(req.body);
      res.status(201).json(newHelpCenterItem);
    } catch (error) {
      next(error);
    }
  };

  public getHelpCenterItems = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const helpCenterItems = await this.helpCenterService.getHelpCenterItems();
      res.status(200).json(helpCenterItems);
    } catch (error) {
      next(error);
    }
  };

  public getHelpCenterItemById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { id } = req.params;
      const helpCenterItem = await this.helpCenterService.getHelpCenterItemById(
        id
      );
      if (!helpCenterItem) {
        res.status(404).json({ message: "Help Center item not found" });
        return;
      }
      res.status(200).json(helpCenterItem);
    } catch (error) {
      next(error);
    }
  };

  public updateHelpCenterItem = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { id } = req.params;
      const updatedHelpCenterItem =
        await this.helpCenterService.updateHelpCenterItem(id, req.body);
      if (!updatedHelpCenterItem) {
        res.status(404).json({ message: "Help Center item not found" });
        return;
      }
      res.status(200).json(updatedHelpCenterItem);
    } catch (error) {
      next(error);
    }
  };

  public deleteHelpCenterItem = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { id } = req.params;
      const deletedHelpCenterItem =
        await this.helpCenterService.deleteHelpCenterItem(id);
      if (!deletedHelpCenterItem) {
        res.status(404).json({ message: "Help Center item not found" });
        return;
      }
      res.status(200).json({ message: "Help Center item deleted" });
    } catch (error) {
      next(error);
    }
  };
}
