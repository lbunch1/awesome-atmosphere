import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "4528f2b1-ff48-45ab-a476-513b73c565a1", // Get this from tina.io
  token: "d9d7c799694bf0e80dbc30fc7762d8d0c0321ca5", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "/public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "/public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
