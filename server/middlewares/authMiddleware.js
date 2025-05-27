import { clerkClient } from "@clerk/express"

// Middleware ( Protect Educator Routes )
export const protectEducator = async (req, res, next) => {
  return next(); // Allow all requests to pass through
};