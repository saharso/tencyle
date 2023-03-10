import { setupWorker, rest } from "msw";
import EndPoints from "../api/EndPoints";
import {
  libraryList,
  lodash,
  express,
  async,
  cloudinary,
  axios,
  dojo,
  merge,
  jqueryUi,
  nextAuth,
  ckeditor4,
  jsrsasign,
  tinymce,
} from "../mocks";

const mockServer = setupWorker(
  ...[
    rest.post(EndPoints.libraryList, (req, res, ctx) => {
      return res(ctx.json(libraryList));
    }),
    rest.post(EndPoints.libraryVuln, (req, res, ctx) => {
      switch (localStorage.getItem("library")) {
        case "lodash":
          return res(ctx.json(lodash));
        case "express":
          return res(ctx.json(express));
        case "async":
          return res(ctx.json(async));
        case "cloudinary":
          return res(ctx.json(cloudinary));
        case "axios":
          return res(ctx.json(axios));
        case "dojo":
          return res(ctx.json(dojo));
        case "merge":
          return res(ctx.json(merge));
        case "jqueryUi":
          return res(ctx.json(jqueryUi));
        case "nextAuth":
          return res(ctx.json(nextAuth));
        case "ckeditor4":
          return res(ctx.json(ckeditor4));
        case "jsrsasign":
          return res(ctx.json(jsrsasign));
        case "tinymce":
          return res(ctx.json(tinymce));
      }
    }),
  ]
);
export { mockServer };
