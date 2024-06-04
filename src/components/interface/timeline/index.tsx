import { ClapTimeline } from "@aitube/timeline"

import { cn } from "@/lib/utils"

export function Timeline() {
  return (
    <ClapTimeline
      showFPS={false}
      className={cn(
        "bg-[rgb(58,54,50)]"
      )}
    />
  )
}