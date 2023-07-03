import dataUriToBuffer from "data-uri-to-buffer";
import { createReadStream, writeFileSync } from "fs";
import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const documentsRoutes = createTRPCRouter({
  getDocuments: protectedProcedure.query(({ ctx }) => {
    // const session = { ...ctx.session, user: ctx.session.user };
    const documents = ctx.prisma.document.findMany({
      take: 20,
    });
    return documents;
  }),
  uploadDocument: protectedProcedure
    .input(
      z.object({
        // type: z.string(),
        title: z.string(),
        file: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { prisma, client } = ctx;
      //   console.log(input.title, input.file);
      const fileblob = await url2Blob(input.file);
      var regex = /^data:.+\/(.+);base64,(.*)$/;

      var matches = input.file.match(regex);
      var ext = matches![1];
      var data = matches![2];
      //   console.log(data)
      var buffer = Buffer.from(data!, "base64");
      const tempFile = `${input.title}.${ext}`;
      console.log(tempFile);
      writeFileSync(tempFile, buffer);
      //   dataUriToBuffer(input.file);
      //   const arrBuffer = await fileblob.arrayBuffer();
      //   const filebuffer = Buffer.from(arrBuffer);
      //   console.log("\n\nBuffer", filebuffer.readUInt8());
      const uploadedDoc = await client.assets.upload(
        "image",
        createReadStream(tempFile),
        {
          filename: input.title,
        }
      );
      //   uploadedDoc.then((d) => console.log(d));
      console.log("\n\n\n\n\n\nDoc", uploadedDoc);
      const document = prisma.document.create({
        data: {
          title: input.title,
          file: uploadedDoc.url,
        },
      });
      return document;
    }),
});

async function url2Blob(url: RequestInfo | URL) {
  return await (await fetch(url)).blob();
}
