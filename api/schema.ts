import { makeSchema } from "nexus";
import { join } from "path";
import * as types from "./graphql/index";

export const schema = makeSchema({
  types,
  outputs: {
    typegen: join(__dirname, "..", "nexusGenTypes.ts"),
    schema: join(__dirname, "..", "schema.graphql"),
  },
  contextType: {
    module: join(__dirname, "./context.ts"),
    export: "Context",
  },
});
