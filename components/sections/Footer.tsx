import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-grey-500">
      <small className="mb-2 block text-xs">
        <span className="font-semibold">About this website: </span>
        {""}
        built with React and Next.js (App Router and Server Actions),
        TypeScript, Tailwind CSS. Hosted on Vercel.
      </small>
    </footer>
  );
}
