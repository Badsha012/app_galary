import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const AppDetails = () => {
  const app = useLoaderData();
  const [installed, setInstalled] = useState(false);

  const handleInstall = () => {
    setInstalled(true);
    toast.success(`${app.title} installed successfully!`);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-8 px-4">
      
      {/* ========== App Info Section ========== */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-slate-900/80 backdrop-blur p-6 rounded-2xl shadow-lg">
        
        {/* Left: Image */}
        <img
          src={app.image}
          alt={app.title}
          className="w-40 h-40 object-cover rounded-lg"
        />

        {/* Right: Details */}
        <div className="flex-1 space-y-3">
          <h1 className="text-2xl font-bold">{app.title}</h1>

          <div className="flex flex-wrap gap-4 text-slate-300 text-sm">
            <span>⭐ {app.ratingAvg} / 5</span>
            <span>📥 {app.downloads} Downloads</span>
            <span>💬 {app.reviews} Reviews</span>
            <span>🏢 {app.companyName}</span>
          </div>

          {/* Install Button */}
          <button
            onClick={handleInstall}
            disabled={installed}
            className={`px-6 py-2 rounded-lg font-medium text-white ${
              installed
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-emerald-600 hover:bg-emerald-500 transition"
            }`}
          >
            {installed ? "Installed ✅" : "Install"}
          </button>
        </div>
      </div>

      {/* ========== Review Chart Section ========== */}
      <div className="bg-slate-900/80 backdrop-blur p-6 rounded-2xl shadow-lg mt-8">
        <h2 className="text-xl font-semibold mb-4 text-white">
          User Review Summary
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={app.ratings}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1F2937",
                borderRadius: "8px",
                border: "none",
                color: "#fff",
              }}
            />
            <Bar dataKey="count" fill="#10b981" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* ========== Description Section ========== */}
      <div className="bg-slate-900/80 backdrop-blur p-6 rounded-2xl shadow-lg mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-white">Description</h2>
        <p className="text-slate-300 leading-relaxed">{app.description}</p>
      </div>
    </main>
  );
};

export default AppDetails;
