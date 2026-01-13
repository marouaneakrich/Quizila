import { apiReference } from "@scalar/express-api-reference";
import { swaggerSpec } from "./swagger";

export const scalarDocs = apiReference({
  spec: {
    content: swaggerSpec,
  },
  theme: "purple",
});
