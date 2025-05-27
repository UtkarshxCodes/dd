import express from "express";
import { paypalCreateOrder, purchaseCourseStripe } from "../controllers/userController.js";

const userRouter = express.Router();

// PayPal Payment Route
userRouter.post('/paypal-create-order', paypalCreateOrder);

// Stripe Payment Route
userRouter.post('/purchase-stripe', purchaseCourseStripe);

export default userRouter;