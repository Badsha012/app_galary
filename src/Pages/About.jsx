import React from "react";

const About = () => {
  return (
    <main className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
          About <span className="text-emerald-400">HERO.IO</span>
        </h1>
        <p className="mt-6 text-slate-400 text-lg md:text-xl">
          HERO.IO is a modern AI-powered platform dedicated to building innovative web applications, smart tools, and next-generation digital solutions. We focus on transforming ideas into impactful experiences.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mx-auto max-w-5xl px-6 py-16 space-y-10">
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="bg-slate-900/80 rounded-2xl p-6 shadow-lg backdrop-blur transition hover:scale-105">
            <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
            <p className="text-slate-300">
              To create modern, user-friendly, and AI-powered applications that simplify life and boost productivity for millions of users worldwide.
            </p>
          </div>
          <div className="bg-slate-900/80 rounded-2xl p-6 shadow-lg backdrop-blur transition hover:scale-105">
            <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
            <p className="text-slate-300">
              To be a leading innovator in the digital space by combining technology, creativity, and intelligence to solve real-world problems.
            </p>
          </div>
          <div className="bg-slate-900/80 rounded-2xl p-6 shadow-lg backdrop-blur transition hover:scale-105">
            <h2 className="text-xl font-semibold mb-2">Our Values</h2>
            <p className="text-slate-300">
              Innovation, integrity, collaboration, and user-centric design are the core values guiding everything we do at HERO.IO.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Meet the Team</h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="bg-slate-900/80 rounded-2xl p-6 shadow-lg backdrop-blur transition hover:scale-105">
            <img
              src="https://i.ibb.co/8LVBzDms/Whats-App-Image-2025-12-16-at-23-40-15-fdb2cc0e.jpg"
              alt="Md Badsha Sheikh"
              className="mx-auto mb-4 h-24 w-24 rounded-full object-cover"
            />
            <h3 className="font-semibold text-lg">Md Badsha Sheikh</h3>
            <p className="text-slate-400 text-sm">Founder & Developer</p>
          </div>
          <div className="bg-slate-900/80 rounded-2xl p-6 shadow-lg backdrop-blur transition hover:scale-105">
            <img
              src="https://i.ibb.co/m59mt2sg/images-30.jpg"
              alt="Jane Doe"
              className="mx-auto mb-4 h-24 w-24 rounded-full object-cover"
            />
            <h3 className="font-semibold text-lg">Jane Doe</h3>
            <p className="text-slate-400 text-sm">UI/UX Designer</p>
          </div>
          <div className="bg-slate-900/80 rounded-2xl p-6 shadow-lg backdrop-blur transition hover:scale-105">
            <img
              src="https://i.ibb.co/Ps6bLhQ5/istockphoto-1313502972-612x612.jpg"
              alt="John Smith"
              className="mx-auto mb-4 h-24 w-24 rounded-full object-cover"
            />
            <h3 className="font-semibold text-lg">John Smith</h3>
            <p className="text-slate-400 text-sm">AI Specialist</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Us in Building the Future</h2>
        <p className="text-slate-400 mb-6">
          We are always looking for passionate developers, designers, and innovators. Let's create impactful applications together.
        </p>
        <a
          href="/contact"
          className="inline-block rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 py-3 font-semibold text-slate-900 transition hover:opacity-90"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
};

export default About;
