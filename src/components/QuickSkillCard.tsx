import { DataStrip } from './DataStrip';

export interface QuickSkillCardProps {
  label: string;
  prompt: string;
  onClick?: () => void;
}

/** Intro-card suggestion button — one of BQool Pilot's up-to-4 pinned quick skills. */
export function QuickSkillCard({ label, prompt, onClick }: QuickSkillCardProps) {
  return <DataStrip title={label} description={prompt} onClick={onClick} />;
}
