import { useState } from 'react';

export interface ChatComposerProps {
  onSend?: (value: string) => void;
  placeholder?: string;
}

const SendIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M1.5 7 12.5 2 8 12.5 6.5 8 1.5 7Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
  </svg>
);

/** BQool Pilot's composer — auto-expanding textarea + Send, anchored below the conversation. */
export function ChatComposer({ onSend, placeholder = 'Ask a question or describe a task...' }: ChatComposerProps) {
  const [value, setValue] = useState('');
  const submit = () => {
    if (!value.trim()) return;
    onSend?.(value);
    setValue('');
  };

  return (
    <div className="flex items-end gap-token-2 rounded-token-lg border border-surface-border bg-surface-default p-token-2">
      <textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder={placeholder}
        rows={1}
        className="max-h-[76px] min-h-[44px] flex-1 resize-none border-0 bg-transparent text-sm text-text-primary placeholder:text-text-secondary focus:outline-none"
      />
      <button
        type="button"
        onClick={submit}
        aria-label="Send"
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-token-full bg-chat-bubble-user-bg text-chat-bubble-user-fg hover:bg-ai-indigo-700"
      >
        <SendIcon />
      </button>
    </div>
  );
}
