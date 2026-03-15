"use client";

import Link from "next/link";
import { Activity } from "lucide-react";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF9F8] px-8">
      <div className="w-full max-w-md text-center">
        <div className="w-12 h-12 rounded-2xl bg-blush flex items-center justify-center mx-auto mb-6">
          <Activity className="w-6 h-6 text-primary" />
        </div>
        <h1 className="text-2xl font-bold text-secondary mb-2">Reset your password</h1>
        <p className="text-neutral text-sm mb-8">
          Password reset via email is not configured in this demo. Please contact your administrator or update your password in Settings after signing in.
        </p>
        <Link href="/login" className="btn-primary inline-flex">
          Back to Sign In
        </Link>
      </div>
    </div>
  );
}
