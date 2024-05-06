import express from "express";
import videoRouter from "./videoRoutes.js";
import userRouter from "./userRouter.js";

const rootRouter = express.Router();

rootRouter.use("/user", userRouter);
rootRouter.use("/video", videoRouter);
// rootRouter.use("/user", videoRouter);
// rootRouter.use("/product", videoRouter);
// rootRouter.use("/name", videoRouter);

export default rootRouter;
