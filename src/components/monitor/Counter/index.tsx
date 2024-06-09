import { clock } from "@/app/fonts"
import { cn } from "@/lib/utils"

import { splitElapsedTime } from "../utils/splitElapsedTime"
import { zeroPad } from "../utils/zeroPad"
import { Separator } from "../Separator"

export function Counter({
  valueInMs,
  color = "text-gray-300",
}: {
  valueInMs: number
  color?: string
}) {

  const { hours, minutes, seconds, milliseconds } = splitElapsedTime(valueInMs)

  return (
    <div className={cn(
      `flex flex-row items-center justify-center`,
      `flex-grow`,
      `transition-all duration-200 ease-out`,
      clock.className,
      `text-2xl @md:text-2xl @lg:text-2xl @xl:text-3xl @2xl:text-4xl`
    )}>
      <div
        // we use a div with a fixed width to avoid glitchy recentering movement when counting
        // this is also why we need a MONOSPACE font!
        className={cn(
          `transition-all duration-200 ease-out`,
          
          // the purpose of the fixed height and w is to avoid any unwanted line return,
          // especially during fast resize (when the animation is playing slower than container resize)
          `pl-1.5 @lg:w-36 @xl:w-44 @2xl:w-52 h-8 @2xl:h-10 overflow-hidden`,

          // sometimes we can accidentally select text when double clicking on the play button,
          // so we want to avoid that 
          `select-none`
        )}>
        <span className={color}>{
          zeroPad(hours || 0)
        }</span><Separator className={color} /><span className={color}>{
          zeroPad(minutes || 0)
        }</span><Separator className={color} /><span className={color}>{
          zeroPad(seconds || 0)
        }</span><Separator className={color} /><span className={cn(
          color,

          // to add some flair we reduce the opacity of the last milliseconds,
          // since this element is less important (it moves too fast to be really meaningful)
          "opacity-50",

          // the milliseconds are also reduced of 1 degree in size
          `text-lg @md:text-xl @lg:text-xl @xl:text-2xl @2xl:text-3xl`
          )}>{
          zeroPad(Math.min(999, milliseconds || 0)).slice(0, 2)
        }</span>
      </div>
    </div>
  )
}