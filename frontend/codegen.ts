import type { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";

dotenv.config();

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [`${process.env.VITE_SERVER_URL}:${process.env.VITE_PORT_BACK}/graphql`]: {
      headers: {
        Authorization: `Bearer ${process.env.VITE_GRAPHQL_AUTH_TOKEN}`,
      },
    },
  },
  documents: ["src/graphql/queries/*.ts", "src/graphql/mutations/*.ts"],
  generates: {
    "./src/graphql/__generated__/schema.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
        scalars: {
          DateTimeISO: "Date",
        },
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
