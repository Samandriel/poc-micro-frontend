"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

export default function Home() {
  const [tokenFromSvelte, setTokenFromSvelte] = useState("");
  const [tokenNext, setTokenNext] = useState("");
  const [cookies, setCookie] = useCookies([
    "cookie_auth_token_from_svelte",
    "cookie_auth_token_from_next",
  ]);
  useEffect(() => {
    // SET TOKEN INTO LOCALSTORAGE AND COOKIE BY NEXT
    localStorage.setItem(
      "auth_token_from_next",
      "localStorage_token_by_next_111111111"
    );
    const tokenOfNext = localStorage.getItem("auth_token_from_next");
    if (tokenOfNext) {
      setTokenNext(tokenOfNext);
    }
    setCookie("cookie_auth_token_from_next", "cookie_token_by_next_22222222");

    // GET TOKEN FROM SVELTE
    const fromSvelte = localStorage.getItem("auth_token_from_svelte");
    if (fromSvelte) {
      setTokenFromSvelte(fromSvelte);
    }
  }, []);

  return (
    <main>
      <h1>
        Token set into localStorage by Next:::: <strong>{tokenNext}</strong>
      </h1>
      <h1>
        Token set into Cookie by Next::::{" "}
        <strong>{cookies.cookie_auth_token_from_next}</strong>
      </h1>
      <h1>================================</h1>
      <h3>
        Token from Svelte (LocalStorage)::::{" "}
        <strong>{tokenFromSvelte || "n/a"}</strong>
      </h3>
      <h3>
        Token from Svelte (Cookie)::::{" "}
        <strong>{cookies.cookie_auth_token_from_svelte || "n/a"}</strong>
      </h3>
      <a href="/v1/">Go to Svelte Page</a>
    </main>
  );
}
