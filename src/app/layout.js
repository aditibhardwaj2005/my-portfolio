import "./globals.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "name": "Aditi Bhardwaj",
    "alternateName": "Aditi Bhardwaj",
    "description": "Aditi Bhardwaj is a web developer specializing in React and modern frontend technologies.",
    "image": "https://www.aditibhardwaj.com/og-image.png",
    "jobTitle": "Web Developer",
    "url": "https://www.aditibhardwaj.com",
    "sameAs": [
      "https://github.com/aditibhardwaj2005"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Quantum University"
    }
  }
};

export const metadata = {
  metadataBase: new URL("https://www.aditibhardwaj.com"),
  title: "Aditi Bhardwaj | Web Developer & Software Engineer Portfolio",
  description: "Aditi Bhardwaj's personal portfolio website showcasing her projects, skills, and experience in frontend development.",
  keywords: ["Aditi Bhardwaj", "Web Developer", "Software Engineer", "React Developer", "Next.js Portfolio", "Frontend Engineer", "Computer Science"],
  authors: [{ name: "Aditi Bhardwaj", url: "https://github.com/aditibhardwaj2005" }],
  creator: "Aditi Bhardwaj",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.aditibhardwaj.com",
    title: "Aditi Bhardwaj | Web Developer & Software Engineer Portfolio",
    description: "Explore projects, skills, and professional experience of Aditi Bhardwaj, a passionate frontend developer.",
    siteName: "Aditi Bhardwaj Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aditi Bhardwaj - Web Developer Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditi Bhardwaj | Web Developer & Software Engineer Portfolio",
    description: "Explore projects, skills, and professional experience of Aditi Bhardwaj, a passionate frontend developer.",
    images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}