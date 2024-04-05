"use strict";
/**
 * Parses .env parameters and ensures they are of required types. If any .env parameters are
 * missing, the server will not start and an error will be thrown.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const envalid_1 = require("envalid");
const validators_1 = require("envalid/dist/validators");
exports.default = (0, envalid_1.cleanEnv)(process.env, {
    PORT: (0, validators_1.port)(),
    MONGODB_URI: (0, validators_1.str)(),
    EMAIL_USER: (0, validators_1.email)(), // Email address to use for sending emails
    EMAIL_APP_PASSWORD: (0, validators_1.str)(), // App password to use for sending emails
    EMAIL_NOTIFICATIONS_RECIPIENT: (0, validators_1.email)(), // Recipient of VSR notification emails
});
