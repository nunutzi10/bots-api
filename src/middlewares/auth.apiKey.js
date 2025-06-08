import prisma from "../../prisma/setup.js";

class VeriFyApiKey {
  static async verifyApiKey(req, res, next) {
    const apiKey = req.headers.authorization?.split(" ")[1];
    if (!apiKey) {
      return res.status(401).json({ message: "API key is required." });
    }
    const apiKeyRecord = await prisma.apiKey.findUnique({
      where: { key: apiKey },
    });
    if (!apiKeyRecord) {
      return res.status(401).json({ message: "Invalid API key." });
    }
    next();
  }
}
export default VeriFyApiKey;