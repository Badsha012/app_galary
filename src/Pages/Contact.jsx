import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-14 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Get in <span className="text-emerald-400">Touch</span>
          </h1>
          <p className="mx-auto max-w-2xl text-slate-400">
            Have a question about our AI solutions or want to work with us? Fill out the form and our team will get back to you shortly.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="mb-4 text-xl font-semibold">Contact Information</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-emerald-400" />
                  <span>support@aiwebsite.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-emerald-400" />
                  <span>+880 1998414834</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-emerald-400" />
                  <span>Dhaka, Bangladesh</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-3 text-xl font-semibold">Why Contact Us?</h3>
              <p className="text-slate-400">
                We specialize in AI-powered web solutions, intelligent automation, and modern user experiences. Let’s build something smart together.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur">
            <form className="space-y-5">
              <div>
                <label className="mb-1 block text-sm text-slate-300">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-2 text-white placeholder-slate-500 focus:border-emerald-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm text-slate-300">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-2 text-white placeholder-slate-500 focus:border-emerald-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm text-slate-300">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-lg border border-white/10 bg-slate-900 px-4 py-2 text-white placeholder-slate-500 focus:border-emerald-400 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 py-2.5 font-medium text-slate-900 transition hover:bg-emerald-400"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
