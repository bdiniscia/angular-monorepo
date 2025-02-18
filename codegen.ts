
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: [
    {
      "https://api.orchestrationengine.io/oe-bff": {
        headers: {
          authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ3WTlxa1pVNGRpUXViR0JJYTFHRHEydHlpaHdydS1YRTRpZUtEb056YUxnIn0.eyJleHAiOjE3Mzk3Mjc2OTUsImlhdCI6MTczOTcyMDQ5NSwiYXV0aF90aW1lIjoxNzM5NzIwNDk1LCJqdGkiOiI5MDE5MDQ3NC1mMTA4LTRhMWQtOTNkMS02NzQ4ZDEyMDBmZjAiLCJpc3MiOiJodHRwczovL2tleWNsb2FrLm9yY2hlc3RyYXRpb25lbmdpbmUuaW8vcmVhbG1zL29lIiwiYXVkIjoibGpicXRlbmFudCIsInN1YiI6ImFiNWNjMTgwLTllOTEtNDYwYy1hMThmLWMxYzNhMzdjNmJlZCIsInR5cCI6IklEIiwiYXpwIjoibGpicXRlbmFudCIsInNpZCI6ImQ0ZDJlM2UzLTljYWYtNDM1Ni05NDU4LTc5ZDlhODEyYTIzZiIsImF0X2hhc2giOiJWMWtuQTFzMWxRVzNHUHJIMFdHLTNBIiwiYWNyIjoiMSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLW9lIiwib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiIsIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiLCJvZS5mb3JtX2FkbWluIiwiYWRtaW4iXSwibmFtZSI6IlZCV1VYTlVzZXIgVkJXVVhOVXNlciIsInVzZXJFbWFpbCI6InZid3V4bnVzZXJAcWF0ZXN0LmNvbSIsInByZWZlcnJlZF91c2VybmFtZSI6InZid3V4bnVzZXIiLCJnaXZlbl9uYW1lIjoiVkJXVVhOVXNlciIsImZhbWlseV9uYW1lIjoiVkJXVVhOVXNlciIsInRlbmFudCI6IjAxSkdKVlNOMFhZMlpZRlhWUUI4TUpRQjdKIiwiZW1haWwiOiJ2Ynd1eG51c2VyQHFhdGVzdC5jb20ifQ.SOPcCjz2UuzSRnpFgea46Hvje9AXQEw6ml3dEDQ2WOkAZ32gAMarCBW80goJocIzL-4vSNgqarJ8Le_aeJQMOHJqsa3xKL91PoxQ07AYQcue3KfraIP96zHJmwLacRH0VSnfanBcUu4fcTXxikXr1TKDyQtU-zEY4xZ_zW2eKzmtlPxxeeDMZRBnG5XZU1_iw7NYBqGeqlanDNB5Qh5aduVSvyCGkXaXyZM2qGeUjQFCkozk8EAuVNnMH2QcSpfuemXUtBWFh69XemT1bp6ZI1zBArXfA2F-pz_kw4HkMvMXHs_FlahI8eU-tsvI9dGOKdRhOp1G2fBC9MoSXTTROw", // Replace with actual token
        },
      },
    },
  ],
  documents: ["apps/angular-monorepo/src/**/*.graphql", "apps/angular-monorepo/src/**/*.ts"], // Ensure .ts files are included
  generates: {
    "apps/angular-monorepo/src/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-apollo-angular",
      ],
    },
  },
  config: {
    gqlTagName: "gql",
  }
};

export default config;
