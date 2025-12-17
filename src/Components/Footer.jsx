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
    <footer className="bg-gradient-to-br from-violet-700 via-purple-700 to-indigo-800 text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        {/* Main Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold tracking-wide">HERO.IO</h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/80">
              HERO.IO is an AI-powered platform focused on building modern web
              applications, smart tools, and next-generation digital solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/80 transition hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Connect With Me</h3>
            <div className="flex gap-4">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 backdrop-blur transition hover:bg-white/20"
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
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/70 md:flex-row">
          <p>© {year} HERO.IO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;