import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const About: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.info("Visited About page:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="mx-4 w-full max-w-3xl rounded-lg bg-white p-8 shadow">
        <h1 className="mb-3 text-4xl font-bold">About Us</h1>
        <p className="mb-6 text-gray-600">
          This is the About page. Add your company story, mission, vision, and
          what makes you different. Keep it short for now—this is a placeholder.
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border bg-gray-50 p-4 text-center">
            <div className="text-2xl font-semibold">2019</div>
            <div className="text-xs uppercase text-gray-500">Founded</div>
          </div>
          <div className="rounded-lg border bg-gray-50 p-4 text-center">
            <div className="text-2xl font-semibold">150+</div>
            <div className="text-xs uppercase text-gray-500">Cities</div>
          </div>
          <div className="rounded-lg border bg-gray-50 p-4 text-center">
            <div className="text-2xl font-semibold">24/7</div>
            <div className="text-xs uppercase text-gray-500">Support</div>
          </div>
        </div>

        <a
          href="/contact"
          className="mt-8 inline-block text-blue-600 underline hover:text-blue-800"
        >
          Get in touch →
        </a>
      </div>
    </div>
  );
};

export default About;
