import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="-m-6 flex flex-wrap">
          {/* Brand */}
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 flex items-center">
                <Logo width="100px" />
              </div>
              <p className="text-sm text-slate-500">
                © 2026. All rights reserved.
              </p>
            </div>
          </div>

          {/* Company */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-sm text-slate-600 hover:text-slate-900" to="/">
                  Features
                </Link>
              </li>
              <li>
                <Link className="text-sm text-slate-600 hover:text-slate-900" to="/">
                  Pricing
                </Link>
              </li>
              <li>
                <Link className="text-sm text-slate-600 hover:text-slate-900" to="/">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link className="text-sm text-slate-600 hover:text-slate-900" to="/">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-sm text-slate-600 hover:text-slate-900" to="/">
                  Account
                </Link>
              </li>
              <li>
                <Link className="text-sm text-slate-600 hover:text-slate-900" to="/">
                  Help
                </Link>
              </li>
              <li>
                <Link className="text-sm text-slate-600 hover:text-slate-900" to="/">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="text-sm text-slate-600 hover:text-slate-900" to="/">
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-sm text-slate-600 hover:text-slate-900" to="/">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link className="text-sm text-slate-600 hover:text-slate-900" to="/">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="text-sm text-slate-600 hover:text-slate-900" to="/">
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
