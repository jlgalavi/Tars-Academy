import { z } from "zod";

export const SubmissionStatus = z.enum(["pending","approved","changes"]);
export type SubmissionStatus = z.infer<typeof SubmissionStatus>;

export const SubmissionInsertSchema = z.object({
  checkpoint_id: z.string().uuid(),
  user_id: z.string().uuid(),
  link: z.string().url(),
  notes: z.string().max(2000).optional(),
});

export type SubmissionInsert = z.infer<typeof SubmissionInsertSchema>;

export type SubmissionRow = {
  id: string;
  checkpoint_id: string;
  user_id: string;
  link: string;
  notes: string | null;
  status: SubmissionStatus;
  created_at: string;
  updated_at: string;
};