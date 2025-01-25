import express from "express";
import { ChallengeController } from "../controllers/challenge.controller";
import { verifyAccessToken } from "../middlewares/tokenverification.middleware";

const challengeRouter = express.Router();

const challengeControllerInstance = new ChallengeController();

challengeRouter.post(
  "/",
  verifyAccessToken,
  challengeControllerInstance.createChallenge
);
challengeRouter.get(
  "/",
  verifyAccessToken,
  challengeControllerInstance.getChallenges
);
challengeRouter.get(
  "/:id",
  verifyAccessToken,
  challengeControllerInstance.getChallengeById
);
challengeRouter.put(
  "/:id",
  verifyAccessToken,
  challengeControllerInstance.updateChallenge
);
challengeRouter.delete(
  "/:id",
  verifyAccessToken,
  challengeControllerInstance.deleteChallenge
);

export default challengeRouter;
