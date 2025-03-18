"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginButton() {
  const { data: session, status } = useSession();

  console.log("Session status:", status);
  console.log("Session data:", session);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (session) {
    return (
      <>
        Signed in as {session.user.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn("github")}>Sign in with GitHub</button>
    </>
  );
}
