import { HeroBanner } from "@/components/HeroBanner"
import { QuickActions } from "@/components/QuickActions"
import { PendingVulnerabilities } from "@/components/PendingVulnerabilities"
import { RecentActivity } from "@/components/RecentActivity"
import { ProactiveTasks } from "@/components/ProactiveTasks"
import { SystemLog } from "@/components/SystemLog"

export function CommandCenterPage() {
  return (
    <div className="space-y-6 py-8">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">
          IT Risk Command Center
        </h1>
        <p className="text-sm text-muted-foreground">
          Unified security governance and incident response
        </p>
      </div>

      <HeroBanner />

      <QuickActions />

      <PendingVulnerabilities />

      <RecentActivity />

      <ProactiveTasks />

      <SystemLog />
    </div>
  )
}
