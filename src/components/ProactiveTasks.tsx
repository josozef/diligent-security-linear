import { Lightbulb } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const tasks = [
  {
    title: "Complete Q1 Risk Assessment",
    detail: "Due Mar 31",
    progress: 72,
  },
  {
    title: "Annual Vendor Security Reviews",
    detail: "4 of 12 complete",
    progress: 33,
  },
  {
    title: "Disaster Recovery Plan Update",
    detail: "Due Apr 15",
    progress: 15,
  },
  {
    title: "NIS2 Gap Analysis",
    detail: "Not started",
    progress: 0,
  },
]

const features = [
  {
    title: "AI-Powered Threat Intel",
    description:
      "Threat intelligence now correlates CVEs with your asset inventory automatically",
  },
  {
    title: "Board Reporting Templates",
    description:
      "New executive summary templates for audit committees",
  },
]

export function ProactiveTasks() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-3">
        <h2 className="text-sm font-semibold tracking-tight">
          Proactive Tasks
        </h2>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div key={task.title} className="space-y-1.5">
              <div className="flex items-baseline justify-between gap-2">
                <p className="text-sm font-medium">{task.title}</p>
                <span className="shrink-0 text-xs text-muted-foreground">
                  {task.progress}%
                </span>
              </div>
              <p className="text-xs text-muted-foreground">{task.detail}</p>
              <Progress value={task.progress} />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-sm font-semibold tracking-tight">What's New</h2>
        <div className="space-y-3">
          {features.map((feature) => (
            <Card key={feature.title} size="sm">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Lightbulb className="size-4 text-muted-foreground" />
                  <CardTitle className="text-sm">{feature.title}</CardTitle>
                </div>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
