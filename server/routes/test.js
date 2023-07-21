import express from "express";
// const controller = require('./controllers.js');
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
// router
//   .route('/pokemon')
//   .get(controller.pokemon.get);

// router
//   .route('/user')
//   .get(controller.user.get)
//   .post(controller.user.post)
//   .delete(controller.user.delete);

export default router;