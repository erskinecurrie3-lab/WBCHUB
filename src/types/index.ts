/**
 * Domain types aligned with Insforge / Postgres tables
 * (profiles, churches, engagements, assessments, courses, lessons, …).
 * Adjust fields when migrations match the WBC Hub Master Build Reference.
 */

export type Profile = {
  id: string
  created_at: string
  updated_at: string
  user_id: string
  full_name: string | null
  avatar_url: string | null
  role: string | null
}

export type Church = {
  id: string
  created_at: string
  updated_at: string
  name: string
  slug: string | null
  city: string | null
  state: string | null
  phase: string | null
  primary_contact_profile_id: string | null
}

export type Engagement = {
  id: string
  created_at: string
  updated_at: string
  church_id: string
  assigned_worship_builder_id: string | null
  status: string | null
  notes: string | null
}

export type Assessment = {
  id: string
  created_at: string
  updated_at: string
  church_id: string
  submitted_by_profile_id: string | null
  summary: string | null
  raw_payload: Record<string, unknown> | null
}

export type Course = {
  id: string
  created_at: string
  updated_at: string
  title: string
  description: string | null
  sort_order: number | null
  is_published: boolean | null
}

export type Lesson = {
  id: string
  created_at: string
  updated_at: string
  course_id: string
  title: string
  content: string | null
  sort_order: number | null
  duration_minutes: number | null
}
