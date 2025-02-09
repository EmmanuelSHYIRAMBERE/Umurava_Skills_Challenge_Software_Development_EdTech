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
exports.UserService = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const user_model_1 = require("../models/user.model");
class UserService {
    sendWelcomeEmail(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
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
                    subject: "Welcome to UMURAVA Skills Challenge Program",
                    html: `
        <!DOCTYPE html>
<html dir="ltr" lang="en">
  <head>
    <link rel="preload" as="image" href="https://umurava.africa/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftransparent.718f0220.png&w=384&q=75" />
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
  </head>
  <div style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">
    Welcome to UMURAVA Skills Challenge Program
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
                            <h1 style="color:#333;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;font-size:20px;font-weight:bold;margin-bottom:15px">Welcome aboard, ${user.name ? user.name : "valuable member"}!</h1>
                            <p style="font-size:14px;line-height:24px;margin:24px 0;color:#333;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;margin-bottom:14px">We're thrilled to have you join the UMURAVA Skills Challenge Program! You're now part of a community dedicated to building real-world experience through exciting challenges and projects.</p>
                            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="display:flex;align-items:center;justify-content:center">
                              <tbody>
                                <tr>
                                  <td>
                                    <p style="font-size:14px;line-height:24px;margin:0;color:#333;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;font-weight:bold;text-align:center">Your Adventure Begins Now!</p>
                                    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="margin:16px auto 14px;vertical-align:middle;width:280px">
                                      <tbody>
                                        <tr>
                                          <td>
                                            <p style="font-size:14px;line-height:24px;margin:0 auto;color:#333;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;text-align:center">Here's what you can do next:</p>
                                            <ul style="font-size:14px;line-height:24px;color:#333;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;margin-top:12px">
                                              <li>Complete your profile</li>
                                              <li>Browse available challenges</li>
                                              <li>Join your first project</li>
                                            </ul>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
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
                            <p style="font-size:14px;line-height:24px;margin:0px;color:#333;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif">Need help getting started? Don't hesitate to reach out to our support team. We're here to help you succeed!</p>
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
                // Send email
                yield transporter.sendMail(message);
            }
            catch (error) {
                console.error("Error sending welcome email:", error);
                throw new Error("Failed to send challenge email");
            }
        });
    }
    CreateUser(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = userData;
            const existingUser = yield user_model_1.User.findOne({ email: email });
            if (existingUser) {
                throw new Error("User already exists");
            }
            const newUser = yield user_model_1.User.create(userData);
            yield this.sendWelcomeEmail(newUser);
            return newUser;
        });
    }
    GetUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_model_1.User.findOne({ email: email });
            return user;
        });
    }
    GetAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const allUsers = yield user_model_1.User.find({});
            return allUsers;
        });
    }
    GetUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_model_1.User.findById(userId);
            return user;
        });
    }
    UpdateUser(userId, updateData) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedUser = yield user_model_1.User.findByIdAndUpdate(userId, updateData, {
                new: true,
            });
            return updatedUser;
        });
    }
    DeleteUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedUser = yield user_model_1.User.findByIdAndDelete(userId);
            return deletedUser;
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.services.js.map