import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button
      onClick={() => setCount(c => c + 1)}
      className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-4 py-2 rounded-xl text-sm transition-colors"
    >
      React works! Clicked {count} {count === 1 ? 'time' : 'times'}
    </button>
  );
}
