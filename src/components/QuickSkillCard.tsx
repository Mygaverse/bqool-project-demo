export interface QuickSkillCardProps {
  label: string;
  prompt: string;
  onClick?: () => void;
}

/** Intro-card suggestion button — one of BQool Pilot's up-to-4 pinned quick skills. */
export function QuickSkillCard({ label, prompt, onClick }: QuickSkillCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full rounded-token-lg border border-quick-skill-card-border bg-quick-skill-card-bg p-token-4 text-left transition-colors hover:border-ai-indigo-300"
    >
      <span className="block font-bold text-quick-skill-card-label-fg" style={{ font: 'var(--typography-body-sm)' }}>
        {label}
      </span>
      <span className="mt-1 block text-quick-skill-card-description-fg" style={{ font: 'var(--typography-caption)' }}>
        {prompt}
      </span>
    </button>
  );
}
