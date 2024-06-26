"use client"

import React, { useRef } from "react"
import { useTimeline } from "@aitube/timeline"

import { Toaster } from "@/components/ui/sonner"
import { cn } from "@/lib/utils"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Monitor } from "@/components/monitor"

import { SettingsDialog } from "@/components/settings"
import { LoadingDialog } from "@/components/dialogs/loader/LoadingDialog"
import { TopBar } from "@/components/toolbars/top-bar"

export function Embed() {
  const ref = useRef<HTMLDivElement>(null)
  const isEmpty = useTimeline(s => s.isEmpty)

  return (
    <TooltipProvider>
    <div
      ref={ref}
      className={cn(`
      dark
      select-none
      fixed
      flex flex-col
      w-screen h-screen
      overflow-hidden
      items-center justify-center
      font-light
      text-stone-900/90 dark:text-stone-100/90
      `)}
      style={{
        backgroundImage: "repeating-radial-gradient( circle at 0 0, transparent 0, #000000 7px ), repeating-linear-gradient( #37353455, #373534 )"
      }}
      >
      <TopBar />
      <div className={cn(
        `flex flex-row flex-grow w-full overflow-hidden`, 
        isEmpty ? "opacity-0" : "opacity-100"
      )}>
        <Monitor />
      </div>
      <SettingsDialog />
      <LoadingDialog />
      <Toaster />
    </div>
    </TooltipProvider>
  );
}
