/**
 * Defines server and middleware.
 */

import "dotenv/config";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import { isHttpError } from "http-errors";
import subscriberRoutes from "src/routes/subscriber";
import memberRoutes from "src/routes/members";
import backgroundImageRoutes from "src/routes/background_images";
import eventDetailsRoutes from "./routes/eventDetails";
import volunteerDetailsRoutes from "./routes/volunteerDetails";
import testimonialRoutes from "src/routes/testimonial";
import newsletterRoutes from "src/routes/newsletter"; // Import newsletter routes
import emailRoutes from "src/routes/emails";
import pageeditorRoutes from "src/routes/pageeditor";
import paypalRoutes from "src/routes/paypal";

const app = express();

// initializes Express to accept JSON in the request/response body
app.use(express.json());

// sets the "Access-Control-Allow-Origin" header on all responses to allow
// requests from the frontend, which has a different origin - see the following
// pages for more info:
// https://expressjs.com/en/resources/middleware/cors.html
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin
app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN,
  }),
);

// Routes ( e.g. app.use("/api/task", taskRoutes); )
app.use("/api/subscribers", subscriberRoutes);
app.use("/api/member", memberRoutes);
app.use("/api/BackgroundImage", backgroundImageRoutes);
app.use("/api/eventDetails", eventDetailsRoutes);
app.use("/api/volunteerDetails", volunteerDetailsRoutes);
app.use("/api/testimonial", testimonialRoutes);
app.use("/api/newsletter", newsletterRoutes);
app.use("/api/emails", emailRoutes);
app.use("/api/pageeditor", pageeditorRoutes);
app.use("/api/orders", paypalRoutes); // Donation Order routes

/**
 * Error handler; all errors thrown by server are handled here.
 * Explicit typings required here because TypeScript cannot infer the argument types.
 *
 * An eslint-disable is being used below because the "next" argument is never used. However,
 * it is still required for Express to recognize it as an error handler. For this reason, I've
 * disabled the eslint error. This should be used sparingly and only in situations where the lint
 * error cannot be fixed in another way.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  // 500 is the "internal server error" error code, this will be our fallback
  let statusCode = 500;
  let errorMessage = "An error has occurred.";

  // check is necessary because anything can be thrown, type is not guaranteed
  if (isHttpError(error)) {
    // error.status is unique to the http error class, it allows us to pass status codes with errors
    statusCode = error.status;
    errorMessage = error.message;
  }
  // prefer custom http errors but if they don't exist, fallback to default
  else if (error instanceof Error) {
    errorMessage = error.message;
  }

  res.status(statusCode).json({ error: errorMessage });
});

export default app;
