import { objectType } from "nexus";
import { Student } from "./Student";

export const Subject = objectType({
  name: "Subject",
  definition(t) {
    t.int("id");
    t.string("name");
    t.string("category");
    t.list.nonNull.field("takenBy", {
      type: Student,
    });
  },
});
