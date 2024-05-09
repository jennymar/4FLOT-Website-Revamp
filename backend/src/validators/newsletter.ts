import { body } from "express-validator";

const makeIDValidator = () =>
  body("_id")
    .exists()
    .withMessage("_id is required")
    .bail()
    .isString()
    .withMessage("_id must be a number");
const makeImageValidator = () =>
  body("image")
    .exists()
    .withMessage("image is required")
    .bail()
    .isString()
    .withMessage("image must be a string");
const makeTitleValidator = () =>
  body("title")
    .exists()
    .withMessage("title is required")
    .bail()
    .isString()
    .withMessage("title must be a string");
const makeDescriptionValidator = () =>
  body("description")
    .exists()
    .withMessage("description is required")
    .bail()
    .isString()
    .withMessage("description must be a string");
const makeDateValidator = () =>
  body("date")
    .exists()
    .withMessage("date is required")
    .bail()
    .isString()
    .withMessage("date must be a string");
const makeContentValidator = () =>
  body("content")
    .exists()
    .withMessage("content is required")
    .bail()
    .isArray()
    .withMessage("content must be an array of strings");
const makeArchiveValidator = () =>
  body("archive")
    .exists()
    .withMessage("archive is required")
    .bail()
    .isBoolean()
    .withMessage("archive must be a boolean");

export const createNewsletter = [
  makeImageValidator(),
  makeTitleValidator(),
  makeDescriptionValidator(),
  makeDateValidator(),
  makeContentValidator(),
  makeArchiveValidator(),
];

export const updateNewsletter = [
  makeIDValidator(),
  makeImageValidator(),
  makeTitleValidator(),
  makeDescriptionValidator(),
  makeDateValidator(),
  makeContentValidator(),
  makeArchiveValidator(),
];

export const getNewsletter = [makeIDValidator()];

export const deleteNewsletter = [makeIDValidator()];
