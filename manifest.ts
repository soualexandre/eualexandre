import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Compartilho minha jornada profissional através deste modesto portfólio. Aqui, busco destacar as experiências que moldaram quem sou, as aprendizagens que conquistei e os projetos nos quais me envolvi. Este é mais do que um simples resumo; é um convite para conhecer as diferentes facetas da minha trajetória, com suas vitórias e desafios.',
        short_name: 'Alexandre',
        description: 'Next.js App',
        start_url: '/',
        display: 'standalone',
        background_color: '#000',
        theme_color: '#000',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}