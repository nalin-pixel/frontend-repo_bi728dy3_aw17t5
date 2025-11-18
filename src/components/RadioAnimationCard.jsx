import React from "react";

function RadioAnimationCard({ item, selected, onSelect }) {
  return (
    <div className={`group bg-slate-800/60 border rounded-xl p-4 flex items-center gap-4 transition-all ${
      selected ? "border-blue-500/60 ring-2 ring-blue-500/30" : "border-blue-500/10 hover:border-blue-500/30"
    }`}>
      <img src={item.image} alt={item.title} className="w-20 h-20 rounded-lg object-cover" />
      <div className="flex-1">
        <h3 className="text-white font-semibold">{item.title}</h3>
        <p className="text-xs text-blue-200/70 mt-1">{item.description}</p>
      </div>
      <button
        onClick={() => onSelect(item.id)}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
          selected ? "bg-blue-600 text-white" : "bg-slate-700 text-blue-200 hover:bg-slate-600"
        }`}
      >
        {selected ? "Wybrano" : "Wybierz"}
      </button>
    </div>
  );
}

export default RadioAnimationCard;
