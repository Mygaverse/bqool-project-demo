import { Button } from '@/components/Button';
import { Badge } from '@/components/Badge';
import { Card } from '@/components/Card';
import { Input } from '@/components/Input';
import { StatusPill } from '@/components/StatusPill';

export default function Home() {
  return (
    <main className="min-h-screen p-token-8">
      <div className="mx-auto max-w-3xl space-y-token-6">
        <div>
          <h1 className="text-2xl font-semibold text-text-primary">
            BQool Design System — Token Pipeline Demo
          </h1>
          <p className="mt-2 text-sm text-text-secondary">
            Every value on this page is generated from{' '}
            <code>tokens/*.json</code> via Style Dictionary. See{' '}
            <code>src/styles/tokens.css</code> for the generated output, and{' '}
            <code>/storybook</code> (via the &quot;storybook&quot; script) for the
            component catalog.
          </p>
        </div>

        <Card className="space-y-token-4">
          <div className="flex items-center gap-token-4">
            <Button>Primary action</Button>
            <Button variant="secondary">Secondary</Button>
          </div>
          <div className="flex items-center gap-token-4">
            <Badge tone="success">Shipped</Badge>
            <Badge tone="warning">In review</Badge>
            <Badge tone="danger">Blocked</Badge>
          </div>
          <div className="flex items-center gap-token-4">
            <StatusPill status="enabled" />
            <StatusPill status="paused" />
            <StatusPill status="pending" />
          </div>
          <Input placeholder="Daily budget" />
        </Card>
      </div>
    </main>
  );
}
