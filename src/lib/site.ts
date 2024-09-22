import { env } from "@/env/client"

export type SiteConfig = {
  name: string
  description: string
  url: string
}

export const siteConfig: SiteConfig = {
  name: "NextStart",
  description: "A Next.js app starter-kit example.",
  url: env.NEXT_PUBLIC_BASE_URL,
}
