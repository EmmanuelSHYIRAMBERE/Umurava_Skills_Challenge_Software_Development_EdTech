import { ISettings, Settings } from "../models/setting.model";

export class SettingsService {
  public async CreateSettings(settingsData: ISettings) {
    const { userId } = settingsData;

    // Check if settings already exist for this user
    const existingSettings = await Settings.findOne({ userId });

    if (existingSettings) {
      throw new Error("Settings already exist for this user");
    }

    const newSettings = await Settings.create(settingsData);
    return newSettings;
  }

  public async GetSettingsByUserId(userId: string) {
    const settings = await Settings.findOne({ userId });
    return settings;
  }

  public async UpdateSettings(userId: string, updateData: Partial<ISettings>) {
    const updatedSettings = await Settings.findOneAndUpdate(
      { userId },
      updateData,
      { new: true }
    );
    return updatedSettings;
  }
}
