"use strict";
/*
 * Controller for the newsletter subscriber route, /api/subscribers.
 * passes error handling off to /src/util/validationErrorParser.ts
 */
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
exports.createSubscriber = void 0;
const express_validator_1 = require("express-validator");
const subscriber_1 = __importDefault(require("../models/subscriber"));
const validationErrorParser_1 = __importDefault(require("../util/validationErrorParser"));
const createSubscriber = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    const { email } = req.body;
    try {
        // validationErrorParser is a helper that throws 400 if there are errors
        (0, validationErrorParser_1.default)(errors);
        const subscriber = yield subscriber_1.default.create({
            email: email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            quarterlyUpdates: req.body.quarterlyUpdates,
            specialUpdates: req.body.specialUpdates,
        });
        /*
         * TODO: Handle adding the newsletter subscriber
         * to a mailing list or however this will be handled.
         */
        // successfully created subscriber in db
        res.status(201).json(subscriber);
    }
    catch (error) {
        next(error);
    }
});
exports.createSubscriber = createSubscriber;
