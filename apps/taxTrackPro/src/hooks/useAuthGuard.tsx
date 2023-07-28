"use client"
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

const evLisner = () => {
  signIn();
};

export const useAuthGaurd = () => {
  const { status } = useSession();
  useEffect(() => {
    const button = document.createElement("button");
    if (status === "unauthenticated") {
      button.addEventListener("click", evLisner);
      button.click();
    }

    return () => {
      button.removeEventListener("click", evLisner);
      button.remove();
    };
  }, [status]);
};
