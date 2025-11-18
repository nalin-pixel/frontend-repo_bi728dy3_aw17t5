import React from "react";

function Tabs({ active, setActive }) {
  const tabs = [
    { id: "animations", label: "Animacje mówienia" },
    { id: "sounds", label: "Dźwięki radia" },
  ];

  return (
    <div className="inline-flex bg-slate-800/60 border border-blue-500/20 rounded-xl p-1">
      {tabs.map((t) => (
        <button
          key={t.id}
          onClick={() => setActive(t.id)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            active === t.id
              ? "bg-blue-600 text-white"
              : "text-blue-200 hover:bg-slate-700"
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
