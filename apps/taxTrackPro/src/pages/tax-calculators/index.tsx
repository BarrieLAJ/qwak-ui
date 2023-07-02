import { GetServerSidePropsContext } from "next";
export const getServerSideProps = (context: GetServerSidePropsContext) => {
  return {
    redirect: {
        destination: "/tax-calculators/payee",
        permanent: false,
      },
  };
};

export default function Comp() {
  return null;
}
