import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    "http://localhost:4000": {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huMkBleGFtcGxlLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzM4ODU5MjU5LCJleHAiOjE3Mzg5NDU2NTl9.hRue_3ti3vy0_VtLP1108lcH-U2Bl0_y_SYUJqsGsuI",
      },
    },
  },
  documents: ["src/**/*.tsx"],
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
