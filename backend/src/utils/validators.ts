import Joi from "joi";

// User validation schema
export const userValidationSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().valid("user", "admin").default("user"),
});

// Challenge validation schema
export const challengeValidationSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  skills: Joi.array().items(Joi.string()).required(),
  seniority: Joi.string().valid("Junior", "Intermediate", "Senior").required(),
  timeline: Joi.number().required(),
  moneyPrize: Joi.number().required(),
  isOpen: Joi.boolean().default(true),
  status: Joi.string().valid("open", "completed").default("open"),
  type: Joi.string().valid("Challenge", "Hackathon").required(),
});

// Settings validation schema
export const settingsValidationSchema = Joi.object({
  theme: Joi.string().valid("light", "dark").default("light"),
  language: Joi.string().default("en"),
});

// Help center validation schema
export const helpCenterValidationSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  category: Joi.string().required(),
});

// Program validation schema
export const programValidationSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  type: Joi.string().valid("Learning Institution", "Other").required(),
});
