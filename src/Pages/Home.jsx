import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { Apple, Play } from "lucide-react";

import AppCard from "../Components/AppCard";

const Home = () => {
  const apps = useLoaderData();
  const navigate = useNavigate();

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
            src="https://i.ibb.co.com/LzJDW19w/hero.png"
            alt="Hero"
            className="w-full max-w-3xl drop-shadow-2xl rounded-xl"
          />
        </div>
      </section>

      {/* ===== Stats Section ===== */}
      <section className="border-y border-white/10 bg-white/5 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 text-center md:grid-cols-3">
          <div>
            <p className="text-slate-400">Total Downloads</p>
            <h2 className="mt-2 text-5xl font-bold text-emerald-400">29.6M</h2>
            <p className="mt-1 text-slate-400">21% more than last month</p>
          </div>
          <div>
            <p className="text-slate-400">Total Reviews</p>
            <h2 className="mt-2 text-5xl font-bold text-sky-400">906K</h2>
            <p className="mt-1 text-slate-400">46% more than last month</p>
          </div>
          <div>
            <p className="text-slate-400">Active Apps</p>
            <h2 className="mt-2 text-5xl font-bold text-violet-400">132+</h2>
            <p className="mt-1 text-slate-400">31 more launching soon</p>
          </div>
        </div>
      </section>

      {/* ===== Features Section ===== */}
      <section className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-10">Why Choose HERO.IO</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-slate-900/80 rounded-2xl p-6 shadow-lg backdrop-blur hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">Innovative</h3>
            <p className="text-slate-300">We build unique and forward-thinking apps that set trends in the industry.</p>
          </div>
          <div className="bg-slate-900/80 rounded-2xl p-6 shadow-lg backdrop-blur hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">User-Centric</h3>
            <p className="text-slate-300">Every app is designed to provide the best user experience and accessibility.</p>
          </div>
          <div className="bg-slate-900/80 rounded-2xl p-6 shadow-lg backdrop-blur hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">AI Powered</h3>
            <p className="text-slate-300">We leverage AI to build smarter and more efficient applications.</p>
          </div>
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
            <AppCard key={app.id} app={app} />
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

      {/* ===== Testimonials Section ===== */}
      <section className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-10">What Users Say</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-slate-900/80 rounded-2xl p-6 shadow-lg backdrop-blur hover:scale-105 transition">
            <p className="text-slate-300 mb-4">
              "HERO.IO apps are amazing! Super easy to use and highly productive."
            </p>
            <h3 className="font-semibold">John Doe</h3>
            <span className="text-sm text-slate-400">Product Manager</span>
          </div>
          <div className="bg-slate-900/80 rounded-2xl p-6 shadow-lg backdrop-blur hover:scale-105 transition">
            <p className="text-slate-300 mb-4">
              "The AI features make my workflow so much smoother. Highly recommended!"
            </p>
            <h3 className="font-semibold">Jane Smith</h3>
            <span className="text-sm text-slate-400">Designer</span>
          </div>
          <div className="bg-slate-900/80 rounded-2xl p-6 shadow-lg backdrop-blur hover:scale-105 transition">
            <p className="text-slate-300 mb-4">
              "Beautiful UI, responsive design, and excellent performance."
            </p>
            <h3 className="font-semibold">Alex Johnson</h3>
            <span className="text-sm text-slate-400">Developer</span>
          </div>
        </div>
      </section>

      {/* ===== Newsletter / CTA ===== */}
    <section className="mx-auto max-w-7xl px-6 py-20 text-center">
  <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
  <p className="text-slate-400 mb-6">
    Subscribe to get the latest updates and features of HERO.IO apps
  </p>
  <form className="flex flex-col sm:flex-row justify-center gap-4">
    <input
      type="email"
      placeholder="Enter your email"
      className="rounded-full px-8 py-3 text-white bg-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 flex-1 transition"
    />
    <button className="rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-3 font-semibold text-slate-900 hover:opacity-90 transition">
      Subscribe
    </button>
  </form>
</section>

    </main>
  );
};

export default Home;
