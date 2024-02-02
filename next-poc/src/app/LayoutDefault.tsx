"use client";

import { CookiesProvider } from "react-cookie";

export const LayoutDefault = (props: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <CookiesProvider defaultSetOptions={{ path: "/" }}>
        <body>{props.children}</body>
      </CookiesProvider>
    </html>
  );
};
