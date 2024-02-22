"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { ColorModeContext, usemode } from "../app/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./global/Topbar";
import Sidebar from "./global/Sidebar";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme, colorMode } = usemode();
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="app">
              <Sidebar />
              <main className="content">
                <Topbar />
                {children}
              </main>
            </div>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </body>
    </html>
  );
}
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
// </head>
// <body>

// </body>
// </html>
// return (
//   <html lang="en">
//     <head>
//       <link
//         rel="shortcut icon"
//         href="public/vercel.svg"
//         type="image/x-icon"
//       />
//     </head>
//     <body className={inter.className}>{children}</body>
//   </html>
// );
