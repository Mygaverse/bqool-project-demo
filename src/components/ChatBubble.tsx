import type { ReactNode } from 'react';

export interface ChatBubbleProps {
  role: 'user' | 'assistant';
  children: ReactNode;
  /** Assistant-only: "Powered by {engine}" caption under the response. */
  caption?: string;
}

/** BQool Pilot message row — the user gets a filled bubble; the assistant renders as plain text, no bubble. */
export function ChatBubble({ role, children, caption }: ChatBubbleProps) {
  if (role === 'user') {
    return (
      <div className="flex justify-end">
        <div
          className="max-w-[80%] rounded-token-lg rounded-tr-sm bg-chat-bubble-user-bg px-token-4 py-token-3 text-chat-bubble-user-fg"
          style={{ font: 'var(--typography-body-sm)' }}
        >
          {children}
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-1">
      <div className="text-chat-bubble-assistant-fg" style={{ font: 'var(--typography-body-sm)' }}>
        {children}
      </div>
      {caption && (
        <span className="text-chat-bubble-assistant-caption-fg" style={{ font: 'var(--typography-caption)' }}>
          {caption}
        </span>
      )}
    </div>
  );
}
