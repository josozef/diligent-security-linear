import { Shield, BookOpen, ClipboardCheck, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const activities = [
  {
    icon: Shield,
    title: "Vulnerability Management",
    description: "12 new vulnerabilities detected in Q1 scan",
    timestamp: "2 hours ago",
  },
  {
    icon: BookOpen,
    title: "Risk Register",
    description: "Risk appetite statement updated for FY2026",
    timestamp: "5 hours ago",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Monitoring",
    description: "SOC 2 Type II audit evidence collection at 87%",
    timestamp: "1 day ago",
  },
  {
    icon: Users,
    title: "Vendor Risk",
    description: "3 vendors flagged for SLA non-compliance",
    timestamp: "2 days ago",
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-3">
      <h2 className="text-sm font-semibold tracking-tight">Recent Activity</h2>
      <div className="grid gap-3 md:grid-cols-2">
        {activities.map((activity) => (
          <Card key={activity.title} size="sm">
            <CardContent className="flex gap-3">
              <activity.icon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
              <div className="min-w-0 space-y-0.5">
                <p className="text-sm font-medium">{activity.title}</p>
                <p className="text-sm text-muted-foreground">
                  {activity.description}
                </p>
                <p className="text-xs text-muted-foreground/70">
                  {activity.timestamp}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
