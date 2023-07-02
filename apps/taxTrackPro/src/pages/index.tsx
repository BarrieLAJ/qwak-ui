import { GetServerSidePropsContext } from "next";
export const getServerSideProps = (context: GetServerSidePropsContext) => {
  return {
    redirect: {
        destination: "/documents",
        permanent: false,
      },
  };
};

export default function Comp() {
  return null;
}
