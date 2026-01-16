import { apiReference } from "@scalar/express-api-reference";
import { swaggerSpec } from "./swagger.js";

export const scalarDocs = apiReference({
  spec: {
    content: () => swaggerSpec,
  },
  theme: "purple",
} as any);
