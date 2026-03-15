"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const COOKIE_CONSENT_KEY = "mr-cookie-consent";
const COOKIE_PREFERENCES_KEY = "mr-cookie-preferences";

function getCookiePreferences(): CookiePreferences | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(COOKIE_PREFERENCES_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

function saveCookiePreferences(prefs: CookiePreferences) {
  localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(prefs));
  localStorage.setItem(COOKIE_CONSENT_KEY, "true");
}

export function useCookieConsent() {
  const [preferences, setPreferences] = useState<CookiePreferences | null>(null);

  useEffect(() => {
    setPreferences(getCookiePreferences());
  }, []);

  return preferences;
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay so it doesn't flash on load
      const timer = setTimeout(() => setVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true };
    saveCookiePreferences(allAccepted);
    setVisible(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = { necessary: true, analytics: false, marketing: false };
    saveCookiePreferences(onlyNecessary);
    setVisible(false);
  };

  const handleSavePreferences = () => {
    saveCookiePreferences(preferences);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      {/* Overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 9998,
          backdropFilter: "blur(2px)",
        }}
      />

      {/* Banner */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          backgroundColor: "#fff",
          boxShadow: "0 -4px 30px rgba(0,0,0,0.15)",
          borderTop: "3px solid var(--main-color-1, #2d4a2e)",
          animation: "slideUp 0.4s ease-out",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "28px 24px",
          }}
        >
          {/* Main content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ fontSize: "24px" }}>🍪</span>
              <h3 style={{ fontSize: "18px", fontWeight: 700, margin: 0, color: "#1a1a1a" }}>
                Cookie-Einstellungen
              </h3>
            </div>

            <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#555", margin: 0 }}>
              Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
              Technisch notwendige Cookies sind für den Betrieb der Website erforderlich.
              Analyse- und Marketing-Cookies werden nur mit Ihrer ausdrücklichen Einwilligung gesetzt
              (Art. 6 Abs. 1 lit. a DSGVO). Weitere Informationen finden Sie in unserer{" "}
              <Link
                href="/cookie-richtlinie"
                style={{ color: "var(--main-color-1, #2d4a2e)", textDecoration: "underline", fontWeight: 500 }}
              >
                Cookie-Richtlinie
              </Link>{" "}
              und{" "}
              <Link
                href="/datenschutz"
                style={{ color: "var(--main-color-1, #2d4a2e)", textDecoration: "underline", fontWeight: 500 }}
              >
                Datenschutzerklärung
              </Link>.
            </p>

            {/* Details toggle */}
            {showDetails && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  padding: "16px",
                  backgroundColor: "#f8f8f8",
                  borderRadius: "8px",
                  border: "1px solid #eee",
                }}
              >
                {/* Necessary */}
                <label style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "default" }}>
                  <input
                    type="checkbox"
                    checked={true}
                    disabled
                    style={{ width: "18px", height: "18px", accentColor: "var(--main-color-1, #2d4a2e)" }}
                  />
                  <div>
                    <strong style={{ fontSize: "14px", color: "#1a1a1a" }}>Technisch notwendig</strong>
                    <p style={{ fontSize: "12px", color: "#777", margin: "2px 0 0" }}>
                      Erforderlich für den Betrieb der Website (z. B. Cookie-Präferenzen, Sicherheit). Rechtsgrundlage: § 25 Abs. 2 Nr. 2 TDDDG.
                    </p>
                  </div>
                </label>

                {/* Analytics */}
                <label style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                    style={{ width: "18px", height: "18px", accentColor: "var(--main-color-1, #2d4a2e)" }}
                  />
                  <div>
                    <strong style={{ fontSize: "14px", color: "#1a1a1a" }}>Analyse & Performance</strong>
                    <p style={{ fontSize: "12px", color: "#777", margin: "2px 0 0" }}>
                      Helfen uns zu verstehen, wie Besucher mit der Website interagieren (z. B. Google Analytics). Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO.
                    </p>
                  </div>
                </label>

                {/* Marketing */}
                <label style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                    style={{ width: "18px", height: "18px", accentColor: "var(--main-color-1, #2d4a2e)" }}
                  />
                  <div>
                    <strong style={{ fontSize: "14px", color: "#1a1a1a" }}>Marketing & Tracking</strong>
                    <p style={{ fontSize: "12px", color: "#777", margin: "2px 0 0" }}>
                      Werden verwendet, um relevante Werbung anzuzeigen. Daten können in Drittstaaten übermittelt werden (Art. 49 Abs. 1 lit. a DSGVO).
                    </p>
                  </div>
                </label>
              </div>
            )}

            {/* Buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                alignItems: "center",
                marginTop: "4px",
              }}
            >
              <button
                onClick={handleAcceptAll}
                style={{
                  padding: "12px 28px",
                  backgroundColor: "var(--main-color-1, #2d4a2e)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "opacity 0.2s",
                }}
              >
                Alle akzeptieren
              </button>

              {showDetails && (
                <button
                  onClick={handleSavePreferences}
                  style={{
                    padding: "12px 28px",
                    backgroundColor: "var(--main-color-1, #2d4a2e)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "opacity 0.2s",
                  }}
                >
                  Auswahl speichern
                </button>
              )}

              <button
                onClick={handleRejectAll}
                style={{
                  padding: "12px 28px",
                  backgroundColor: "transparent",
                  color: "#555",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                Nur notwendige
              </button>

              <button
                onClick={() => setShowDetails(!showDetails)}
                style={{
                  padding: "12px 20px",
                  backgroundColor: "transparent",
                  color: "var(--main-color-1, #2d4a2e)",
                  border: "none",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                }}
              >
                {showDetails ? "Weniger anzeigen" : "Einstellungen anzeigen"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes slideUp {
            from { transform: translateY(100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `
      }} />
    </>
  );
}
