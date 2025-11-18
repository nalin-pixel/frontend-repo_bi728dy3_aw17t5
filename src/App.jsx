import { useMemo, useRef, useState } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import RadioAnimationCard from "./components/RadioAnimationCard";
import RadioSoundCard from "./components/RadioSoundCard";

function App() {
  const [active, setActive] = useState("animations");
  const [selectedAnimation, setSelectedAnimation] = useState(null);
  const [selectedSound, setSelectedSound] = useState(null);
  const audioRef = useRef(null);

  const animations = useMemo(
    () => [
      {
        id: "default",
        title: "Standardowa animacja",
        description: "Prosta animacja mówienia przez radio.",
        image:
          "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?q=80&w=600&auto=format&fit=crop",
      },
      {
        id: "tactical",
        title: "Taktyczna",
        description: "Szybkie podniesienie ręki do ucha.",
        image:
          "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=600&auto=format&fit=crop",
      },
      {
        id: "casual",
        title: "Luźna",
        description: "Naturalny gest z radiem przy barku.",
        image:
          "https://images.unsplash.com/photo-1483097365279-3d87e8d8be0d?q=80&w=600&auto=format&fit=crop",
      },
    ],
    []
  );

  const sounds = useMemo(
    () => [
      {
        id: "click-classic",
        title: "Klasyczny klik",
        description: "Krótki dźwięk PTT.",
        src: "https://cdn.pixabay.com/download/audio/2021/09/17/audio_6a9c3b6bca.mp3?filename=click-124467.mp3",
      },
      {
        id: "radio-beep",
        title: "Beep radiowy",
        description: "Subtelny beep przy mówieniu.",
        src: "https://images.unsplash.com/photo-1562072299-8ecc43a8c709?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCZWVwJTIwcmFkaW93eXxlbnwwfDB8fHwxNzYzNTA3NjA3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
      },
      {
        id: "ptt-long",
        title: "PTT dłuższy",
        description: "Wydłużony klik PTT.",
        src: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_0a2e50d7f0.mp3?filename=ui-confirmation-alert-c-147054.mp3",
      },
    ],
    []
  );

  const handlePreview = (item) => {
    try {
      if (!audioRef.current) return;
      audioRef.current.pause();
      audioRef.current.src = item.src;
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } catch (e) {
      console.error("Audio preview error", e);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>

      <div className="relative min-h-screen p-6 md:p-10">
        <Header />

        <div className="flex items-center justify-center mb-8">
          <Tabs active={active} setActive={setActive} />
        </div>

        {active === "animations" ? (
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
            {animations.map((a) => (
              <RadioAnimationCard
                key={a.id}
                item={a}
                selected={selectedAnimation === a.id}
                onSelect={setSelectedAnimation}
              />)
            )}
          </div>
        ) : (
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
            {sounds.map((s) => (
              <RadioSoundCard
                key={s.id}
                item={s}
                selected={selectedSound === s.id}
                onSelect={setSelectedSound}
                onPreview={handlePreview}
              />)
            )}
            <audio ref={audioRef} />
          </div>
        )}

        <div className="max-w-3xl mx-auto mt-10">
          <div className="bg-slate-800/60 border border-blue-500/20 rounded-xl p-4 text-blue-200/90 text-sm">
            <p>Wybrane:</p>
            <ul className="list-disc list-inside mt-1">
              <li>Animacja: {selectedAnimation || "brak"}</li>
              <li>Dźwięk: {selectedSound || "brak"}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
