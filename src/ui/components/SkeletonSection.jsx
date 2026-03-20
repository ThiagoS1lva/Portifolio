export default function SkeletonSection() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="h-10 w-64 mx-auto bg-slate-200 dark:bg-white/5 rounded-lg animate-pulse mb-4"></div>
                    <div className="h-5 w-96 mx-auto bg-slate-200 dark:bg-white/5 rounded-lg animate-pulse"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="glass-card p-8 animate-pulse">
                            <div className="w-12 h-12 bg-slate-200 dark:bg-white/5 rounded-xl mb-6"></div>
                            <div className="h-6 w-3/4 bg-slate-200 dark:bg-white/5 rounded-lg mb-4"></div>
                            <div className="h-4 w-1/2 bg-slate-200 dark:bg-white/5 rounded-lg mb-6"></div>
                            <div className="space-y-3">
                                <div className="h-3 w-full bg-slate-200 dark:bg-white/5 rounded-lg"></div>
                                <div className="h-3 w-5/6 bg-slate-200 dark:bg-white/5 rounded-lg"></div>
                                <div className="h-3 w-4/6 bg-slate-200 dark:bg-white/5 rounded-lg"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
