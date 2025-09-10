import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertFeedbackSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // POST /api/feedback - Submit student feedback
  app.post("/api/feedback", async (req, res) => {
    try {
      const validatedData = insertFeedbackSchema.parse(req.body);
      const feedback = await storage.createFeedback(validatedData);
      res.status(201).json(feedback);
    } catch (error) {
      if (error instanceof Error && error.name === "ZodError") {
        res.status(400).json({ 
          message: "Invalid feedback data", 
          errors: (error as any).errors 
        });
      } else {
        res.status(500).json({ message: "Failed to submit feedback" });
      }
    }
  });

  // GET /api/feedback - Get all feedback (for admin use)
  app.get("/api/feedback", async (req, res) => {
    try {
      const feedback = await storage.getAllFeedback();
      res.json(feedback);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve feedback" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
