'use client';

import { useState } from 'react';
import { PricingPlanCard, PlanFeature } from './PricingPlanCard'; // Ajuste l'import
import { ApiPlan } from './landing-bottom-sections';

interface PricingInteractiveGridProps {
  plans: ApiPlan[];
}

// --- SECTEURS EN DUR ---
const SECTORS = [
  { value: 'groupe_auto', label: 'Groupe Automobile' },
  { value: 'marchand', label: 'Marchand' },
  { value: 'particulier', label: 'Particulier' },
];

// --- FONCTIONS DE FORMATAGE ET D'EXTRACTION ---
function formatPlanPrice(plan: ApiPlan) {
  const priceNum = plan.price?.trim();
  if (!priceNum) return null;
  return `${priceNum} CHF`;
}

function formatPlanPeriod(plan: ApiPlan) {
  if (plan.billing_cycle === 'monthly') return ' / mois';
  if (plan.billing_cycle === 'yearly') return ' / an';
  return ' / mois';
}

function planFeaturesFromApi(plan: ApiPlan): PlanFeature[] {
  const f: PlanFeature[] = [];

  if (Array.isArray(plan.included)) {
    plan.included.forEach((featureText) => {
      f.push({ text: featureText, available: true });
    });
  }

  if (Array.isArray(plan.not_included)) {
    plan.not_included.forEach((featureText) => {
      f.push({ text: featureText, available: false });
    });
  }

  return f;
}

export function PricingInteractiveGrid({ plans }: PricingInteractiveGridProps) {
  // --- ÉTATS ---
  const [selectedPlan, setSelectedPlan] = useState<ApiPlan | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); // Nouvel état pour le succès de l'inscription
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    sector: '',
    password: '',
    confirmPassword: '',
  });

  // --- ACTIONS ---
  const handleOpenModal = (plan: ApiPlan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
    setIsSuccess(false);
    setErrorMessage(null);
  };

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
  
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Les mots de passe ne correspondent pas.');
      return;
    }
  
    setIsSubmitting(true);
  
    try {
      // CORRECTION ICI : Aligner les clés avec la doc de l'API
      const payload = {
        email: formData.email,
        first_name: formData.firstName,
        last_name: formData.lastName,
        sector: formData.sector,
        password: formData.password,
        confirm_password: formData.confirmPassword, // Changé de 'password_confirmation' à 'confirm_password'
      };
  
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
  
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || 'Une erreur est survenue lors de la création du compte.');
      }
  
      // Si l'API renvoie le statut 200/201 avec les infos du client et du workspace
      setIsSuccess(true);
      
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        sector: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error: any) {
      console.error('Erreur lors de l’inscription:', error);
      setErrorMessage(error.message || 'Impossible de finaliser l’inscription.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* GRILLE DES PLANS */}
      <div className="mt-8 grid gap-4 sm:mt-14 sm:gap-6 lg:grid-cols-3 lg:items-stretch lg:gap-5">
        {plans.map((plan, idx) => {
          const isCustom = plan.kind === 'personalized';
          const variant = isCustom ? 'custom' : idx === 0 ? 'starter' : 'premium';
          const buttonVariant = isCustom ? 'custom' : idx === 0 ? 'starter' : 'premium';
          
          const price = formatPlanPrice(plan) ?? undefined;
          const features = planFeaturesFromApi(plan);

          return (
            <PricingPlanCard
              key={plan.id}
              variant={variant}
              name={plan.name}
              description={plan.description}
              price={isCustom ? undefined : price}
              period={isCustom ? undefined : formatPlanPeriod(plan)}
              customPriceLabel={isCustom ? 'Tarification personnalisée' : undefined}
              dealCountLabel={plan.max_deals_per_month ? `Jusqu'à ${plan.max_deals_per_month} deals` : '-'}
              features={features}
              buttonText={isCustom ? 'Demander une offre personnalisée' : `Choisir ${plan.name}`}
              buttonVariant={buttonVariant}
              isPopular={!isCustom && idx === 1}
              className="h-full"
              onButtonClick={() => handleOpenModal(plan)} 
            />
          );
        })}
      </div>

      {/* MODALE DU FORMULAIRE */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-[24px] bg-white p-6 shadow-2xl sm:p-8 transition-all">
            
            {isSuccess ? (
              /* --- ÉCRAN DE SUCCÈS (Nouveau flux par email) --- */
              <div className="text-center py-4">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A]">Inscription validée !</h3>
                <p className="mt-3 text-sm text-[#6B7280] leading-relaxed">
                  Votre compte a été créé avec succès. Un e-mail de confirmation vient de vous être envoyé pour configurer et activer votre accès.
                </p>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="mt-8 w-full rounded-xl bg-[#FF7A22] px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-[#E66A15]"
                >
                  Fermer
                </button>
              </div>
            ) : (
              /* --- FORMULAIRE D'INSCRIPTION --- */
              <>
                <h3 className="text-xl font-bold text-[#1A1A1A]">Complétez votre profil</h3>
                <p className="mt-2 text-sm text-[#6B7280]">
                  Créez vos identifiants pour démarrer avec le plan <strong>{selectedPlan?.name}</strong>.
                </p>

                {errorMessage && (
                  <div className="mt-4 rounded-xl bg-red-50 p-3 text-sm font-medium text-red-600">
                    {errorMessage}
                  </div>
                )}

                <form onSubmit={handleSubmitForm} className="mt-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-gray-700">Prénom</label>
                      <input
                        required
                        type="text"
                        className="w-full rounded-xl border border-gray-300 px-4 py-2.5 outline-none focus:border-[#FF7A22]"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-gray-700">Nom</label>
                      <input
                        required
                        type="text"
                        className="w-full rounded-xl border border-gray-300 px-4 py-2.5 outline-none focus:border-[#FF7A22]"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
                    <input
                      required
                      type="email"
                      className="w-full rounded-xl border border-gray-300 px-4 py-2.5 outline-none focus:border-[#FF7A22]"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">Secteur d'activité</label>
                    <select
                      required
                      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 outline-none focus:border-[#FF7A22]"
                      value={formData.sector}
                      onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                    >
                      <option value="" disabled>Sélectionnez un secteur...</option>
                      {SECTORS.map((s) => (
                        <option key={s.value} value={s.value}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* NOUVEAU CHAMP : MOT DE PASSE */}
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">Mot de passe</label>
                    <input
                      required
                      type="password"
                      minLength={6}
                      className="w-full rounded-xl border border-gray-300 px-4 py-2.5 outline-none focus:border-[#FF7A22]"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                  </div>

                  {/* NOUVEAU CHAMP : CONFIRMATION MOT DE PASSE */}
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">Confirmer le mot de passe</label>
                    <input
                      required
                      type="password"
                      minLength={6}
                      className="w-full rounded-xl border border-gray-300 px-4 py-2.5 outline-none focus:border-[#FF7A22]"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    />
                  </div>

                  <div className="mt-8 flex items-center justify-end gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="rounded-xl px-5 py-2.5 text-sm font-semibold text-gray-600 hover:bg-gray-100"
                    >
                      Annuler
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="rounded-xl bg-[#FF7A22] px-6 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#E66A15] disabled:opacity-70"
                    >
                      {isSubmitting ? 'Création...' : 'Valider'}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}