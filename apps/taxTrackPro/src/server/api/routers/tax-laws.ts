import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const taxLawsRoutes = createTRPCRouter({
  gettaxLaws: protectedProcedure.query(({ ctx }) => {
    // const session = { ...ctx.session, user: ctx.session.user };
    const taxLaws = ctx.prisma.taxLaws.findMany({
      take: 20,
    });
    return taxLaws;
  }),
  uploadTaxLaw: protectedProcedure
    .input(z.object({ title: z.string(), file: z.string() }))
    .mutation(({ ctx, input }) => {
      const { prisma } = ctx;
      prisma.taxLaws.create({
        data: {
          title: input.title,
          file: input.file,
        },
      });
    }),
});
