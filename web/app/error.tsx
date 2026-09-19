'use client'; //obligatorio

export default function Error({
    error, reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <main className="mx-auto max-w-2xl px-6 py-12">
<h1 className="text-2xl font-bold text-uspg-rojo">Algo
se rompió</h1>
<p className="mt-2 text-slate-600">{error.message}</p>
<p className="mt-1 text-sm text-slate-500">
Casi siempre es que la API no está corriendo. Revisa la
otra terminal.
</p>
<button
type="button"
onClick={reset}

className="mt-6 rounded-lg bg-uspg-navy px-4 py-2 font-
medium text-white"

>
Intentar de nuevo
</button>
</main>
);
}