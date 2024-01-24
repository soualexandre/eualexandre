import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alexandre Souza | Desenvolvedor Full Stack",
  description: "Compartilho minha jornada profissional através deste modesto portfólio. Aqui, busco destacar as experiências que moldaram quem sou, as aprendizagens que conquistei e os projetos nos quais me envolvi. Este é mais do que um simples resumo; é um convite para conhecer as diferentes facetas da minha trajetória, com suas vitórias e desafios. ",
  keywords: ["Alexandre Souza", "Desenvolvedor", "Programador", "JavaScript", "Portifólio", "Next", "Santos", "Alexandre", "Xande"],
  themeColor: "#000",
  icons: [
    {
      src: '/assets/images/home.png',
      sizes: 'any',
      type: 'image/png',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
