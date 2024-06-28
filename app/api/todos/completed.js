import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  if (req.method === "POST") {
    const completedTask = req.body;

    try {
      await db.collection("completedTasks").insertOne(completedTask);
      res.status(200).json({ message: "Task added to completed tasks" });
    } catch (error) {
      res.status(500).json({ message: "Failed to add task to completed tasks" });
    }
  } else if (req.method === "GET") {
    try {
      const completedTasks = await db.collection("completedTasks").find().toArray();
      res.status(200).json({ completedTasks });
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch completed tasks" });
    }
  } else {
    res.setHeader("Allow", ["POST", "GET"]);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
