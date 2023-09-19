import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nikhil Limbad - Freelance Full Stack Developer",
    short_name: "Nikhil Limbad",
    description:
      "Nikhil Limbad is an experienced Freelance Full Stack Developer in India, specializing in NextJS, React, AWS, and OpenAI integration. Over 4 years of experience in diverse sectors. Open for remote freelance opportunities.",
    lang: "en",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
