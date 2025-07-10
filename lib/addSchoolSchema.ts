import { z } from "zod";

export const addSchoolSchema = z.object({
  schoolName: z
    .string()
    .min(3, { message: "School name must be at least 3 characters long." }),
  shortName: z
    .string()
    .min(1, { message: "Abbreviation must be at least 1 character long." })
    .optional(),
  city: z
    .string()
    .min(3, { message: "City must be at least 3 characters long." }),
  state: z
    .string()
    .min(3, { message: "State must be at least 3 characters long." }),
  schoolType: z.enum(["Public", "Private", "Liberal Arts"], {
    errorMap: () => ({ message: "Choose an option." }),
  }),
  dormsNearby: z
    .enum(["Yes", "No"], {
      errorMap: () => ({ message: "Choose an option." }),
    })
    .optional(),
  website: z.string().optional(),
  picture: z.any().optional(),
});

export type AddSchoolSchemaType = z.infer<typeof addSchoolSchema>;
