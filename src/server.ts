import express, { Response, Request } from 'express';

const app = express();

const port: number = 3333;

app.get('/', (req: Request, res: Response) => {
  message: "Server is running"
})

app.listen(port, () => console.log(`Server is listening port ${port}!`));