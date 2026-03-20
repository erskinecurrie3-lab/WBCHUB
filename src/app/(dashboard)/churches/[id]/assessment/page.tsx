export default async function ChurchAssessmentPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">Assessment</h1>
      <p className="text-muted-foreground mt-2 text-sm">Church {id} (scaffold).</p>
    </div>
  )
}
