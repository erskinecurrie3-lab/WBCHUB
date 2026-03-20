import Link from "next/link"

const nav = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/churches", label: "Churches" },
  { href: "/training", label: "Training" },
  { href: "/songs", label: "Songs" },
  { href: "/sets", label: "Sets" },
  { href: "/impact", label: "Impact" },
  { href: "/portal", label: "Portal" },
] as const

export function Sidebar() {
  return (
    <aside className="bg-card text-card-foreground w-56 shrink-0 border-r">
      <div className="p-4 font-semibold">WBC Hub</div>
      <nav className="flex flex-col gap-1 px-2 pb-4">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="hover:bg-muted rounded-md px-3 py-2 text-sm"
          >
            {item.label}
          </Link>
        ))}
        <div className="text-muted-foreground mt-4 px-3 text-xs font-medium">
          Admin
        </div>
        <Link
          href="/admin/users"
          className="hover:bg-muted rounded-md px-3 py-2 text-sm"
        >
          Users
        </Link>
        <Link
          href="/admin/settings"
          className="hover:bg-muted rounded-md px-3 py-2 text-sm"
        >
          Settings
        </Link>
      </nav>
    </aside>
  )
}
