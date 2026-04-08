"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { Key } from "@heroui/react";
import { ListBox, Select } from "@heroui/react";
import {
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Globe,
} from "lucide-react";

import { CarPulseLogo } from "./CarPulseLogo";

type MetaItem = { value: string; label: string };
type PublicDemosMetaResponse = { user_types: MetaItem[]; meeting_platforms: MetaItem[] };
type AvailabilitySlot = { id: string; start_time: string; end_time: string };
type AvailabilityDay = { date: string; slots: AvailabilitySlot[] };
type AvailabilityResponse = { days: AvailabilityDay[] };

/** Corps unique pour POST `/public/demos/sessions` (création de session complète). */
type CreateDemoSessionBody = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  user_type: string;
  timezone: string;
  slot_id: string;
  notes: string;
  meeting_platform: string;
  email_reminder_enabled: boolean;
};

type CreateDemoSessionResponse = {
  id: string;
  step: number;
  expires_at: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  user_type: string;
  timezone: string;
  slot_id: string;
  meeting_platform: string;
  notes: string;
  email_reminder_enabled: boolean;
};

const DEFAULT_USER_TYPES: MetaItem[] = [
  { value: "individual", label: "Particulier" },
  { value: "professional", label: "Professionnel" },
  { value: "dealer", label: "Concessionnaire / distributeur" },
  { value: "company", label: "Entreprise / flotte" },
];

/** Plateforme fixe pour toutes les démos (création + confirmation). */
const DEMO_MEETING_PLATFORM = "google_meet";
const DEMO_MEETING_PLATFORM_LABEL = "Google Meet";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function fmtDateFr(d: Date) {
  return d.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function isoDay(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

async function fetchJson<T>(
  url: string,
  init?: RequestInit,
): Promise<
  | { ok: true; data: T }
  | { ok: false; status: number; error: string; raw?: unknown }
> {
  try {
    const res = await fetch(url, {
      ...init,
      headers: { accept: "application/json", ...(init?.headers ?? {}) },
      cache: "no-store",
    });
    const status = res.status;
    const text = await res.text();
    const raw = text
      ? (() => {
          try {
            return JSON.parse(text);
          } catch {
            return text;
          }
        })()
      : null;
    if (!res.ok) {
      return {
        ok: false,
        status,
        error: typeof raw === "string" ? raw : JSON.stringify(raw),
        raw,
      };
    }
    return { ok: true, data: (raw ?? {}) as T };
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return { ok: false, status: 0, error: msg };
  }
}

function normalizeMetaItems(raw: unknown): MetaItem[] {
  if (Array.isArray(raw)) {
    return raw
      .map((x) => {
        if (!x || typeof x !== "object") return null;
        const o = x as Record<string, unknown>;
        const value = o.value ?? o.id ?? o.key ?? o.code;
        const label = o.label ?? o.name ?? o.title ?? o.description ?? value;
        if (value == null || String(value).trim() === "") return null;
        return { value: String(value), label: String(label ?? value) };
      })
      .filter((x): x is MetaItem => x !== null);
  }
  if (raw && typeof raw === "object") {
    return Object.entries(raw as Record<string, unknown>)
      .map(([k, v]) => ({ value: String(k), label: String(v ?? k) }))
      .filter((x) => x.value.trim() !== "");
  }
  return [];
}

function normalizeMeta(raw: unknown): PublicDemosMetaResponse {
  const root =
    raw &&
    typeof raw === "object" &&
    "data" in (raw as object) &&
    (raw as { data?: unknown }).data &&
    typeof (raw as { data?: unknown }).data === "object"
      ? (raw as { data: unknown }).data
      : raw;

  if (!root || typeof root !== "object") return { user_types: [], meeting_platforms: [] };
  const r = root as Record<string, unknown>;
  return {
    user_types: normalizeMetaItems(
      r.user_types ?? r.userTypes ?? r.user_type_options ?? r.userTypeOptions,
    ),
    meeting_platforms: normalizeMetaItems(
      r.meeting_platforms ??
        r.meetingPlatforms ??
        r.platforms ??
        r.meetingPlatformsOptions,
    ),
  };
}

function SkeletonLine({ className }: { className?: string }) {
  return (
    <div className={cx("h-10 w-full animate-pulse rounded-xl bg-neutral-200", className)} />
  );
}

/** Illustration calendrier + pastille succès (maquette Figma). */
function PlanifierDemoSuccessIllustration() {
  return (
    <svg
      className="h-full w-full"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="pd-cal-head" x1="24" y1="34" x2="24" y2="62" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF9A4D" />
          <stop offset="1" stopColor="#FF7A2E" />
        </linearGradient>
        <filter id="pd-cal-soft" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.08" />
        </filter>
      </defs>
      {/* ombre portée légère */}
      <rect x="26" y="38" width="68" height="72" rx="14" fill="#000000" fillOpacity="0.06" />
      {/* corps calendrier */}
      <rect x="24" y="36" width="68" height="72" rx="14" fill="#FFF8F0" stroke="#EAD8C8" strokeWidth="1" />
      {/* bandeau orange (bas droit) */}
      <path
        d="M 30 36 H 86 Q 92 36 92 42 V 60 H 24 V 42 Q 24 36 30 36 Z"
        fill="url(#pd-cal-head)"
        filter="url(#pd-cal-soft)"
      />
      {/* anneaux / spirales blanches sur le bandeau */}
      <circle cx="42" cy="48" r="2.8" fill="#FFFFFF" fillOpacity="0.95" />
      <circle cx="58" cy="48" r="2.8" fill="#FFFFFF" fillOpacity="0.95" />
      <circle cx="74" cy="48" r="2.8" fill="#FFFFFF" fillOpacity="0.95" />
      {/* grille 2x3 — pastilles dates */}
      <rect x="32" y="70" width="14" height="12" rx="3" fill="#FF8E2B" />
      <rect x="51" y="70" width="14" height="12" rx="3" fill="#FF8E2B" />
      <rect x="70" y="70" width="14" height="12" rx="3" fill="#FF8E2B" />
      <rect x="32" y="86" width="14" height="12" rx="3" fill="#FF8E2B" />
      <rect x="51" y="86" width="14" height="12" rx="3" fill="#FF8E2B" />
      <rect x="70" y="86" width="14" height="12" rx="3" fill="#FF8E2B" />
      {/* pastille verte + check (coin bas-droit) */}
      <circle cx="90" cy="98" r="20" fill="#22C55E" />
      <path
        d="M 81.5 98 L 87.5 104 L 99.5 92"
        stroke="#FFFFFF"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PlanifierDemoPage() {
  const DEBUG = process.env.NODE_ENV !== "production";

  const [currentStep, setCurrentStep] = useState(1);
  const [apiError, setApiError] = useState<string | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isSubmittingSession, setIsSubmittingSession] = useState(false);

  const [form, setForm] = useState({
    lastName: "",
    firstName: "",
    email: "",
    phone: "",
    userType: "",
    timezone:
      (typeof Intl !== "undefined"
        ? Intl.DateTimeFormat().resolvedOptions().timeZone
        : undefined) || "Europe/Paris",
    selectedDate: null as Date | null,
    selectedSlotId: "",
    message: "",
    notificationsEnabled: true,
  });

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const [meta, setMeta] = useState<PublicDemosMetaResponse | null>(null);
  const [metaLoading, setMetaLoading] = useState(true);
  const [metaError, setMetaError] = useState<string | null>(null);

  const [currentMonth, setCurrentMonth] = useState(() => new Date());
  const [availability, setAvailability] = useState<AvailabilityResponse | null>(null);
  const [availabilityLoading, setAvailabilityLoading] = useState(true);
  const [availabilityError, setAvailabilityError] = useState<string | null>(null);

  const timezones = useMemo(
    () => [
      { value: "Europe/Paris", label: "Europe/Paris" },
      { value: "Europe/London", label: "Europe/London" },
      { value: "America/New_York", label: "America/New_York" },
      { value: "Asia/Tokyo", label: "Asia/Tokyo" },
    ],
    [],
  );

  const [isTimezoneOpen, setIsTimezoneOpen] = useState(false);
  const timezoneRef = useRef<HTMLDivElement>(null);
  const timezoneButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isTimezoneOpen) return;
      if (
        timezoneRef.current &&
        !timezoneRef.current.contains(event.target as Node) &&
        timezoneButtonRef.current &&
        !timezoneButtonRef.current.contains(event.target as Node)
      ) {
        setIsTimezoneOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isTimezoneOpen]);

  // Meta
  useEffect(() => {
    void (async () => {
      setMetaLoading(true);
      setMetaError(null);
      const res = await fetchJson<unknown>("/api/public/demos/meta");
      if (!res.ok) {
        setMeta(null);
        setMetaError(res.error || "Impossible de charger les métadonnées.");
        setMetaLoading(false);
        if (DEBUG) console.error("[planifier-demo][meta] error", res);
        return;
      }
      setMeta(normalizeMeta(res.data));
      setMetaLoading(false);
    })();
  }, [DEBUG]);

  // Availability
  useEffect(() => {
    void (async () => {
      setAvailabilityLoading(true);
      setAvailabilityError(null);
      const month = currentMonth.getMonth() + 1;
      const year = currentMonth.getFullYear();
      const url = `/api/public/demos/availability?month=${month}&year=${year}&timezone=${encodeURIComponent(
        form.timezone,
      )}`;
      const res = await fetchJson<AvailabilityResponse>(url);
      if (!res.ok) {
        setAvailability(null);
        setAvailabilityError(res.error || "Impossible de charger les disponibilités.");
        setAvailabilityLoading(false);
        if (DEBUG) console.error("[planifier-demo][availability] error", res);
        return;
      }
      setAvailability(res.data);
      setAvailabilityLoading(false);
    })();
  }, [DEBUG, currentMonth, form.timezone]);

  const userTypesResolved = useMemo(() => {
    const list = meta?.user_types ?? [];
    if (list.length > 0) return list;
    if (metaLoading) return [];
    return DEFAULT_USER_TYPES;
  }, [meta?.user_types, metaLoading]);

  /** Une seule entrée : plus de choix de plateforme côté client (évite ReferenceError si le JSX y fait encore référence). */
  const platformsResolved = useMemo(
    (): MetaItem[] => [{ value: DEMO_MEETING_PLATFORM, label: DEMO_MEETING_PLATFORM_LABEL }],
    [],
  );

  const availabilityDays = useMemo(() => availability?.days ?? [], [availability?.days]);
  const availableSet = useMemo(() => new Set(availabilityDays.map((d) => d.date)), [availabilityDays]);

  const selectedDateIso = useMemo(() => (form.selectedDate ? isoDay(form.selectedDate) : null), [form.selectedDate]);

  const selectedDaySlots = useMemo(() => {
    if (!selectedDateIso) return [];
    return availabilityDays.find((d) => d.date === selectedDateIso)?.slots ?? [];
  }, [availabilityDays, selectedDateIso]);

  const selectedSlotLabel = useMemo(() => {
    if (!form.selectedSlotId) return "";
    const slot = selectedDaySlots.find((s) => s.id === form.selectedSlotId);
    return slot ? `${slot.start_time} - ${slot.end_time}` : "";
  }, [form.selectedSlotId, selectedDaySlots]);

  const monthNames = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];
  const dayNames = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];

  function getCalendarDays() {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    const days: Array<Date | null> = [];
    for (let i = 0; i < startingDayOfWeek; i++) days.push(null);
    for (let day = 1; day <= daysInMonth; day++) days.push(new Date(year, month, day));
    return days;
  }

  async function handleNext() {
    setApiError(null);
    if (currentStep === 1) {
      // Pas d’appel API ici : la création se fait en un seul POST à l’étape 3 (corps complet).
      setCurrentStep(2);
      return;
    }
    if (currentStep === 2) {
      if (!form.selectedDate || !form.selectedSlotId) {
        setApiError("Veuillez sélectionner une date et un créneau.");
        return;
      }
      setCurrentStep(3);
    }
  }

  async function handleConfirm() {
    setApiError(null);
    if (isSubmittingSession) return;
    if (!form.selectedSlotId) {
      setApiError("Veuillez sélectionner un créneau.");
      return;
    }
    const body: CreateDemoSessionBody = {
      first_name: form.firstName.trim(),
      last_name: form.lastName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      user_type: form.userType,
      timezone: form.timezone,
      slot_id: form.selectedSlotId,
      notes: form.message,
      meeting_platform: DEMO_MEETING_PLATFORM,
      email_reminder_enabled: form.notificationsEnabled,
    };

    setIsSubmittingSession(true);
    try {
      const res = await fetchJson<CreateDemoSessionResponse>("/api/public/demos/sessions", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        setApiError(res.error || "Impossible de créer la session de démo.");
        return;
      }
      setIsConfirmed(true);
    } finally {
      setIsSubmittingSession(false);
    }
  }

  function handleBack() {
    if (currentStep > 1) setCurrentStep((s) => s - 1);
  }

  function handleOk() {
    window.location.assign("/");
  }

  return (
    <div className="planifier-demo-page">
      <header className="planifier-demo-header">
        <div className="planifier-demo-header-inner">
          <div className="planifier-demo-logo">
            <CarPulseLogo className="planifier-demo-logo-svg" />
          </div>
        </div>
      </header>

      <main className="planifier-demo-main">
        <div className="planifier-demo-container">
          <div className="planifier-demo-title-section">
            <h1 className="planifier-demo-title">Planifier une démo</h1>
          </div>

          <div className="planifier-demo-progress-container">
            <div className="planifier-demo-progress-bar">
              <div
                className="planifier-demo-progress-bar-filled"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              />
            </div>
            <span className="planifier-demo-progress-text">Etape {currentStep}/3</span>
          </div>

          {apiError ? (
            <div
              className="mb-4 rounded-xl border border-orange-200 bg-orange-50 px-4 py-3 text-sm font-bold text-orange-800"
              role="alert"
            >
              {apiError}
            </div>
          ) : null}

          {currentStep === 1 ? (
            <>
              <div className="planifier-demo-section-title">
                <h2 className="planifier-demo-section-title-text">Informations personnelles</h2>
              </div>

              {metaError ? (
                <div
                  className="mb-3 rounded-xl border border-orange-200 bg-orange-50 px-3 py-2 text-xs font-bold text-orange-800"
                  role="status"
                >
                  Impossible de charger la liste depuis le serveur — types par défaut affichés.
                </div>
              ) : null}

              <form
                className="planifier-demo-form mx-auto w-full max-w-[820px]"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="planifier-demo-form-grid">
                  <div className="planifier-demo-form-field">
                    <label className="planifier-demo-form-label" htmlFor="pd-lastname">
                      Nom
                    </label>
                    <input
                      id="pd-lastname"
                      className="planifier-demo-input"
                      placeholder="Votre nom"
                      value={form.lastName}
                      onChange={(e) => setForm((p) => ({ ...p, lastName: e.target.value }))}
                    />
                  </div>

                  <div className="planifier-demo-form-field">
                    <label className="planifier-demo-form-label" htmlFor="pd-firstname">
                      Prénom
                    </label>
                    <input
                      id="pd-firstname"
                      className="planifier-demo-input"
                      placeholder="Votre prénom"
                      value={form.firstName}
                      onChange={(e) => setForm((p) => ({ ...p, firstName: e.target.value }))}
                    />
                  </div>

                  <div className="planifier-demo-form-field">
                    <label className="planifier-demo-form-label" htmlFor="pd-email">
                      Email
                    </label>
                    <input
                      id="pd-email"
                      type="email"
                      className="planifier-demo-input"
                      placeholder="ex: mailuser@domail"
                      value={form.email}
                      onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    />
                  </div>

                  <div className="planifier-demo-form-field">
                    <label className="planifier-demo-form-label" htmlFor="pd-phone">
                      Numéro de téléphone
                    </label>
                    <input
                      id="pd-phone"
                      type="tel"
                      className="planifier-demo-input"
                      placeholder="Placeholder"
                      value={form.phone}
                      onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                    />
                  </div>

                  <div className="planifier-demo-form-field">
                    <label className="planifier-demo-form-label" htmlFor="pd-user-type">
                      Type d&apos;utilisateur
                    </label>
                    <Select
                      aria-label="Type d'utilisateur"
                      value={(form.userType || null) as Key | null}
                      onChange={(value) =>
                        setForm((p) => ({ ...p, userType: value ? String(value) : "" }))
                      }
                      isDisabled={metaLoading}
                      placeholder={metaLoading ? "Chargement…" : "Sélectionner utilisateur"}
                      className="w-full planifier-demo-heroui-select"
                      variant="secondary"
                    >
                      <Select.Trigger className="planifier-demo-heroui-trigger">
                        <Select.Value className="planifier-demo-heroui-value" />
                        <Select.Indicator className="planifier-demo-heroui-indicator" />
                      </Select.Trigger>
                      <Select.Popover className="planifier-demo-heroui-popover">
                        <ListBox className="planifier-demo-heroui-listbox">
                          {userTypesResolved.map((t) => (
                            <ListBox.Item
                              key={t.value}
                              id={t.value}
                              textValue={t.label}
                              className="planifier-demo-heroui-item"
                            >
                              {t.label}
                            </ListBox.Item>
                          ))}
                        </ListBox>
                      </Select.Popover>
                    </Select>
                  </div>
                </div>

                <div className="planifier-demo-actions">
                  <button
                    type="button"
                    className="planifier-demo-btn planifier-demo-btn-cancel"
                    onClick={handleOk}
                  >
                    Annuler
                  </button>
                  <button
                    type="button"
                    onClick={() => void handleNext()}
                    className="planifier-demo-btn planifier-demo-btn-next"
                    disabled={metaLoading}
                  >
                    Suivant
                  </button>
                </div>
              </form>
            </>
          ) : null}

          {currentStep === 2 ? (
            <section>
              <div className="planifier-demo-section-title">
                <h2 className="planifier-demo-section-title-text">Sélectionner un créneau.</h2>
              </div>

              <div className="planifier-demo-step2-grid">
                <div className="planifier-demo-step2-card">
                  <div className="planifier-demo-step2-card-title">Sélectionner un créneau</div>

                  <div className="planifier-demo-step2-timezone" ref={timezoneRef}>
                    <button
                      ref={timezoneButtonRef}
                      type="button"
                      onClick={() => setIsTimezoneOpen((v) => !v)}
                      className="planifier-demo-step2-timezone-btn"
                    >
                      <span className="planifier-demo-step2-timezone-left">
                        <Globe size={16} />
                        {form.timezone}
                        <span className="planifier-demo-step2-timezone-suffix">(UTC +1)</span>
                      </span>
                      <ChevronDown
                        size={16}
                        className={cx(
                          "planifier-demo-step2-timezone-caret",
                          isTimezoneOpen && "is-open",
                        )}
                      />
                    </button>

                    {isTimezoneOpen ? (
                      <div className="planifier-demo-step2-timezone-menu">
                        {timezones.map((tz) => (
                          <button
                            key={tz.value}
                            type="button"
                            onClick={() => {
                              setForm((p) => ({ ...p, timezone: tz.value }));
                              setIsTimezoneOpen(false);
                            }}
                            className={cx(
                              "planifier-demo-step2-timezone-item",
                              form.timezone === tz.value && "is-selected",
                            )}
                          >
                            {tz.label}
                          </button>
                        ))}
                      </div>
                    ) : null}
                  </div>

                  <div className="planifier-demo-step2-calendar">
                    <div className="planifier-demo-step2-month-row">
                      <div className="planifier-demo-step2-month-title">
                        {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                      </div>
                      <div className="planifier-demo-step2-month-nav">
                        <button
                          type="button"
                          onClick={() =>
                            setCurrentMonth((d) => new Date(d.getFullYear(), d.getMonth() - 1, 1))
                          }
                          className="planifier-demo-step2-nav-btn"
                          aria-label="Mois précédent"
                        >
                          <ChevronLeft size={16} />
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            setCurrentMonth((d) => new Date(d.getFullYear(), d.getMonth() + 1, 1))
                          }
                          className="planifier-demo-step2-nav-btn"
                          aria-label="Mois suivant"
                        >
                          <ChevronRight size={16} />
                        </button>
                      </div>
                    </div>

                    <div className="planifier-demo-step2-dow">
                      {dayNames.map((d) => (
                        <div key={d} className="planifier-demo-step2-dow-item">
                          {d}
                        </div>
                      ))}
                    </div>

                    <div className="planifier-demo-step2-days">
                      {getCalendarDays().map((d, idx) => {
                        if (!d) return <div key={`empty-${idx}`} />;
                      const todayStart = new Date();
                      todayStart.setHours(0, 0, 0, 0);
                        const dayIso = isoDay(d);
                      const isPast = d.getTime() < todayStart.getTime();
                      const isAvailable = availableSet.has(dayIso) && !isPast;
                        const isSelected = form.selectedDate && isoDay(form.selectedDate) === dayIso;
                        return (
                          <button
                            key={dayIso}
                            type="button"
                            disabled={!isAvailable || availabilityLoading}
                            onClick={() =>
                              setForm((p) => ({ ...p, selectedDate: d, selectedSlotId: "" }))
                            }
                            className={cx(
                              "planifier-demo-step2-day-btn",
                              isSelected && "is-selected",
                            (!isAvailable || availabilityLoading) && "is-disabled",
                            )}
                          >
                            {d.getDate()}
                          </button>
                        );
                      })}
                    </div>

                    {availabilityError ? (
                      <div className="planifier-demo-step2-inline-error">{availabilityError}</div>
                    ) : null}
                  </div>
                </div>

                <div className="planifier-demo-step2-card">
                  <div className="planifier-demo-step2-card-title">Sélectionner l&apos;heure</div>

                  <div className="planifier-demo-step2-slots">
                    {availabilityLoading ? (
                      <div className="grid gap-3">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <SkeletonLine key={i} className="h-12 rounded-2xl" />
                        ))}
                      </div>
                    ) : selectedDateIso && selectedDaySlots.length > 0 ? (
                      <div className="planifier-demo-step2-slots-list">
                        {selectedDaySlots.map((s) => {
                          const label = `${s.start_time} - ${s.end_time}`;
                          const selected = form.selectedSlotId === s.id;
                          return (
                            <button
                              key={s.id}
                              type="button"
                              onClick={() => setForm((p) => ({ ...p, selectedSlotId: s.id }))}
                              className={cx(
                                "planifier-demo-step2-slot",
                                selected && "is-selected",
                              )}
                            >
                              <span className="planifier-demo-step2-radio" aria-hidden>
                                <span className="planifier-demo-step2-radio-dot" />
                              </span>
                              <span className="planifier-demo-step2-slot-time">{label}</span>
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="planifier-demo-step2-empty">
                        Sélectionnez une date.
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="planifier-demo-step2-actions">
                <button
                  type="button"
                  onClick={handleBack}
                  className="planifier-demo-step2-btn planifier-demo-step2-btn-back"
                >
                  Retour
                </button>
                <button
                  type="button"
                  onClick={() => void handleNext()}
                  className="planifier-demo-step2-btn planifier-demo-step2-btn-next"
                >
                  Suivant
                </button>
              </div>
            </section>
          ) : null}

          {currentStep === 3 ? (
            <section>
              <div className="planifier-demo-section-title">
                <h2 className="planifier-demo-section-title-text">Confirmation du rendez-vous</h2>
              </div>

              <div className="planifier-demo-step3-grid grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="planifier-demo-step3-left min-w-0">
                  <div className="planifier-demo-step3-label grid gap-2 text-[11px] font-semibold text-neutral-900">
                    <label htmlFor="pd-message-step3">
                      Envoyer un message ou points particuliers (facultatif)
                    </label>
                    <textarea
                      id="pd-message-step3"
                      className="planifier-demo-step3-textarea w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-[12px] font-medium text-neutral-900 outline-none focus:ring-2 focus:ring-[#FF8E01]/20"
                      placeholder="Placeholder"
                      value={form.message}
                      onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="planifier-demo-step3-details rounded-[10px] border border-[#FDE7D2] bg-[#FFF7ED] p-[18px]">
                  <div className="planifier-demo-step3-details-title text-[13px] font-extrabold text-neutral-900">
                    Détails de la réunion
                  </div>
                  <p className="planifier-demo-step3-details-desc mt-2 text-[11px] font-medium leading-normal text-neutral-500">
                    Cette réunion a pour objectif de vous présenter les fonctionnalités clés de
                    CarPulse et de répondre à vos questions afin d&apos;évaluer si la plateforme
                    correspond à vos besoins.
                  </p>

                  <div className="planifier-demo-step3-details-rows mt-3 grid gap-3">
                    <div className="planifier-demo-step3-row grid grid-cols-[18px_1fr] gap-3">
                      <Calendar size={16} className="planifier-demo-step3-row-icon mt-px text-[#FF8E01]" />
                      <div className="planifier-demo-step3-row-body grid gap-[2px]">
                        <div className="planifier-demo-step3-row-label text-[10px] font-bold text-neutral-500">
                          Date
                        </div>
                        <div className="planifier-demo-step3-row-value text-[12px] font-bold text-neutral-900">
                          {form.selectedDate ? fmtDateFr(form.selectedDate) : "Non sélectionnée"}
                        </div>
                      </div>
                    </div>

                    <div className="planifier-demo-step3-row grid grid-cols-[18px_1fr] gap-3">
                      <Clock size={16} className="planifier-demo-step3-row-icon mt-px text-[#FF8E01]" />
                      <div className="planifier-demo-step3-row-body grid gap-[2px]">
                        <div className="planifier-demo-step3-row-label text-[10px] font-bold text-neutral-500">
                          Heure
                        </div>
                        <div className="planifier-demo-step3-row-value text-[12px] font-bold text-neutral-900">
                          {selectedSlotLabel
                            ? `${selectedSlotLabel} (${form.timezone})`
                            : "Non sélectionnée"}
                        </div>
                      </div>
                    </div>

                    <div className="planifier-demo-step3-row grid grid-cols-[18px_1fr] gap-3">
                      <span className="mt-px inline-flex h-4 w-4 items-center justify-center" aria-hidden>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.6143 16.0112L19.9855 18.7212L23.1922 20.7762L23.7568 16.0338L23.1922 11.4043L19.9403 13.2109L17.6143 16.0112Z"
                            fill="#00832D"
                          />
                          <path
                            d="M3.79395 20.3246V24.3669C3.79395 25.2928 4.53918 26.0381 5.46508 26.0381H9.50742L10.343 22.9894L9.53001 20.3246L6.75231 19.489L3.79395 20.3246Z"
                            fill="#0066DA"
                          />
                          <path
                            d="M9.53001 5.96191L3.79395 11.6754L6.72973 12.511L9.50742 11.6754L10.3204 9.05577L9.53001 5.96191Z"
                            fill="#E94235"
                          />
                          <path
                            d="M9.53001 11.6753H3.79395V20.3246H9.50742V11.6753H9.53001Z"
                            fill="#2684FC"
                          />
                          <path
                            d="M26.8288 8.37819L23.1704 11.3817V20.7762L26.8288 23.7797C27.3708 24.2088 28.1838 23.8249 28.1838 23.1248V9.0331C28.2064 8.33303 27.3934 7.92653 26.8288 8.37819ZM17.615 16.0112V20.3246H9.53027V26.038H21.5218C22.4477 26.038 23.1929 25.2928 23.1929 24.3669V20.7762L17.615 16.0112Z"
                            fill="#00AC47"
                          />
                          <path
                            d="M21.5218 5.96191H9.53027V11.6754H17.615V15.9887L23.1929 11.3592V7.63305C23.1929 6.70715 22.4477 5.96191 21.5218 5.96191Z"
                            fill="#FFBA00"
                          />
                        </svg>
                      </span>
                      <div className="planifier-demo-step3-row-body grid gap-[2px]">
                        <div className="planifier-demo-step3-row-label text-[10px] font-bold text-neutral-500">
                          Réunion
                        </div>
                        <div className="planifier-demo-step3-row-value text-[12px] font-bold text-neutral-900">
                          {platformsResolved[0]?.label ?? DEMO_MEETING_PLATFORM_LABEL}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="planifier-demo-step3-actions mt-6 flex justify-end gap-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className="planifier-demo-step3-btn planifier-demo-step3-btn-back rounded-[10px] border border-neutral-300 bg-white px-10 py-2 text-[12px] font-bold text-neutral-900"
                >
                  Retour
                </button>
                <button
                  type="button"
                  onClick={() => void handleConfirm()}
                  disabled={isSubmittingSession}
                  className="planifier-demo-step3-btn planifier-demo-step3-btn-confirm rounded-[10px] border border-[#FF8E01] bg-[#FF8E01] px-10 py-2 text-[12px] font-bold text-white disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmittingSession ? "Envoi…" : "Confirmer"}
                </button>
              </div>
            </section>
          ) : null}

          {isConfirmed && mounted && typeof window !== "undefined"
            ? createPortal(
                <div
                  className="planifier-demo-confirmation-overlay"
                  style={{
                    position: "fixed",
                    inset: 0,
                    zIndex: 10000,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "1.25rem",
                    backgroundColor: "rgba(0,0,0,0.45)",
                    boxSizing: "border-box",
                  }}
                  onClick={handleOk}
                >
                  <div
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="planifier-demo-success-title"
                    className="planifier-demo-confirmation-modal"
                    style={{
                      width: "100%",
                      maxWidth: 520,
                      background: "#fff",
                      borderRadius: 20,
                      boxShadow: "0 24px 48px rgba(0,17,51,0.12)",
                      padding: "48px 40px 44px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      boxSizing: "border-box",
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="planifier-demo-confirmation-icon-wrap">
                      <PlanifierDemoSuccessIllustration />
                    </div>
                    <h2 id="planifier-demo-success-title" className="planifier-demo-confirmation-title">
                      Votre démo a bien été programmée !
                    </h2>
                    <p className="planifier-demo-confirmation-text">
                      Nous vous avons envoyé un email de confirmation contenant les détails du rendez-vous.
                      Un membre de l&apos;équipe CarPulse vous contactera le jour J.
                    </p>
                    <button
                      type="button"
                      className="planifier-demo-confirmation-btn"
                      onClick={handleOk}
                    >
                      Ok
                    </button>
                  </div>
                </div>,
                document.body,
              )
            : null}
        </div>
      </main>
    </div>
  );
}

