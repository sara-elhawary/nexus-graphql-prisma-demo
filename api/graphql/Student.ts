import { objectType } from "nexus";
import { Subject } from "./Subject";

export const Student = objectType({
  name: "Student",
  definition(t) {
    t.int("id");
    t.string("name");
    t.int("age");
    t.list.nonNull.field("subjects", {
      type: Subject,
      resolve(_root, args, context) {
        const subjects = await context.
        
      },
    });
  },
});
