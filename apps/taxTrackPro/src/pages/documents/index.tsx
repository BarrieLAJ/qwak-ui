import { GetServerSidePropsContext } from "next";
export const getServerSideProps = (context: GetServerSidePropsContext) => {
  return {
    redirect: {
        destination: "/documents/list",
        permanent: false,
      },
  };
};

export default function Comp() {
  return null;
}
