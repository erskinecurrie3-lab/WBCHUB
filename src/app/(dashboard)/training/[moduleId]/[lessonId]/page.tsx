export default async function TrainingLessonPage({
  params,
}: {
  params: Promise<{ moduleId: string; lessonId: string }>
}) {
  const { moduleId, lessonId } = await params
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">Lesson</h1>
      <p className="text-muted-foreground mt-2 text-sm">
        {moduleId} / {lessonId}
      </p>
    </div>
  )
}
