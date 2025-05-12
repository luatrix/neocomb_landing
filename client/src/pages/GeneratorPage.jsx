import React, { useState } from 'react';
import Topbar from '../components/TopBar';
import { FaMagic, FaSlidersH, FaDownload, FaHeart } from 'react-icons/fa';


export default function GeneratorPage() {
    const [mode, setMode] = useState('simple');
    const [hasText, setHasText] = useState(false);
    const [prompt, setPrompt] = useState('');
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const [error, setError] = useState('');

    const handleGenerate = async () => {
        setLoading(true);
        setError('');
        setImageUrl('');

        try {
            const response = await fetch("https://stablehorde.net/api/v2/generate/async", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "apikey": "piGP3vFM-p5KLVM7DYJNBA"
                },
                body: JSON.stringify({
                    prompt: `Roblox thumbnail, colorful, trending, 3D, cinematic, kid-friendly. ${prompt}`,
                    params: {
                        n: 1,
                        width: 512,
                        height: 512,
                        steps: 25,
                        sampler_name: "k_euler_a" // ✅ Рабочий
                    }
                })
            });

            if (!response.ok) {
                const errText = await response.text();
                console.error("Horde error:", errText);
                throw new Error("Failed to submit generation");
            }

            const data = await response.json();
            const requestId = data.id;

            let image = null;
            while (!image) {
                await new Promise((res) => setTimeout(res, 5000));
                const statusRes = await fetch(`https://stablehorde.net/api/v2/generate/status/${requestId}`);
                const statusData = await statusRes.json();
                if (statusData.done && statusData.generations?.length > 0) {
                    image = statusData.generations[0].img;
                }
            }

            setImageUrl(image);
        } catch (err) {
            setError(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };



    return (
        <div className="min-h-screen bg-white">
            <Topbar />
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* LEFT */}
                <div>
                    <h1 className="text-3xl font-extrabold mb-6">Make your game outstanding</h1>

                    {/* Toggle */}
                    <div className="relative mb-6 w-[440px] h-10 bg-gray-100 rounded-full p-1 flex items-center shadow-inner">
                        <div
                            className={`absolute top-1 left-1 h-8 w-[210px] rounded-full bg-[#10B981] transition-transform duration-300 ease-in-out ${mode === 'advanced' ? 'translate-x-[220px]' : ''
                                }`}
                        />
                        <button
                            onClick={() => setMode('simple')}
                            className={`relative z-10 w-1/2 h-full flex items-center justify-center gap-2 text-sm font-semibold transition-colors duration-200 ${mode === 'simple' ? 'text-white' : 'text-gray-500'
                                }`}
                        >
                            <FaMagic /> Simple
                        </button>
                        <button
                            onClick={() => setMode('advanced')}
                            className={`relative z-10 w-1/2 h-full flex items-center justify-center gap-2 text-sm font-semibold transition-colors duration-200 ${mode === 'advanced' ? 'text-white' : 'text-gray-500'
                                }`}
                        >
                            <FaSlidersH /> Advanced
                        </button>
                    </div>

                    {/* FORM */}
                    {mode === 'simple' ? (
                        <div className="flex flex-col gap-4">
                            <select className="input"><option>Game Genre</option></select>
                            <textarea placeholder="Description" rows={3} className="input resize-y max-h-32 overflow-auto" />
                            <select className="input"><option>Style</option></select>
                            <select className="input"><option>Character</option></select>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="hasText" checked={hasText} onChange={() => setHasText(!hasText)} />
                                <label htmlFor="hasText" className="text-sm">Has Text</label>
                            </div>
                            <button className="btn-primary w-fit px-6 py-2">Generate</button>
                        </div>
                    ) : (
                        <div>
                            <textarea
                                placeholder="Enter full prompt here..."
                                className="input resize-none h-40 overflow-y-auto"
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                            />
                            <button
                                className="btn-primary mt-4 w-fit px-6 py-2"
                                onClick={handleGenerate}
                                disabled={loading || !prompt.trim()}
                            >
                                {loading ? "Generating..." : "Generate"}
                            </button>
                        </div>
                    )}
                </div>

                {/* RIGHT */}
                <div className="w-full flex justify-center">
  <div className="relative w-[384px] h-[384px] border-4 border-[#d1fae5] rounded-2xl bg-gray-50 overflow-hidden group">
    {error ? (
      <p className="text-red-500 font-medium p-4">{error}</p>
    ) : loading ? (
      <p className="text-gray-400 animate-pulse p-4">Generating image...</p>
    ) : imageUrl ? (
      <>
        <img
          src={imageUrl}
          alt="Generated"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Hover overlay buttons */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          <button
            onClick={() => window.open(imageUrl, '_blank')}
            className="bg-white p-2 rounded-full shadow hover:scale-110 transition"
            title="Download"
          >
            <FaDownload className="text-[#10B981] text-lg" />
          </button>
          <button
            onClick={() => alert('Saved to gallery (stub)')}
            className="bg-white p-2 rounded-full shadow hover:scale-110 transition"
            title="Save to Gallery"
          >
            <FaHeart className="text-[#F43F5E] text-lg" />
          </button>
        </div>
      </>
    ) : (
      <p className="text-gray-400 p-4">No image generated yet.</p>
    )}
  </div>
</div>

            </div>
        </div>
    );
}
