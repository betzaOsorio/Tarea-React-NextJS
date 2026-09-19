import type { Tarea } from '@/lib/tarea.schema';

export const API = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000';

/** Lo que la API devuelve cuando algo sale mal. */
export type ErrorApi = {
  mensaje: string;
  errores: Record<string, string>;
};

// --- QUERIES ---

export async function traerTareas(): Promise<Tarea[]> {
  const respuesta = await fetch(`${API}/tareas`, { cache: 'no-store' });
  if (!respuesta.ok) {
    throw new Error('La API no respondió. ¿Está corriendo en el puerto 4000?');
  }
  return respuesta.json();
}

// --- MUTATIONS ---

/** Marcar/Desmarcar una tarea como completada */
export async function alternarTarea(tarea: Tarea): Promise<Tarea> {
  const respuesta = await fetch(`${API}/tareas/${tarea.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ hecha: !tarea.hecha }),
  });

  if (!respuesta.ok) {
    const error: ErrorApi = await respuesta.json().catch(() => ({
      mensaje: 'Error al actualizar la tarea',
      errores: {},
    }));
    throw new Error(error.mensaje);
  }

  return respuesta.json();
}

/** Crear una nueva tarea */
export async function crearTarea(titulo: string): Promise<Tarea> {
  const respuesta = await fetch(`${API}/tareas`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ titulo, hecha: false }),
  });

  if (!respuesta.ok) {
    throw new Error('Error al crear la tarea');
  }

  return respuesta.json();
}

/** Eliminar una tarea */
export async function eliminarTarea(id: string | number): Promise<void> {
  const respuesta = await fetch(`${API}/tareas/${id}`, {
    method: 'DELETE',
  });

  if (!respuesta.ok) {
    throw new Error('Error al eliminar la tarea');
  }
}