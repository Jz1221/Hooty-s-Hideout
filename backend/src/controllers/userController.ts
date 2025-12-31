import type { Request, Response } from "express";
import * as queries from "../db/queries";

import { getAuth } from "@clerk/express";

export async function syncUser(req: Request, res: Response) {
  try {
    const { userId } = getAuth(req);
    console.log("🔍 Auth check - userId:", userId);
    
    if (!userId) {
      console.error("❌ No userId from Clerk");
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { email, name, imageUrl } = req.body;
    console.log("📦 Received data:", { email, name, imageUrl });

    if (!email || !name || !imageUrl) {
      console.error("❌ Missing required fields:", { email, name, imageUrl });
      return res.status(400).json({ error: "Email, name, and imageUrl are required" });
    }

    const user = await queries.upsertUser({
      id: userId,
      email,
      name,
      imageUrl,
    });

    console.log("✅ User synced successfully:", user);
    res.status(200).json(user);
  } catch (error) {
    console.error("💥 Error syncing user:", error);
    res.status(500).json({ error: "Failed to sync user", details: error instanceof Error ? error.message : String(error) });
  }
}