import React from "react";

export default function Footer() {
  return (
    <footer
      className="bg-base-300 text-base-content p-8 sm:p-10"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 items-start">
        {/* Branding / Logo */}
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-3">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="fill-current"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z" />
            </svg>
            <div>
              <p className="font-bold text-lg">Dash Realty</p>
              <p className="text-sm">Johnny Pena — License ID #764641</p>
            </div>
          </div>

          <address className="not-italic text-sm leading-snug">
            <div>13276 Research Blvd, Suite #107</div>
            <div>Austin, Texas 78750</div>
            <div className="mt-2">
              <a href="tel:+15125551234" className="link link-primary text-sm" aria-label="Call Dash Realty">
                (512) 555-1234
              </a>
              <span className="mx-2">•</span>
              <a href="mailto:hello@dashrealty.com" className="link link-primary text-sm" aria-label="Email Dash Realty">
                hello@dashrealty.com
              </a>
            </div>
          </address>

          <p className="text-xs mt-2 text-muted">Office hours: Mon–Fri 9:00am–5:00pm</p>
        </div>

        {/* Links: Disclosures + Important documents */}
        <nav aria-label="Footer disclosures" className="flex flex-col gap-2">
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
        </nav>

        {/* Social + Copyright */}
        <div className="flex flex-col items-start gap-3">
          <div>
            <h6 className="footer-title">Connect with us</h6>
            <div className="flex gap-3 mt-2" role="list" aria-label="social links">
              <a href="#" aria-label="Dash Realty on Facebook" className="p-2 rounded-md focus:outline focus:outline-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.34 2 1.86 6.48 1.86 12.07 1.86 17.17 5.83 21.22 10.7 22v-6.92H8.28v-2.98h2.42V9.3c0-2.39 1.42-3.71 3.59-3.71 1.04 0 2.13.18 2.13.18v2.35h-1.2c-1.18 0-1.55.74-1.55 1.5v1.8h2.64l-.42 2.98h-2.22V22c4.87-.78 8.84-4.83 8.84-9.93z" fill="currentColor" />
                </svg>
              </a>
              <a href="#" aria-label="Dash Realty on Instagram" className="p-2 rounded-md focus:outline focus:outline-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zM12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2zM18.4 6.6a1.08 1.08 0 1 0 0 2.16 1.08 1.08 0 0 0 0-2.16z" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-auto text-sm text-muted">
            <p>&copy; {new Date().getFullYear()} Johnny Pena. All rights reserved.</p>
            <p className="text-xs">Dash Realty — Brokerage Services in Texas</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
