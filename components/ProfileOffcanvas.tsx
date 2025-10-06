import React from "react";
import { X, User } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

const ProfileOffcanvas: React.FC<Props> = ({ open, onClose }) => {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/30 transition-opacity ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Panel */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-80 bg-white shadow-xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-lg font-semibold">Profile</h2>
          <button onClick={onClose} aria-label="Close panel" className="p-1 rounded hover:bg-muted">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-6 p-4">
          {/* Header */}
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
              <User className="h-6 w-6" />
            </div>
            <div>
              <p className="font-medium">Saurav</p>
              <p className="text-sm text-muted-foreground">saurav@example.com</p>
            </div>
          </div>

          {/* Quick facts */}
          <div className="rounded-lg border p-3">
            <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
              Overview
            </div>
            <ul className="space-y-2 text-sm">
              <li>📞 +91 98765 43210</li>
              <li>📍 Noida, India</li>
              <li>🪪 KYC: Verified</li>
              <li>🚘 Vendor: Yes</li>
              <li>🎖 Premium Experience: Active</li>
            </ul>
          </div>

          {/* Recent activity (dummy) */}
          <div className="rounded-lg border p-3">
            <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
              Recent Activity
            </div>
            <ul className="space-y-2 text-sm">
              <li>• Booked Chauffeur Taxi – 12 Sep</li>
              <li>• Submitted vendor documents – 08 Sep</li>
              <li>• Added payment method – 03 Sep</li>
            </ul>
          </div>

          {/* Actions (examples) */}
          <div className="grid grid-cols-2 gap-2">
            <button className="rounded-md border px-3 py-2 text-sm hover:border-emerald-600">
              Edit Profile
            </button>
            <button className="rounded-md border px-3 py-2 text-sm hover:border-emerald-600">
              My Bookings
            </button>
            <button className="rounded-md border px-3 py-2 text-sm hover:border-emerald-600">
              Payments
            </button>
            <button className="rounded-md border px-3 py-2 text-sm hover:border-emerald-600">
              Logout
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default ProfileOffcanvas;
