import express from "express";

const router = express.Router();

router
  .route('/test')
  .get(async (req, res) => {
      try {
        res.status(200).send("good shit we got it");
      } catch(e) {
        console.error(e);
      }
  });

export default router;