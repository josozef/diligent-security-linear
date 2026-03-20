import { Link } from "react-router"
import {
  HelpCircle,
  LayoutGrid,
  Settings,
  User,
} from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

/** Atlas-style app launcher blue (matches reference header) */
const APP_LAUNCHER =
  "inline-flex size-8 shrink-0 items-center justify-center rounded-full border-0 bg-[#2563eb] text-white shadow-none outline-none transition-colors hover:bg-[#1d4ed8] focus-visible:ring-2 focus-visible:ring-[#2563eb]/40 focus-visible:ring-offset-2 dark:hover:bg-[#1d4ed8]"

/** Org avatar fill */
const ORG_AVATAR = "bg-[#2563eb] text-[11px] font-medium text-white"

export function GlobalHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md supports-backdrop-filter:bg-background/80">
      <div className="mx-auto flex h-14 max-w-[1600px] items-center justify-between gap-4 px-4 lg:px-6">
        {/* Brand — logo asset includes wordmark; no duplicate text label */}
        <Link
          to="/"
          className="flex min-w-0 shrink-0 items-center gap-2.5 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <img
            src="/diligent-logo.png"
            alt="Diligent"
            width={26}
            height={26}
            className="h-[26px] w-auto shrink-0"
          />
        </Link>

        {/* Utilities — help, settings, divider, app launcher, org profile */}
        <div className="flex shrink-0 items-center gap-0.5 sm:gap-1">
          <Tooltip>
            <TooltipTrigger
              type="button"
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon-sm" }),
                "size-9 text-muted-foreground"
              )}
              aria-label="Help"
            >
              <HelpCircle className="size-5" />
            </TooltipTrigger>
            <TooltipContent side="bottom">Help</TooltipContent>
          </Tooltip>

          <Link
            to="/settings"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon-sm" }),
              "inline-flex size-9 items-center justify-center text-muted-foreground"
            )}
            aria-label="Settings"
          >
            <Settings className="size-5" />
          </Link>

          <Separator
            orientation="vertical"
            className="mx-1 hidden h-6 sm:mx-2 sm:block"
          />

          <DropdownMenu>
            <DropdownMenuTrigger
              type="button"
              className={APP_LAUNCHER}
              aria-label="App launcher"
            >
              <LayoutGrid className="size-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Applications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem disabled>
                Security
                <span className="ml-auto text-xs text-muted-foreground">
                  Current
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem>Board &amp; Leadership</DropdownMenuItem>
              <DropdownMenuItem>Compliance</DropdownMenuItem>
              <DropdownMenuItem>Entities</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger
              type="button"
              className={cn(
                buttonVariants({ variant: "outline", size: "default" }),
                "h-9 max-w-[min(100vw-8rem,280px)] gap-2 rounded-full border-border px-2 py-0 pl-2 pr-2.5 font-normal shadow-none hover:bg-muted/60"
              )}
              aria-label="Organization and profile"
            >
              <Avatar className="size-7">
                <AvatarFallback className={ORG_AVATAR}>Or</AvatarFallback>
              </Avatar>
              <span className="hidden truncate text-sm font-medium sm:inline">
                Organization
              </span>
              <User className="size-4 shrink-0 text-muted-foreground" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">Organization</p>
                  <p className="text-xs text-muted-foreground">
                    Workspace
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View profile</DropdownMenuItem>
              <DropdownMenuItem>Switch organization</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
