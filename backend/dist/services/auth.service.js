"use strict";
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
const crypto_1 = __importDefault(require("crypto"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const user_model_1 = require("../models/user.model");
const errorhandler_utils_1 = __importDefault(require("../utils/errorhandler.utils"));
const password_utils_1 = require("../utils/password.utils");
const token_utils_1 = require("../utils/token.utils");
class AuthService {
    sendPasswordResetEmail(user) {
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
                    subject: "Password Reset Request",
                    html: `
        <!DOCTYPE html>
<html dir="ltr" lang="en">
  <head>
    <link rel="preload" as="image" href="https://umurava.africa/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftransparent.718f0220.png&w=384&q=75" />
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
  </head>
  <div style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">
    UMURAVA Password Reset Request
    <div> ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ </div>
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
                          <td><img alt="UMURAVA's Logo" height="45" src="https://umurava.africa/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftransparent.718f0220.png&w=384&q=75" style="display:block;outline:none;border:none;text-decoration:none" width="75" /></td>
                        </tr>
                      </tbody>
                    </table>
                    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding:25px 35px">
                      <tbody>
                        <tr>
                          <td>
                            <h1 style="color:#333;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;font-size:20px;font-weight:bold;margin-bottom:15px">Dear ${user.name ? user.name : "valuable user"},</h1>
                            <p style="font-size:14px;line-height:24px;margin:24px 0;color:#333;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;margin-bottom:14px">We received a request to reset your password. Please enter the following verification code to reset your password. If you didn't request this change, you can ignore this message.</p>
                            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="display:flex;align-items:center;justify-content:center">
                              <tbody>
                                <tr>
                                  <td>
                                    <p style="font-size:14px;line-height:24px;margin:0;color:#333;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;font-weight:bold;text-align:center">Password Reset Code</p>
                                    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="background:rgba(0,0,0,.05);border-radius:4px;margin:16px auto 14px;vertical-align:middle;width:280px">
                                      <tbody>
                                        <tr>
                                          <td>
                                            <p style="font-size:32px;line-height:40px;margin:0 auto;color:#000;display:inline-block;font-family:HelveticaNeue-Bold;font-weight:700;letter-spacing:6px;padding-bottom:8px;padding-top:8px;width:100%;text-align:center">${otp}</p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <p style="font-size:14px;line-height:24px;margin:0px;color:#333;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;text-align:center">(This code is valid for 10 minutes)</p>
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
                            <p style="font-size:14px;line-height:24px;margin:0px;color:#333;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif">If you didn't request a password reset, please ignore this email or contact support if you have concerns about your account security.</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style="font-size:12px;line-height:24px;margin:24px 0;color:#333;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;padding:0 20px">This message was produced and distributed by UMURAVA © ${new Date().getFullYear()}.</p>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
          `,
                };
                // Update user with OTP and expiry
                yield user_model_1.User.findByIdAndUpdate(user._id, {
                    otp,
                    otpexpire: otpExpiry,
                });
                // Send email
                yield transporter.sendMail(message);
            }
            catch (error) {
                console.error("Error sending password reset email:", error);
                throw new Error("Failed to send password reset email");
            }
        });
    }
    generateOTP(expiryMinutes = 10) {
        const otp = crypto_1.default.randomInt(100000, 999999);
        const expiryTime = new Date();
        expiryTime.setMinutes(expiryTime.getMinutes() + expiryMinutes);
        return {
            code: otp.toString(),
            expiresAt: expiryTime,
        };
    }
    verifyEmail(email, otp) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_model_1.User.findOne({ email });
            if (!user) {
                throw new errorhandler_utils_1.default({ message: "User not found", statusCode: 404 });
            }
            if (user.otp !== otp) {
                throw new errorhandler_utils_1.default({
                    message: `Dear user the otp entered  ${otp} is not correct`,
                    statusCode: 401,
                });
            }
            const currentDateTime = new Date();
            if (user.otpexpire && currentDateTime > user.otpexpire) {
                throw new errorhandler_utils_1.default({
                    message: `The provided otp has been expired, please try again.`,
                    statusCode: 401,
                });
            }
            user.verified = true;
            yield user.save();
            return user;
        });
    }
    logIn(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_model_1.User.findOne({ email });
            if (!user) {
                throw new errorhandler_utils_1.default({ message: `User not found`, statusCode: 404 });
            }
            let isPwdMatch = yield (0, password_utils_1.comparePassword)(password, user.password);
            if (!isPwdMatch) {
                throw new errorhandler_utils_1.default({
                    message: `Incorrect password. Please try again.`,
                    statusCode: 401,
                });
            }
            const { _id, name, phone, role } = user;
            const accessToken = (0, token_utils_1.generateAccessToken)({ _id, email });
            const refreshToken = (0, token_utils_1.generateRefreshToken)({ _id, email });
            return {
                accessToken,
                refreshToken,
                user: { userId: _id, email, name, phone, role },
            };
        });
    }
    changePassword(userId, existingPassword, newPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_model_1.User.findById(userId);
            if (!user) {
                throw new errorhandler_utils_1.default({
                    message: "Please log in first!",
                    statusCode: 400,
                });
            }
            let pwdCheck = yield (0, password_utils_1.comparePassword)(existingPassword, user.password);
            if (!pwdCheck) {
                throw new errorhandler_utils_1.default({
                    message: "Incorrect password. Please try again.",
                    statusCode: 401,
                });
            }
            let hashedPwd = yield (0, password_utils_1.hashPassword)(newPassword);
            user.password = hashedPwd;
            yield user.save();
        });
    }
    forgotPassword(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_model_1.User.findOne({ email });
            if (!user) {
                throw new errorhandler_utils_1.default({
                    message: `We could not find the user with email: ${email}`,
                    statusCode: 404,
                });
            }
            const resetPasswordOTP = this.generateOTP().code;
            user.otp = resetPasswordOTP;
            user.otpexpire = this.generateOTP().expiresAt;
            yield user.save();
            yield this.sendPasswordResetEmail(user);
            return resetPasswordOTP;
        });
    }
    resetPassword(email, otp, newPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_model_1.User.findOne({ email });
            if (!user) {
                throw new errorhandler_utils_1.default({
                    message: `user with the email: ${email} not exists, try others`,
                    statusCode: 409,
                });
            }
            if (user.otp !== otp) {
                throw new errorhandler_utils_1.default({
                    message: `Dear user the otp entered ${otp} is not correct`,
                    statusCode: 401,
                });
            }
            const { otpexpire } = user;
            const currentDateTime = new Date();
            if (otpexpire && otpexpire < currentDateTime) {
                throw new errorhandler_utils_1.default({
                    message: `The provided otp: ${otp} has been expired, please try again.`,
                    statusCode: 401,
                });
            }
            let hashedPwd = yield (0, password_utils_1.hashPassword)(newPassword);
            user.password = hashedPwd;
            user.otp = null;
            user.otpexpire = null;
            yield user.save();
            return (0, token_utils_1.generateAccessToken)({ _id: user._id, email: user.email });
        });
    }
    logout(req, res) {
        res.clearCookie("refreshToken");
        res.clearCookie("accessToken");
        req.token = {};
    }
}
exports.default = AuthService;
//# sourceMappingURL=auth.service.js.map