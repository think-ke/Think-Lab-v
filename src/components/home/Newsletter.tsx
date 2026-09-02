import { useState } from "react";
import { Send, CheckCircle2, XCircle } from "lucide-react";
import { motion } from "framer-motion";

import Container from "../common/Container";
import Logo from "../../assets/images/TH_Logo_FA_LAB.png";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setLoading(true);
  setSuccess("");
  setError("");

  const form = e.currentTarget;
  const formData = new FormData(form);

  const assessments = formData.getAll("assessment") as string[];

  if (assessments.length === 0) {
    setError("Please select at least one assessment.");
    setLoading(false);
    return;
  }

  const payload = {
    fullName: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    assessments,
  };

  try {
    const response = await fetch(`https://websites-labcommbackend-v8most-adf254-144-91-120-217.sslip.io/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Registration failed.");
    }

    setSuccess(
      "Thank you. Your registration has been received. We'll be in touch shortly."
    );
    form.reset();
  } catch (err) {
    setError(
      err instanceof Error ? err.message : "Something went wrong. Please try again."
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#F8F6FB] py-12 md:py-16"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-24 top-10 h-52 w-52 rounded-full border-[16px] border-violet-200/30" />

      <div className="pointer-events-none absolute -right-32 top-10 h-64 w-64 rounded-full bg-violet-100/50 blur-3xl" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto w-full max-w-2xl rounded-[24px] border border-violet-100 bg-white px-5 py-6 shadow-[0_15px_45px_rgba(42,8,78,0.08)] md:px-8 md:py-8"
        >
          {/* Logo + Heading */}
          <div className="text-center">
            <img
              src={Logo}
              alt="THiNK LAB"
              className="mx-auto w-[140px] object-contain md:w-[160px]"
            />

            <h2 className="font-heading mt-3 text-2xl font-bold text-[#2A084E] md:text-3xl">
              THiNK LAB Registration
            </h2>

            <p className="mx-auto mt-1.5 max-w-lg text-xs leading-5 text-slate-500 md:text-sm">
              Register your interest and choose the assessment you would like
              to participate in.
            </p>
          </div>

          {/* Feedback messages */}
          {error && (
            <div className="mt-4 flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              <XCircle size={18} className="mt-0.5 shrink-0" />
              <span>{error}</span>
            </div>
          )}
          {success && (
            <div className="mt-4 flex items-start gap-2.5 rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-700">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
              <span>{success}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {/* Name */}
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-slate-800">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                required
                className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
              />
            </div>

            {/* Email + Phone */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-slate-800">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  required
                  className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold text-slate-800">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="+254 7XX XXX XXX"
                  required
                  className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
                />
              </div>
            </div>

            {/* Assessment Selection */}
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-slate-800">
                Select Assessment{" "}
                <span className="font-normal text-slate-400">
                  (You may select both)
                </span>
              </label>

              <div className="grid gap-3 sm:grid-cols-2">
                {/* AIMM */}
                <label className="group flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-[#FCFBFE] p-3.5 transition hover:border-violet-300 hover:bg-violet-50">
                  <input
                    type="checkbox"
                    name="assessment"
                    value="AIMM"
                    className="mt-1 h-4 w-4 accent-violet-600"
                  />

                  <div>
                    <p className="text-sm font-bold text-[#2A084E]">
                      AIMM Assessment
                    </p>

                    <p className="mt-0.5 text-xs leading-4 text-slate-500">
                      AI Maturity Model assessment.
                    </p>
                  </div>
                </label>

                {/* AIDMM */}
                <label className="group flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-[#FCFBFE] p-3.5 transition hover:border-violet-300 hover:bg-violet-50">
                  <input
                    type="checkbox"
                    name="assessment"
                    value="AIDMM"
                    className="mt-1 h-4 w-4 accent-violet-600"
                  />

                  <div>
                    <p className="text-sm font-bold text-[#2A084E]">
                      AIDMM Assessment
                    </p>

                    <p className="mt-0.5 text-xs leading-4 text-slate-500">
                      AI & Data Maturity Model assessment.
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Free Assessment Notice */}
            <div className="flex items-start gap-2.5 rounded-lg border border-violet-100 bg-violet-50/70 p-3">
              <CheckCircle2
                size={17}
                className="mt-0.5 shrink-0 text-violet-600"
              />

              <div>
                <p className="text-xs font-bold text-[#2A084E]">
                  Complimentary Assessment
                </p>

                <p className="mt-0.5 text-[11px] leading-4 text-slate-600">
                  The first 20 organisations to register will receive a
                  complimentary assessment from THiNK LAB.
                </p>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#602191] to-[#7F4A9D] px-5 py-3 text-sm font-bold text-white shadow-md shadow-violet-200 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Register with THiNK LAB"}
              {!loading && <Send size={16} />}
            </button>

            <p className="text-center text-[10px] leading-4 text-slate-400">
              By submitting this form, you agree to be contacted by the THiNK
              LAB team regarding your registration.
            </p>
          </form>
        </motion.div>
      </Container>
    </section>
  );
};

export default ContactUs;