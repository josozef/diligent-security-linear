import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const palette = [
  { name: "Background", var: "--background", class: "bg-background" },
  { name: "Foreground", var: "--foreground", class: "bg-foreground" },
  { name: "Primary", var: "--primary", class: "bg-primary" },
  { name: "Secondary", var: "--secondary", class: "bg-secondary" },
  { name: "Muted", var: "--muted", class: "bg-muted" },
  { name: "Accent", var: "--accent", class: "bg-accent" },
  { name: "Destructive", var: "--destructive", class: "bg-destructive" },
  { name: "Border", var: "--border", class: "bg-border" },
]

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border px-4 py-3">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <span className="text-lg font-semibold tracking-tight">
            Diligent
          </span>
          <Badge variant="secondary">Design System</Badge>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-12 space-y-12">
        <section className="space-y-2">
          <h1 className="text-5xl font-semibold tracking-tight">
            Hello, World
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A Vite + React starter built on ShadCN/UI, themed with tokens from
            the <strong className="text-foreground">Diligent Shadcn</strong>{" "}
            Figma design system.
          </p>
        </section>

        <Separator />

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            Color Tokens
          </h2>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {palette.map((c) => (
              <div
                key={c.name}
                className="flex flex-col items-center gap-1 rounded-lg border border-border p-3"
              >
                <div
                  className={`h-12 w-12 rounded-md ${c.class} border border-border`}
                />
                <span className="text-sm font-medium">{c.name}</span>
                <code className="text-xs text-muted-foreground">{c.var}</code>
              </div>
            ))}
          </div>
        </section>

        <Separator />

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Typography</h2>
          <Card>
            <CardHeader>
              <CardTitle>Geist Variable</CardTitle>
              <CardDescription>
                The design system uses Geist as the primary typeface across all
                weights.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-5xl font-semibold tracking-tight leading-none">
                Heading 1 — 48 / Semibold
              </p>
              <p className="text-2xl font-semibold tracking-tight">
                Heading 3 — 24 / Semibold
              </p>
              <p className="text-base">
                Paragraph Regular — 16 / Regular
              </p>
              <p className="text-sm">
                Paragraph Small — 14 / Regular
              </p>
              <p className="text-sm font-medium">
                Paragraph Small — 14 / Medium
              </p>
              <p className="text-xs">
                Paragraph Mini — 12 / Regular
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator />

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Components</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Buttons</CardTitle>
                <CardDescription>
                  All variants use the Diligent token palette.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Badges</CardTitle>
                <CardDescription>
                  Status indicators using design system colors.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            Spacing Scale
          </h2>
          <Card>
            <CardContent className="pt-4 space-y-3">
              {[
                { label: "3xs → 0.5", value: "2px" },
                { label: "2xs → 1", value: "4px" },
                { label: "xs → 2", value: "8px" },
                { label: "sm → 3", value: "12px" },
                { label: "md → 4", value: "16px" },
                { label: "lg → 6", value: "24px" },
                { label: "xl → 8", value: "32px" },
                { label: "4xl → 12", value: "48px" },
                { label: "5xl → 16", value: "64px" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <code className="w-24 shrink-0 text-sm text-muted-foreground">
                    {s.label}
                  </code>
                  <div
                    className="h-3 rounded-sm bg-primary"
                    style={{ width: s.value }}
                  />
                  <span className="text-sm text-muted-foreground">
                    {s.value}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t border-border px-4 py-3">
        <p className="mx-auto max-w-5xl text-sm text-muted-foreground">
          Tokens sourced from Figma file{" "}
          <code className="text-xs">wJ4C33K2hKe0vGvKb8vVUL</code>
        </p>
      </footer>
    </div>
  )
}

export default App
