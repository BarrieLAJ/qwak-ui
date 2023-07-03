import { Session } from "next-auth/core/types";
import React from "react";
import { useAuthGaurd } from "~/hooks/useAuthGuard";

const AuthGaurd = (props: { session: Session | null }) => {
  useAuthGaurd();
  return <></>;
};

export default AuthGaurd;
