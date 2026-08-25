"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xoeaypbg", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        // Clear all fields after successful submission
        form.reset();

        setSuccess("आपका संदेश सफलतापूर्वक भेज दिया गया है।");

        // Remove success message after 5 seconds
        setTimeout(() => {
          setSuccess("");
        }, 5000);
      } else {
        const data = await response.json();

        if (data?.errors) {
          setError(
            data.errors.map((error) => error.message).join(", ")
          );
        } else {
          setError("संदेश भेजने में समस्या हुई। कृपया दोबारा प्रयास करें।");
        }
      }
    } catch (err) {
      setError("नेटवर्क समस्या हुई। कृपया अपना इंटरनेट कनेक्शन जांचें।");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-bold text-slate-700">
            नाम *
          </span>

          <input
            name="name"
            required
            disabled={loading}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3.5 outline-none focus:border-[var(--red)] disabled:cursor-not-allowed disabled:bg-slate-50"
            placeholder="अपना नाम"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-bold text-slate-700">
            मोबाइल नंबर *
          </span>

          <input
            name="phone"
            required
            type="tel"
            disabled={loading}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3.5 outline-none focus:border-[var(--red)] disabled:cursor-not-allowed disabled:bg-slate-50"
            placeholder="मोबाइल नंबर"
          />
        </label>
      </div>

      {/* Address */}
      <label className="block">
        <span className="mb-2 block text-sm font-bold text-slate-700">
          पता *
        </span>

        <textarea
          name="address"
          required
          disabled={loading}
          rows={3}
          className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3.5 outline-none focus:border-[var(--red)] disabled:cursor-not-allowed disabled:bg-slate-50"
          placeholder="अपना पूरा पता लिखें"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-bold text-slate-700">
          ईमेल
        </span>

        <input
          name="email"
          type="email"
          disabled={loading}
          className="w-full rounded-2xl border border-slate-200 px-4 py-3.5 outline-none focus:border-[var(--red)] disabled:cursor-not-allowed disabled:bg-slate-50"
          placeholder="you@example.com"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-bold text-slate-700">
          संदेश *
        </span>

        <textarea
          name="message"
          required
          disabled={loading}
          rows={6}
          className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3.5 outline-none focus:border-[var(--red)] disabled:cursor-not-allowed disabled:bg-slate-50"
          placeholder="अपना संदेश लिखें..."
        />
      </label>

      {/* Success message */}
      {success && (
        <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-bold text-green-700">
          {success}
        </div>
      )}

      {/* Error message */}
      {error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-700">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--red)] px-6 py-4 font-black text-white transition hover:bg-[var(--red-dark)] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {loading ? (
          <>
            <Loader2 size={19} className="animate-spin" />
            संदेश भेजा जा रहा है...
          </>
        ) : (
          "संदेश भेजें"
        )}
      </button>
    </form>
  );
          }
