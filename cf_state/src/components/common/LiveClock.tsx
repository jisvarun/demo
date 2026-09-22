// LiveClock.tsx
import { useEffect, useState } from "react";

const LiveClock = () => {
    const [now, setNow] = useState<Date>(new Date());

    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const date = now.toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    const time = now.toLocaleTimeString(undefined, { hour12: false });
    const period = now.getHours() < 12 ? "AM" : "PM";
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-950 to-black p-6">
            <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-indigo-900/40 p-10 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-indigo-300 mb-4">
                    {date}
                </p>

                <div className="flex items-baseline justify-center gap-3">
                    <span className="font-mono text-6xl sm:text-7xl font-bold tabular-nums bg-gradient-to-r from-indigo-300 via-sky-300 to-cyan-200 bg-clip-text text-transparent drop-shadow">
                        {time}
                    </span>
                    <span className="text-lg font-semibold text-slate-300">{period}</span>
                </div>

                <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Live · {timeZone}
                </div>
            </div>
        </div>
    );
};

export default LiveClock;