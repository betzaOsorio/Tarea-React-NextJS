import { traerTareas } from "@/lib/api";
import ListaViva from "@/app/lista-viva"; // Asegúrate de ajustar la ruta del componente

export default async function Home() {
  // 1. Carga los datos en el servidor (Server Component)
  const tareas = await traerTareas();

  // 2. Renderiza la vista pasando los datos como 'iniciales' a ListaViva
  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Tareas</h1>
      <ListaViva iniciales={tareas} />
    </main>
  );
}