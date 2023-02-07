import { Router, Response, Request } from "express";

const healthCheckRoutes = Router();

healthCheckRoutes.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Server is running" });
});

export { healthCheckRoutes };
