export default function Cargando() {
    return (
    <main className="mx-auto max-w-2x1 px-6 py-12">
        <div className="h-9 w-64 animate-pulse rounded bg-slate-200"/>
        <div className="mt-8 space-y-3">
            {[0, 1, 2, 3].map((i) => (
                <div key={i} className="h-16 animate-pulse rounded-x1
                bg-slate-200"/>
            ))}
        </div>
        </main>
);
}
