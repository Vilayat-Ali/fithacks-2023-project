// lib
import { ReactNode, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter, NextRouter } from "next/router";
import Head from "next/head";

type Props = {
  title: string;
  description: string;
  keywords: string[];
  isProtected?: Boolean;
  children: ReactNode;
};

const SEO = ({
  title,
  description,
  keywords,
  isProtected = false,
  children,
}: Props) => {
  // router
  const router: NextRouter = useRouter();

  // session
  const { data: session } = useSession();

  // validation
  useEffect(() => {
    if (!session && isProtected) {
      router.push("/");
    }
  }, [session, isProtected, router]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(", ")} />
      </Head>

      {children}
    </>
  );
};

export default SEO;
