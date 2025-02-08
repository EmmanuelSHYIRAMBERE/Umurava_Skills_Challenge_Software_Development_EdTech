"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const crypto_1 = __importDefault(require("crypto"));
const user_services_1 = require("../services/user.services");
const validators_1 = require("../utils/validators");
const password_utils_1 = require("../utils/password.utils");
const errorhandler_utils_1 = __importStar(require("../utils/errorhandler.utils"));
const models_1 = require("../models");
class userController {
    constructor() {
        this.createUser = (0, errorhandler_utils_1.catchAsyncError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log("Request", req);
            const { error } = validators_1.userValidationSchema.validate(req.body, {
                abortEarly: false,
            });
            if (error) {
                const errorMessage = error.details.map((err) => err.message).join(", ");
                return next(new errorhandler_utils_1.default({
                    message: errorMessage,
                    statusCode: 400,
                }));
            }
            const { email, password } = req.body;
            const userExists = yield this.userService.GetUserByEmail(email);
            if (userExists) {
                return next(new errorhandler_utils_1.default({
                    message: "User with this account already exists",
                    statusCode: 401,
                }));
            }
            let hashedPwd = "";
            hashedPwd = yield (0, password_utils_1.hashPassword)(password);
            req.body.password = hashedPwd;
            const newUser = yield this.userService.CreateUser(req.body);
            if (!newUser || !newUser._id) {
                return next(new errorhandler_utils_1.default({
                    message: "Failed to create user",
                    statusCode: 500,
                }));
            }
            // Send verification email
            yield this.sendVerificationEmail(newUser);
            // Store user email in cookie for 1 hour
            res.cookie("userEmail", newUser.email || "", {
                maxAge: 3600000,
                httpOnly: true,
            });
            res.status(201).json({
                message: "User created. Please check your email for verification.",
                user: {
                    userId: newUser._id,
                    email: newUser.email,
                    name: newUser.name,
                    role: newUser.role,
                },
            });
        }));
        this.getUsers = (0, errorhandler_utils_1.catchAsyncError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userService.GetAllUsers();
            res.status(200).json({ users });
        }));
        this.getUserById = (0, errorhandler_utils_1.catchAsyncError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const userId = req.params.id;
            const user = yield this.userService.GetUserById(userId);
            if (!user) {
                return next(new errorhandler_utils_1.default({
                    message: "User not found",
                    statusCode: 404,
                }));
            }
            res.status(200).json({ user });
        }));
        this.updateUser = (0, errorhandler_utils_1.catchAsyncError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const userId = req.params.id;
            const updateData = req.body;
            if (updateData.password) {
                updateData.password = yield (0, password_utils_1.hashPassword)(updateData.password);
            }
            const updatedUser = yield this.userService.UpdateUser(userId, updateData);
            if (!updatedUser) {
                return next(new errorhandler_utils_1.default({
                    message: "User not found",
                    statusCode: 404,
                }));
            }
            res.status(200).json({ user: updatedUser });
        }));
        this.deleteUser = (0, errorhandler_utils_1.catchAsyncError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const userId = req.params.id;
            const deletedUser = yield this.userService.DeleteUser(userId);
            if (!deletedUser) {
                return next(new errorhandler_utils_1.default({
                    message: "User not found",
                    statusCode: 404,
                }));
            }
            res.status(200).send("deleted successfully");
        }));
        this.resendToken = (0, errorhandler_utils_1.catchAsyncError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { email } = req.body;
            const user = yield this.userService.GetUserByEmail(email);
            if (!user) {
                return next(new errorhandler_utils_1.default({
                    message: "User not found",
                    statusCode: 404,
                }));
            }
            yield this.sendVerificationEmail(user);
            res.status(200).json({ message: "Verification email sent successfully" });
        }));
        this.userService = new user_services_1.UserService();
    }
    sendVerificationEmail(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Generate OTP
                const otp = crypto_1.default.randomInt(100000, 999999).toString();
                const otpExpiry = new Date();
                otpExpiry.setMinutes(otpExpiry.getMinutes() + 10); // 10 minutes expiry
                let config = {
                    service: "gmail",
                    auth: {
                        user: process.env.GOOGLE_EMAIL,
                        pass: process.env.GOOGLE_PASSWORD,
                    },
                    tls: {
                        rejectUnauthorized: false,
                    },
                };
                let transporter = nodemailer_1.default.createTransport(config);
                let message = {
                    from: `UMURAVA - Build Work Experience through Skills Challenges Program<${process.env.GOOGLE_EMAIL}>`,
                    to: user.email,
                    subject: "Account Creation - UMURAVA Email Verification",
                    html: `
      <!DOCTYPE>
      <html dir="ltr" lang="en">

        <head>
          <link rel="preload" as="image" href="https://umurava.africa/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftransparent.718f0220.png&w=384&q=75" />
          <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
          <meta name="x-apple-disable-message-reformatting" /><!--$-->
        </head>
        <div style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">UMURAVA Email Verification<div> ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿</div>
        </div>

        <body style="background-color:#fff;color:#212121">
          <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:37.5em;padding:20px;margin:0 auto;background-color:#eee">
            <tbody>
              <tr style="width:100%">
                <td>
                  <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="background-color:#fff">
                    <tbody>
                      <tr>
                        <td>
                          <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="background-color:#252f3d;display:flex;padding:20px 0;align-items:center;justify-content:center">
                            <tbody>
                              <tr>
                                <td><img alt="UMURAVA&#x27;s Logo" height="45" src="https://umurava.africa/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftransparent.718f0220.png&w=384&q=75" style="display:block;outline:none;border:none;text-decoration:none" width="75" /></td>
                              </tr>
                            </tbody>
                          </table>
                          <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding:25px 35px">
                            <tbody>
                              <tr>
                                <td>
                                  <h1 style="color:#333;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif;font-size:20px;font-weight:bold;margin-bottom:15px">Dear ${user.name ? user.name : "valuable user"},</h1>
                                  <p style="font-size:14px;line-height:24px;margin:24px 0;color:#333;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif;margin-bottom:14px">Thanks for starting the new account creation process. We want to make sure it&#x27;s really you. Please enter the following verification code when prompted. If you don&#x27;t want to create an account, you can ignore this message.</p>
                                  <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="display:flex;align-items:center;justify-content:center">
                                    <tbody>
                                      <tr>
                                        <td>
                                          <p style="font-size:14px;line-height:24px;margin:0;color:#333;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif;font-weight:bold;text-align:center">Verification code</p>
                                          <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="background:rgba(0,0,0,.05);border-radius:4px;margin:16px auto 14px;vertical-align:middle;width:280px">
                                            <tbody>
                                              <tr>
                                                <td>
                                                  <p style="font-size:32px;line-height:40px;margin:0 auto;color:#000;display:inline-block;font-family:HelveticaNeue-Bold;font-weight:700;letter-spacing:6px;padding-bottom:8px;padding-top:8px;width:100%;text-align:center">${otp}</p>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          <p style="font-size:14px;line-height:24px;margin:0px;color:#333;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif;text-align:center">(This code is valid for 10 minutes)</p>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <hr style="width:100%;border:none;border-top:1px solid #eaeaea" />
                          <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding:25px 35px">
                            <tbody>
                              <tr>
                                <td>
                                  <p style="font-size:14px;line-height:24px;margin:0px;color:#333;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif">If you did not create an account, please ignore this email. No changes will be made to your account.</p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p style="font-size:12px;line-height:24px;margin:24px 0;color:#333;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif;padding:0 20px">This message was produced and distributed by UMURAVA  © ${new Date().getFullYear()}.</p>
                </td>
              </tr>
            </tbody>
          </table><!--/$-->
        </body>

      </html>
        `,
                };
                // Update user with OTP and expiry
                yield models_1.User.findByIdAndUpdate(user._id, {
                    otp,
                    otpexpire: otpExpiry,
                });
                // Send email
                yield transporter.sendMail(message);
            }
            catch (error) {
                console.error("Error sending verification email:", error);
                throw new Error("Failed to send verification email");
            }
        });
    }
}
exports.userController = userController;
//# sourceMappingURL=user.controller.js.map