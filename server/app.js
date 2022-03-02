import 'dotenv';
import express, { urlencoded } from 'express';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Server is up and running in port ${port}`);
});