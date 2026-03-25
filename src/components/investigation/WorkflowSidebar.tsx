import { Check, FileText } from "lucide-react"
import { cn } from "@/lib/utils"

interface Artifact {
  label: string
  detail?: string
}

interface NavStep {
  key: string
  label: string
  status: "complete" | "in-progress" | "not-started"
  timestamp?: string
  artifacts: Artifact[]
}

interface WorkflowSidebarProps {
  currentStep: number
  completedSteps: number[]
  onStepClick: (step: number) => void
}

function buildNavSteps(completedSteps: number[], currentStep: number): NavStep[] {
  const done = (n: number) => completedSteps.includes(n)
  const statusOf = (n: number): NavStep["status"] =>
    done(n) ? "complete" : currentStep === n ? "in-progress" : "not-started"

  return [
    {
      key: "triage",
      label: "Automated triage",
      status: done(1) ? "complete" : currentStep >= 1 ? "in-progress" : "not-started",
      timestamp: done(1) ? "2:14 PM" : undefined,
      artifacts: currentStep >= 1
        ? [{ label: "Triage report" }, { label: "Threat analysis", detail: "3 identified" }]
        : [],
    },
    {
      key: "notify",
      label: "Notify stakeholders",
      status: statusOf(2),
      artifacts: done(2)
        ? [{ label: "Notifications sent", detail: "5 recipients" }]
        : currentStep === 2
          ? [{ label: "Draft notifications", detail: "5 selected" }]
          : [],
    },
    {
      key: "remediation",
      label: "Remediation",
      status: statusOf(3),
      artifacts: done(3) || currentStep === 3
        ? [{ label: "ITSM tickets", detail: "5 created" }, { label: "Control gaps", detail: "4 mapped" }]
        : [],
    },
    {
      key: "thirdParty",
      label: "Third-party review",
      status: statusOf(4),
      artifacts: done(4) ? [{ label: "Vendor assessment" }] : [],
    },
    {
      key: "resolution",
      label: "Resolution",
      status: statusOf(5),
      artifacts: done(5) ? [{ label: "Evidence pack" }, { label: "Closure summary" }] : [],
    },
    {
      key: "boardBriefing",
      label: "Board briefing",
      status: statusOf(6),
      artifacts: done(6) ? [{ label: "Board memo" }] : [],
    },
  ]
}

export function WorkflowSidebar({
  currentStep,
  completedSteps,
  onStepClick,
}: WorkflowSidebarProps) {
  const navSteps = buildNavSteps(completedSteps, currentStep)
  const completedCount = navSteps.filter((s) => s.status === "complete").length

  return (
    <aside className="flex h-full min-h-0 w-[260px] shrink-0 flex-col overflow-hidden border-r bg-background">
      <div className="px-4 pb-4 pt-6">
        <h2 className="mb-2 text-sm font-semibold text-foreground">
          Incident workflow
        </h2>
        <div className="flex items-center gap-3">
          <div className="h-1 flex-1 overflow-hidden rounded-full bg-border">
            <div
              className="h-full rounded-full bg-emerald-500 transition-all duration-300"
              style={{ width: `${(completedCount / navSteps.length) * 100}%` }}
            />
          </div>
          <span className="shrink-0 text-xs text-muted-foreground">
            {completedCount}/{navSteps.length}
          </span>
        </div>
      </div>

      <div className="border-t" />

      <nav className="flex-1 overflow-y-auto">
        {navSteps.map((step, i) => {
          const stepNum = i + 1
          const isActive = currentStep === stepNum

          return (
            <button
              key={step.key}
              type="button"
              onClick={() => onStepClick(stepNum)}
              className={cn(
                "group flex w-full cursor-pointer border-l-[3px] px-4 py-3 text-left transition-colors",
                isActive
                  ? "border-l-primary bg-accent"
                  : "border-l-transparent hover:bg-muted/50",
              )}
            >
              <div className="flex gap-3">
                <div className="mt-0.5 shrink-0">
                  {step.status === "complete" ? (
                    <div className="flex size-[18px] items-center justify-center rounded-full bg-emerald-500/15">
                      <Check className="size-3.5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                  ) : (
                    <div className="flex size-[18px] items-center justify-center">
                      <span
                        className={cn(
                          "block size-2 rounded-full",
                          step.status === "in-progress"
                            ? "bg-amber-500 shadow-[0_0_0_3px_rgba(245,158,11,0.25)]"
                            : "border-[1.5px] border-border bg-transparent",
                        )}
                      />
                    </div>
                  )}
                </div>

                <div className="min-w-0 flex-1 space-y-0.5">
                  <p
                    className={cn(
                      "text-[13px] leading-snug",
                      isActive ? "font-semibold text-foreground" : "font-medium text-foreground",
                    )}
                  >
                    {step.label}
                  </p>

                  <p
                    className={cn(
                      "text-[11px]",
                      step.status === "complete"
                        ? "text-emerald-600 dark:text-emerald-400"
                        : step.status === "in-progress"
                          ? "text-amber-600 dark:text-amber-400"
                          : "text-muted-foreground",
                    )}
                  >
                    {step.status === "complete" && step.timestamp
                      ? `Completed ${step.timestamp}`
                      : step.status === "in-progress"
                        ? "In progress"
                        : "Not started"}
                  </p>

                  {step.artifacts.length > 0 && (
                    <div className="mt-1 space-y-0.5">
                      {step.artifacts.map((a) => (
                        <div key={a.label} className="flex items-center gap-1.5">
                          <FileText className="size-3 shrink-0 text-muted-foreground" />
                          <span className="text-[10.5px] leading-tight text-muted-foreground">
                            {a.label}
                            {a.detail && (
                              <span className="ml-1 opacity-70">· {a.detail}</span>
                            )}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}
