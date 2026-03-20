import { BrowserRouter, Routes, Route } from "react-router"
import { TooltipProvider } from "@/components/ui/tooltip"
import { DemoProvider, useDemo } from "@/contexts/DemoContext"
import { DemoControlsFab } from "@/components/DemoControlsFab"
import { GlobalHeader } from "@/components/GlobalHeader"
import { CommandCenterPage } from "@/pages/CommandCenterPage"
import { SettingsPage } from "@/pages/SettingsPage"
import { IncidentInvestigationPage } from "@/pages/IncidentInvestigationPage"

function CenteredLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalHeader />
      <main className="mx-auto w-full max-w-[980px] px-4">{children}</main>
    </>
  )
}

function AppShell() {
  const { themeMode } = useDemo()

  return (
    <div className={themeMode === "dark" ? "dark" : ""}>
      <div className="flex h-dvh min-h-0 flex-col overflow-hidden bg-background text-foreground">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <CenteredLayout>
                  <CommandCenterPage />
                </CenteredLayout>
                <DemoControlsFab />
              </>
            }
          />
          <Route
            path="/settings"
            element={
              <>
                <CenteredLayout>
                  <SettingsPage />
                </CenteredLayout>
                <DemoControlsFab />
              </>
            }
          />
          <Route
            path="/investigate/:incidentId"
            element={<IncidentInvestigationPage />}
          />
        </Routes>
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
