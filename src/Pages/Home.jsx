import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { Apple, Play } from "lucide-react";

const Home = () => {
  const apps = useLoaderData(); // loader থেকে apps data
  const navigate = useNavigate();

  // Rating button click -> App Details
  const handleRatingClick = (id) => {
    navigate(`/app/${id}`);
  };

  // Download button click -> Installation page
  const handleDownloadClick = (id) => {
    navigate(`/installation/${id}`);
  };

  return (
    <main className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* ===== Hero Section ===== */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl leading-tight">
          We Build <br />
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-slate-400 text-lg md:text-xl">
          At HERO.IO, we craft innovative apps designed to simplify life, boost productivity, and deliver impactful digital experiences.
        </p>

        {/* Store Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://play.google.com/store/apps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-6 py-3 text-sm font-semibold text-emerald-400 transition hover:bg-emerald-500/25"
          >
            <Play className="h-5 w-5" /> Google Play
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-sky-500/15 px-6 py-3 text-sm font-semibold text-sky-400 transition hover:bg-sky-500/25"
          >
            <Apple className="h-5 w-5" /> App Store
          </a>
        </div>

        {/* Hero Image */}
        <div className="mt-14 flex justify-center">
          <img
            src="https://i.ibb.co/LzJDW19w/hero.png"
            alt="Hero"
            className="w-full max-w-3xl drop-shadow-2xl rounded-xl"
          />
        </div>
      </section>

      {/* ===== Trending Apps Section ===== */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">Trending Apps</h2>
          <p className="mt-2 text-slate-400">Explore the most popular apps developed by HERO.IO</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {apps?.map((app) => (
            <div key={app.id} className="card bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col gap-2">
                <h3 className="font-semibold text-lg">{app.title}</h3>
                <div className="flex justify-between mt-2">
                  <button
                    onClick={() => handleDownloadClick(app.id)}
                    className="text-green-600 font-medium flex items-center gap-1"
                  >
                    📥 {app.downloads}
                  </button>
                  <button
                    onClick={() => handleRatingClick(app.id)}
                    className="text-amber-600 font-medium flex items-center gap-1"
                  >
                    ⭐ {app.ratingAvg}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            to="/app"
            className="rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 py-3 font-semibold text-slate-900 transition hover:opacity-90"
          >
            Show All Apps
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
