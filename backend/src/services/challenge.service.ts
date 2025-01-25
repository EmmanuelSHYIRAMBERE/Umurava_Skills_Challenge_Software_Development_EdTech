import { IChallenge, Challenge } from "../models/challenge.model";

export class ChallengeService {
  public async createChallenge(challengeData: IChallenge) {
    const newChallenge = await Challenge.create(challengeData);
    return newChallenge;
  }

  public async getAllChallenges() {
    const allChallenges = await Challenge.find({});
    return allChallenges;
  }

  public async getChallengeById(challengeId: string) {
    const challenge = await Challenge.findById(challengeId);
    return challenge;
  }

  public async updateChallenge(
    challengeId: string,
    updateData: Partial<IChallenge>
  ) {
    const updatedChallenge = await Challenge.findByIdAndUpdate(
      challengeId,
      updateData,
      {
        new: true,
      }
    );
    return updatedChallenge;
  }

  public async deleteChallenge(challengeId: string) {
    const deletedChallenge = await Challenge.findByIdAndDelete(challengeId);
    return deletedChallenge;
  }
}
