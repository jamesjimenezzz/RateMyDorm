import { Dorm, School, Review } from "@prisma/client";
export interface homeData {
  schools: (School & {
    dorms: (Dorm & {
      reviews: Review[];
    })[];
  })[];
  dorms: (Dorm & { reviews: Review[] } & { school: School })[];
}
