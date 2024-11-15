import { exampleRouter } from "~/server/api/routers/example";
import { createTRPCRouter } from "~/server/api/trpc";
import { userRoutes } from "./routers/user";
import { documentsRoutes } from "./routers/tax-documents";
import { taxLawsRoutes } from "./routers/tax-laws";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  user: userRoutes,
  document: documentsRoutes,
  taxLaws: taxLawsRoutes,
});

// export type definition of API
export type AppRouter = typeof appRouter;
