export default async function TrainingModulePage({
  params,
}: {
  params: Promise<{ moduleId: string }>
}) {
  const { moduleId } = await params
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">Module</h1>
      <p className="text-muted-foreground mt-2 text-sm">moduleId: {moduleId}</p>
    </div>
  )
}
