import express from "express";
import Produce from "../models/produceSchema.js";

const router = express.Router();

router
  .route("/")
  .post(async (req, res) => {
    let newProduce = await Produce.create(req.body);
    res.json(newProduce);
  })

  .get(async (req, res) => {
    let allProduce = await Produce.find({});
    res.json(allProduce);
  });

router
  .route("/:id")
  .put(async (req, res) => {
    let updateProduce = await Produce.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      },
    );
    res.json(updateProduce);
  })
  .delete(async (req, res) => {
    let deleteProduce = await Produce.findByIdAndDelete(req.params.id);
    res.json(deleteProduce);
  })
  .get(async (req, res) => {
    let oneProduce = await Produce.findById(req.params.id);
    res.json(oneProduce);
  });
export default router;
