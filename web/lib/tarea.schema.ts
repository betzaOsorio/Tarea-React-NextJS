import {z} from "zod";

export const crearTarea = z.object({
    titulo: z
    .string()
    .trim()
    .min(3, 'Escribe al menos 3 caracteres')
    .max(80, 'Maximo 80 caracteres'),
    materia: z.enum(['Programacion IV', 'Base de Datos', 'Redes'], {
        required_error: 'Elige una materia de la lista',
    }),
});

export type CrearTarea = z.infer<typeof crearTarea>;
export type Tarea = CrearTarea & { id: string; hecha: boolean };

export const MATERIAS = ['Programacion IV', 'Base de Datos', 'Redes'] as const;