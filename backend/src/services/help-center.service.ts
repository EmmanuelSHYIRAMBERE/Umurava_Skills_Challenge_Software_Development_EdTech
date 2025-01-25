import { IHelpCenter, HelpCenter } from "../models/help-center.model";

export class HelpCenterService {
  public async createHelpCenterItem(
    data: Omit<IHelpCenter, "_id" | "createdAt" | "updatedAt">
  ): Promise<IHelpCenter> {
    const newHelpCenterItem = await HelpCenter.create(data);
    return newHelpCenterItem;
  }

  public async getHelpCenterItems(): Promise<IHelpCenter[]> {
    const helpCenterItems = await HelpCenter.find({});
    return helpCenterItems;
  }

  public async getHelpCenterItemById(id: string): Promise<IHelpCenter | null> {
    const helpCenterItem = await HelpCenter.findById(id);
    return helpCenterItem;
  }

  public async updateHelpCenterItem(
    id: string,
    data: Partial<Omit<IHelpCenter, "_id" | "createdAt" | "updatedAt">>
  ): Promise<IHelpCenter | null> {
    const updatedHelpCenterItem = await HelpCenter.findByIdAndUpdate(id, data, {
      new: true,
    });
    return updatedHelpCenterItem;
  }

  public async deleteHelpCenterItem(id: string): Promise<IHelpCenter | null> {
    const deletedHelpCenterItem = await HelpCenter.findByIdAndDelete(id);
    return deletedHelpCenterItem;
  }
}
