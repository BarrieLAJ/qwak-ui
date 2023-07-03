import { api } from "~/utils/api";
export const useUserInfo = () => {
  const {
    data: user,
    isLoading,
  } = api.user.getUserInfo.useQuery();

  return {
    user,
    isLoading,
  };
};
