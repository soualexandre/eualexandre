import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portifólio de Alexandre Souza",
  description: "Compartilho minha jornada profissional através deste modesto portfólio. Aqui, busco destacar as experiências que moldaram quem sou, as aprendizagens que conquistei e os projetos nos quais me envolvi. Este é mais do que um simples resumo; é um convite para conhecer as diferentes facetas da minha trajetória, com suas vitórias e desafios. ",
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
