"use client";

import Image from "next/image";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

export default function Home() {
  const { user } = useUser();

  return (
    <div>
      {/* HEADER */}
      <header className="z-50 w-full bg-white border-b border-gray-200 text-sm">
        <nav className="max-w-[85rem] mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo1.png"
              alt="logo1"
              width={90}
              height={60}
              className="h-10 w-10"
            />
            <h2 className="font-semibold text-2xl text-gray-900">
              Wavely
            </h2>
          </div>

          <div>
            {!user ? (
              <SignInButton mode="modal" signUpForceRedirectUrl="/dashboard">
                <button className="flex items-center gap-2 font-medium text-gray-700 hover:text-red-600">
                  Get Started
                </button>
              </SignInButton>
            ) : (
              <UserButton />
            )}
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="bg-white">
        <div className="max-w-[85rem] mx-auto px-4 pt-24 pb-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Understand Your Visitors,
            <br />
            <span className="text-red-600">
              Grow With Confidence
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Simple, privacy-friendly analytics to track traffic, users,
            and events — without complexity.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-md bg-red-600 px-6 py-3 text-white font-medium hover:bg-red-700 transition"
            >
              Launch Dashboard
              <svg
                className="size-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-[85rem] mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Real-Time Analytics",
              desc: "Track page views, users, and events instantly.",
            },
            {
              title: "Privacy First",
              desc: "No cookies. GDPR-friendly by default.",
            },
            {
              title: "Easy Setup",
              desc: "Add one script and start tracking.",
            },
            {
              title: "24/7 Support",
              desc: "We’re here whenever you need help.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-gray-200 p-6 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
