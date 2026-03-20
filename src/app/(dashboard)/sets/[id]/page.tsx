export default async function SetBuilderPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">Set builder</h1>
      <p className="text-muted-foreground mt-2 text-sm">id: {id}</p>
    </div>
  )
}
