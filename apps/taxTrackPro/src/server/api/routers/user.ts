import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const userRoutes = createTRPCRouter({
  getUserInfo: protectedProcedure.query(({ ctx }) => {
    const session = { ...ctx.session, user: ctx.session.user };
    const user = ctx.prisma.user.findUnique({
      where: {
        email: session.user.email || "",
      },
    });
    return user
  }),
});
