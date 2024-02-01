"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [token, setToken] = useState("");
  useEffect(() => {
    localStorage.setItem(
      "auth_token_from_next",
      "1234567890abcdefghijklmnopqrstuvwxyz"
    );
    const fromSvelte = localStorage.getItem("auth_token_from_svelte");
    console.log("auth_token_from_svelte", fromSvelte);
    if (fromSvelte) {
      setToken(fromSvelte);
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Token from Svelte: {token}</h1>
      <a href="/v1/">Go to Svelte Page</a>
    </main>
  );
}
