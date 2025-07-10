import { z } from "zod";

export const FirstPageDormSchema = z.object({
  dormName: z
    .string()
    .min(3, { message: "Dorm name must be at least 3 characters long." }),
});

export type FirstPageDormSchemaType = z.infer<typeof FirstPageDormSchema>;
