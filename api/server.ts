import cors from 'cors';
import express from 'express';
import {randomUUID} from 'node:crypto';

type Tarea = {
    id: string; titulo: string;
    materia: string; hecha: boolean;
};

const tareas: Tarea[] = [{ id: randomUUID(),
    titulo: 'AYOLAAAA', materia: 'Progra 4', hecha: true
}];

const app = express();
app.use(cors({ origin: 'http://localhost:3000'}));
app.use(express.json());

app.get('/tareas', async (_req, res) => {
    await new Promise ((r) => setTimeout (r, 600 ));
    res.json(tareas);
});

app.listen(4000, () => {
    console.log("API lista en http://localhost:4000/tareas");
});