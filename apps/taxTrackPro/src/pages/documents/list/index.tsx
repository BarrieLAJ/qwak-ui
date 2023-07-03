import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Layout from "~/components/common/Layout";
import DocumentList from "~/scenes/documents/list";
import { api } from "~/utils/api";

export default function Home() {

  return (
    <Layout>
      <DocumentList />
    </Layout>
  );
}
