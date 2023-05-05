import { Router } from "express";
import jetValidator from "jet-validator";

import Paths from "./constants/Paths";

// **** Variables **** //

const apiRouter = Router(),
  validate = jetValidator();

export default apiRouter;
