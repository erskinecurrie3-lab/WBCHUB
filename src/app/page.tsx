import { HomePageCta } from "@/components/home/HomePageCta"

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-3xl font-semibold tracking-tight">WBC Hub</h1>
      <p className="text-muted-foreground max-w-md text-center text-sm">
        Public landing (scaffold). Sign in to open the dashboard.
      </p>
      <HomePageCta />
    </div>
  )
}
