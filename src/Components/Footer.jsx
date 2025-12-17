import React from "react";
import { Github, Linkedin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/Badsha012",
      Icon: Github,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/md-badsha-sheikh/",
      Icon: Linkedin,
    },
    {
      label: "Facebook",
      href: "https://web.facebook.com/md.badsha.sheikh.423531/",
      Icon: Facebook,
    },
  ];

  const quickLinks = [
    { name: "About", path: "/about" },
    { name: "App", path: "/app" },
    { name: "Contact", path: "/contact" },
    { name: "Installation", path: "/installation" },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-14">
      <div className="mx-auto max-w-7xl px-6">
        {/* Main Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold tracking-wide text-white">
              HERO.IO
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-300">
              HERO.IO is an AI-powered platform focused on building modern web
              applications, smart tools, and next-generation digital solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-400 transition hover:text-emerald-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Connect With Me
            </h3>
            <div className="flex gap-4">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 backdrop-blur transition hover:bg-emerald-500 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/20" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-400 md:flex-row">
          <p>© {year} HERO.IO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
