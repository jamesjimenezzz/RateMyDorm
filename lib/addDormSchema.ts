import { z } from "zod";

export const addDormSchema = z.object({
  dormName: z
    .string()
    .min(3, { message: "Dorm name must be at least 3 characters long." }),
  roomType: z.enum(
    ["Single", "Double", "Triple", "Suit", "Studio", "Apartment Style"],
    {
      errorMap: () => ({ message: "Room type is required." }),
    }
  ),
  yearLived: z.enum(["Freshman", "Sophomore", "Junior", "Senior", "Graduate"], {
    errorMap: () => ({ message: "Year lived is required." }),
  }),
  semester: z.enum(["Fall", "Spring", "Summer", "Full Year"], {
    errorMap: () => ({ message: "Semester is required." }),
  }),
  photos: z
    .any()
    .optional()
    .refine((val) => val === undefined || val.length > 0, {
      message: "If photos are provided, at least one is required.",
    }),

  cleanliness: z.number().min(1, { message: "Cleanliness is required." }),
  location: z.number().min(1, { message: "Location is required." }),
  noiseLevel: z.number().min(1, { message: "Noise level is required." }),
  amenities: z.number().min(1, { message: "Amenities is required." }),
  reviewTitle: z
    .string()
    .min(3, { message: "Review title must be at least 3 characters long." }),
  detailedReview: z.string().min(25, {
    message: "Detailed review must be at least 25 characters long.",
  }),
  likeMost: z.string().min(3, { message: "3 characters minimum" }).optional(),
  improve: z.string().min(3, { message: "3 characters minimum" }).optional(),
  recommendDorm: z.enum(["Yes", "No", "Maybe"], {
    errorMap: () => ({ message: "Choose an option." }),
  }),
  isAnonymous: z.boolean().optional(),
  userName: z.string().optional(),
  classYear: z
    .enum(["Freshman", "Sophomore", "Junior", "Senior", "Graduate"])
    .optional(),
});

export type AddDormSchemaType = z.infer<typeof addDormSchema>;
