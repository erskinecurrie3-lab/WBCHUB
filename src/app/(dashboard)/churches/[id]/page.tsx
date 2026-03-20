export default async function ChurchProfilePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">Church</h1>
      <p className="text-muted-foreground mt-2 text-sm">Profile · id: {id}</p>
    </div>
  )
}
