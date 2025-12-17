import React, { useState } from "react";
import { useLoaderData } from "react-router";
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
  // 🔹 useLoaderData দিয়ে একক App data নিচ্ছি
  const app = useLoaderData();

  const [installed, setInstalled] = useState(false);

  // 🔹 Toast সহ Install বাটন handle
  const handleInstall = () => {
    setInstalled(true);
    toast.success(`${app.title} installed successfully!`);
  };

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 space-y-6">
      {/* ========== App Info Section ========== */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white rounded-xl p-6 shadow">
        {/* Left: Image */}
        <img
          src={app.image}
          alt={app.title}
          className="w-40 h-40 object-cover rounded-lg"
        />

        {/* Right: Details */}
        <div className="flex-1 space-y-3">
          <h1 className="text-2xl font-bold">{app.title}</h1>

          <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
            <span>⭐ {app.ratingAvg} / 5</span>
            <span>📥 {app.downloads} Downloads</span>
            <span>💬 {app.reviews} Reviews</span>
            <span>🏢 {app.companyName}</span>
          </div>

          {/* Install Button */}
          <button
            onClick={handleInstall}
            disabled={installed}
            className={`px-6 py-2 rounded-lg text-white font-medium ${
              installed ? "bg-gray-400 cursor-not-allowed" : "bg-emerald-600 hover:bg-emerald-700"
            }`}
          >
            {installed ? "Installed ✅" : "Install"}
          </button>
        </div>
      </div>

      {/* ========== Review Chart Section ========== */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">User Review Summary</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={app.ratings}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#10b981" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* ========== Description Section ========== */}
      <div className="bg-white p-6 rounded-xl shadow space-y-3">
        <h2 className="text-xl font-semibold">Description</h2>
        <p className="text-gray-700 leading-relaxed">{app.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
