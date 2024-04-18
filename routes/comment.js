const express = require("express");
const router = express.Router();
const Comment = require("../models/comment");

// Get all comments by a specific user
router.get("/user/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const comments = await Comment.aggregate([
      { $match: { createdBy: mongoose.Types.ObjectId(userId) } },
      { $group: { _id: "$createdBy", comments: { $push: "$$ROOT" } } },
    ]);
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Other routes for CRUD operations

module.exports = router;
