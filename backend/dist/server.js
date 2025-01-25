"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const js_yaml_1 = __importDefault(require("js-yaml"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const db_config_1 = __importDefault(require("./config/db.config"));
const routes_1 = __importDefault(require("./routes"));
const logger_utils_1 = __importDefault(require("./utils/logger.utils"));
global.__basedir = __dirname;
var corsOptions = {
  origin: ["http://localhost:5173"],
  optionsSuccessStatus: 200, // For legacy browser support
};
const swaggerLetterHead = js_yaml_1.default.load(
  fs_1.default.readFileSync(
    path_1.default.join(__dirname, "config", "swagger.yaml"),
    "utf-8"
  )
);
function configureApp() {
  const app = (0, express_1.default)();
  app.use(body_parser_1.default.json());
  app.use(body_parser_1.default.urlencoded({ extended: true }));
  app.use(express_1.default.json());
  app.use((0, cookie_parser_1.default)());
  app.use((0, cors_1.default)(corsOptions));
  app.use((req, res, next) => {
    logger_utils_1.default.info(`${req.method} ${req.url}, {
      ip: req.ip,
      userAgent: req.get("User-Agent"),
    }`);
    next();
  });
  const options = {
    swaggerDefinition: {
      openapi: "3.0.0",
      info: swaggerLetterHead.info,
      servers: [
        {
          url: "http://localhost:8000",
          description: "Localhost",
        },
      ],
    },
    apis: ["./src/docs/*.js", "./src/docs/*.yaml", "./src/routes/*.js"],
  };
  const swaggerDocument = (0, swagger_jsdoc_1.default)(options);
  // serve and swagger documentation
  app.use(
    "/api-docs",
    swagger_ui_express_1.default.serve,
    swagger_ui_express_1.default.setup(swaggerDocument)
  );
  app.use("/api/v1", routes_1.default);
  // Welcome route
  app.get("/", (req, res) => {
    res
      .status(200)
      .send("Welcome to Umurava Skills Challenge_Software Development_EdTech");
  });
  app.all("*", (req, res) => {
    logger_utils_1.default.warn(`Route not found: ${req.method} ${req.url}`);
    res.status(404).json({
      message: "Route not found",
    });
  });
  return app;
}
const app = configureApp();
const PORT = process.env.PORT || 8000;
const server = (0, http_1.createServer)(app);
// Handle uncaught exceptions
process.on("uncaughtException", (error) => {
  logger_utils_1.default.error("Uncaught Exception", {
    error: error.message,
    stack: error.stack,
  });
  process.exit(1);
});
// Handle unhandled promise rejections
process.on("unhandledRejection", (reason, promise) => {
  logger_utils_1.default.error("Unhandled Rejection", { reason, promise });
});
(0, db_config_1.default)()
  .then(() => {
    server.listen(PORT, () => {
      logger_utils_1.default.info(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    logger_utils_1.default.error("Failed to connect to database", {
      error: error.message,
    });
  });
//# sourceMappingURL=server.js.map
