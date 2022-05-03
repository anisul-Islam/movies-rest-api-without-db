import express from "express";
import {
  addMovie,
  deleteMovie,
  findOneMovie,
  getAllMovies,
  updateMovie,
} from "../controllers/movies.controller.js";

const router = express.Router();

router.get("/", getAllMovies);
router.get("/:id", findOneMovie);
router.post("/", addMovie);
router.put("/:id", updateMovie);
router.delete("/:id", deleteMovie);

export default router;
