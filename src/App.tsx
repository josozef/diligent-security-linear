import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router"
import { cn } from "@/lib/utils"
import { TooltipProvider } from "@/components/ui/tooltip"
import { DemoProvider, useDemo } from "@/contexts/DemoContext"
import { DemoControlsFab } from "@/components/DemoControlsFab"
import { GlobalHeader } from "@/components/GlobalHeader"

const CommandCenterPage = lazy(() =>
  import("@/pages/CommandCenterPage").then((m) => ({
    default: m.CommandCenterPage,
  }))
)
const SettingsPage = lazy(() =>
  import("@/pages/SettingsPage").then((m) => ({ default: m.SettingsPage }))
)
const IncidentInvestigationPage = lazy(() =>
  import("@/pages/IncidentInvestigationPage").then((m) => ({
    default: m.IncidentInvestigationPage,
  }))
)

function RouteFallback() {
  return (
    <div className="flex flex-1 items-center justify-center text-sm text-muted-foreground">
      Loading…
    </div>
  )
}

/** Fills viewport under AppShell; main scrolls so fixed FAB does not trap overflow. */
function CenteredLayout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation()
  const commandCenterLanding = pathname === "/"

  return (
    <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
      <GlobalHeader />
      <main
        className={cn(
          "min-h-0 w-full min-w-0 flex-1 overflow-y-auto overscroll-contain",
          commandCenterLanding && "bg-muted/35 dark:bg-muted/15",
        )}
      >
        <div className="mx-auto w-full max-w-[980px] px-4">{children}</div>
      </main>
      <DemoControlsFab />
    </div>
  )
}

function AppShell() {
  const { themeMode } = useDemo()

  return (
    <div className={themeMode === "dark" ? "dark" : ""}>
      <div className="flex h-dvh min-h-0 flex-col overflow-hidden bg-background text-foreground">
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route
              path="/"
              element={
                <CenteredLayout>
                  <CommandCenterPage />
                </CenteredLayout>
              }
            />
            <Route
              path="/settings"
              element={
                <CenteredLayout>
                  <SettingsPage />
                </CenteredLayout>
              }
            />
            <Route
              path="/investigate/:incidentId"
              element={
                <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
                  <IncidentInvestigationPage />
                </div>
              }
            />
          </Routes>
        </Suspense>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <DemoProvider>
        <TooltipProvider>
          <AppShell />
        </TooltipProvider>
      </DemoProvider>
    </BrowserRouter>
  )
}
