import type { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    "http://localhost:4000": {
      headers: {
        Authorization: `Bearer ${process.env.GRAPHQL_AUTH_TOKEN}`,
      },
    },
  },
  documents: ["src/graphql/queries/*.ts"],
  generates: {
    "./src/graphql/__generated__/schema.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
