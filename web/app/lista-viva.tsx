"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { traerTareas, alternarTarea } from "@/lib/api";
import type { Tarea } from "@/lib/tarea.schema";

export default function ListaViva({ iniciales }: { iniciales: Tarea[] }) {
  const cache = useQueryClient();

  const { data } = useQuery({
    queryKey: ["tareas"],
    queryFn: traerTareas,
    initialData: iniciales,
  });

  const marcar = useMutation({
    mutationFn: alternarTarea,
    onSuccess: () => {
      // Invalida la caché para refrescar los datos automáticamente
      cache.invalidateQueries({ queryKey: ["tareas"] });
    },
  });

  return (
    <ul>
      {data.map((t) => (
        <li key={t.id}>
          <label>
            <input
              type="checkbox"
              checked={t.hecha}
              disabled={marcar.isPending}
              onChange={() => marcar.mutate(t)}
            />
            {t.titulo}
          </label>
        </li>
      ))}
    </ul>
  );
}