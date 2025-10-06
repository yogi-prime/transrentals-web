import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Contact: React.FC = () => {
  const location = useLocation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    console.info("Visited Contact page:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="mx-4 w-full max-w-3xl rounded-lg bg-white p-8 shadow">
        <h1 className="mb-3 text-4xl font-bold">Contact Us</h1>
        <p className="mb-6 text-gray-600">
          This is a dummy contact page. Add your support email, phone, or hook
          the form to your API later.
        </p>

        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border bg-gray-50 p-4">
            <div className="text-sm text-gray-500">Email</div>
            <div className="font-medium">support@example.com</div>
          </div>
          <div className="rounded-lg border bg-gray-50 p-4">
            <div className="text-sm text-gray-500">Phone</div>
            <div className="font-medium">+91 99999 99999</div>
          </div>
        </div>

        {/* Dummy form (no submit action yet) */}
        <form
          className="grid gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Contact form (dummy submit):", form);
            alert("This is a dummy form. Wire it to your API when ready.");
          }}
        >
          <input
            className="h-11 rounded border px-3 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            className="h-11 rounded border px-3 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <textarea
            className="min-h-[120px] rounded border p-3 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <button
            type="submit"
            className="h-11 rounded bg-blue-600 px-5 font-medium text-white hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>

        <a
          href="/"
          className="mt-6 inline-block text-blue-600 underline hover:text-blue-800"
        >
          ← Back to Home
        </a>
      </div>
    </div>
  );
};

export default Contact;
