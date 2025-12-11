import React from "react";

export default function Footer() {
  return (
    <footer
      className="bg-base-300 text-base-content p-8 sm:p-10"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-8 items-start">
        {/* Logo Column */}
        <div className="flex flex-col items-center justify-center">
          <img
            src="/images/Final-Logo.png"
            alt="Dash Realty Logo"
            width="240"
            height="240"
            className="object-contain w-60 h-60 mb-4"
          />
        </div>

        {/* Info Column */}
        <div className="flex flex-col items-center justify-center">

          <p className="text-lg text-center"><strong>Johnny Peña</strong> — License ID #764641</p>
          <p className="text-xs mt-4 text-muted text-center">Office hours: Mon–Fri 9:00am–5:00pm</p>
        </div>

        {/* Disclosures Column */}
        <div className="flex flex-col gap-2">
          <h6 className="footer-title">TREC Disclosures</h6>
          <ul className="flex flex-col gap-1">
            <li>
              <a
                href="/documents/DASHREALTY_Information_about_Brokerage_Services_Iabs_20211108T110727%20(1).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="link link-primary text-sm underline"
                download
                aria-label="Download TREC Information about Brokerage Services PDF"
              >
                TREC — Information about Brokerage Services
              </a>
            </li>
            <li>
              <a
                href="/documents/CN%201-3.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="link link-primary text-sm underline"
                download
                aria-label="Download TREC Consumer Protection Notice PDF"
              >
                TREC — Consumer Protection Notice
              </a>
            </li>
          </ul>

          <div className="mt-4">
            <h6 className="footer-title">Legal & Policies</h6>
            <ul className="flex flex-col gap-1">
              <li>
                <a href="/privacy" className="link text-sm" aria-label="Privacy policy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="link text-sm" aria-label="Terms of service">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright/Social Column */}
        <div className="flex flex-col items-start gap-3 justify-center">
          <div className="mt-auto text-sm text-muted">
            <p>&copy; {new Date().getFullYear()} Johnny Peña. All rights reserved.</p>
            <p className="text-xs">Dash Realty — Brokerage Services in Texas</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
