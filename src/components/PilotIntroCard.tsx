import { DataHeader } from './DataHeader';
import { QuickSkillCard } from './QuickSkillCard';

export interface QuickSkillOption {
  skillId: string;
  label: string;
  prompt: string;
}

export interface PilotIntroCardProps {
  skills: QuickSkillOption[];
  onSelect?: (skillId: string) => void;
}

const StarsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 1.5 9.2 5.8 13.5 7 9.2 8.2 8 12.5 6.8 8.2 2.5 7 6.8 5.8 8 1.5Z" />
  </svg>
);

/** BQool Pilot's idle-state intro — "Start with a skill" plus up to 4 pinned (or default) quick skills. */
export function PilotIntroCard({ skills, onSelect }: PilotIntroCardProps) {
  return (
    <div className="flex flex-col gap-token-3 rounded-token-lg border border-surface-border bg-surface-default p-token-6">
      <DataHeader icon={<StarsIcon />} title="Start with a skill" size="md" />
      <p className="text-text-secondary" style={{ font: 'var(--typography-caption)' }}>
        Choose a pinned workflow or type any question. BQool Pilot routes the right agents and tools automatically.
      </p>
      <div className="grid grid-cols-1 gap-token-3 sm:grid-cols-2">
        {skills.map((skill) => (
          <QuickSkillCard key={skill.skillId} label={skill.label} prompt={skill.prompt} onClick={() => onSelect?.(skill.skillId)} />
        ))}
      </div>
    </div>
  );
}
