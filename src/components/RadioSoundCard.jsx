import React from "react";

function RadioSoundCard({ item, selected, onSelect, onPreview }) {
  return (
    <div className={`group bg-slate-800/60 border rounded-xl p-4 flex items-center gap-4 transition-all ${
      selected ? "border-blue-500/60 ring-2 ring-blue-500/30" : "border-blue-500/10 hover:border-blue-500/30"
    }`}>
      <div className="flex-1">
        <h3 className="text-white font-semibold">{item.title}</h3>
        <p className="text-xs text-blue-200/70 mt-1">{item.description}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => onPreview(item)}
          className="px-3 py-2 rounded-lg text-sm font-medium bg-slate-700 text-blue-200 hover:bg-slate-600"
        >
          Odtwórz
        </button>
        <button
          onClick={() => onSelect(item.id)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            selected ? "bg-blue-600 text-white" : "bg-slate-700 text-blue-200 hover:bg-slate-600"
          }`}
        >
          {selected ? "Wybrano" : "Wybierz"}
        </button>
      </div>
    </div>
  );
}

export default RadioSoundCard;
