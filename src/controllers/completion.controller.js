import CompletionService from "../services/completion.service.js";

const completionService = new CompletionService();

export const createCompletion = async (req, res) => {
  try {
    const body = req.body;
    if (!body.prompt) {
      return res.status(400).json({ message: "Prompt is required." });
    }
    const completion = await completionService.createCompletion(body);
    res.status(201).json(completion);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "An error occurred while creating a completion.", error: err.message });
  }
};