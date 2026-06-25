import "./globals.css";

export const metadata = {
  title: "Aditi Bhardwaj - Portfolio",
  description:
    "Aditi Bhardwaj's personal portfolio website showcasing her skills, projects, and experience in web development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#fbfbfd" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"){document.documentElement.classList.remove("light");document.documentElement.classList.add("dark");document.querySelector('meta[name="theme-color"]')&&document.querySelector('meta[name="theme-color"]').setAttribute("content","#000000");}}catch(e){}})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}