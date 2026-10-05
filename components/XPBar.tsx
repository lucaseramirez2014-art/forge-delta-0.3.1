type XPBarProps = { current: number; goal: number; compact?: boolean; };

export function XPBar({ current, goal, compact = false }: XPBarProps) {
  const percentage = goal > 0 ? Math.min(100, Math.round((current / goal) * 100)) : 0;
  return <div className={compact ? "w-full" : "w-full max-w-md"}><div className="mb-2 flex items-center justify-between text-xs font-medium tracking-wide text-slate-400"><span>{current.toLocaleString()} XP</span><span>{goal.toLocaleString()} XP</span></div><div className="h-2 overflow-hidden rounded-full bg-slate-800"><div className="h-full rounded-full bg-teal-400 transition-[width] duration-500" style={{ width: `${percentage}%` }} /></div></div>;
}
