
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8000/api/graphql",
  documents: ["src/**/*.graphql", "src/**/*.ts"],
  generates: {
    "src/generated/graphql.ts": {
      plugins: ["typescript", "typescript-operations", "fragment-matcher", "typescript-apollo-angular"]
    },
    "src/generated/graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
