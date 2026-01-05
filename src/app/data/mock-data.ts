import { AiTool } from '../models/tool.interface';

export const MOCK_TOOLS: AiTool[] = [
    {
        id: '1',
        name: 'Quickchat',
        description: 'AI-powered customer service chatbots that recognize natural language.',
        category: 'Chat Bots',
        websiteUrl: 'https://quickchat.ai',
        imageUrl: 'https://placehold.co/600x400/1e1e1e/FFF?text=Quickchat',
        isFree: true,
        isFeatured: true
    },
    {
        id: '2',
        name: 'Freebeat',
        description: 'Turns your music into AI-powered videos with one click. Ideal for creators.',
        category: 'AI Video Tools',
        websiteUrl: 'https://freebeat.ai',
        imageUrl: 'https://placehold.co/600x400/2a2a2a/FFF?text=Freebeat',
        isFree: false
    },
    {
        id: '3',
        name: 'Generor Video',
        description: 'Web-based AI video tool for creators and marketers to generate content easily.',
        category: 'AI Video Tools',
        websiteUrl: 'https://generor.com',
        imageUrl: 'https://placehold.co/600x400/333/FFF?text=Generor',
        isFree: true
    },
    {
        id: '4',
        name: 'UGC Maker',
        description: 'Create AI-generated UGC-style videos in minutes without filming or editing.',
        category: 'AI Video Tools',
        websiteUrl: 'https://ugcmaker.io',
        imageUrl: 'https://placehold.co/600x400/1e1e1e/FFF?text=UGC+Maker',
        isFree: true
    },
    {
        id: '5',
        name: 'BankGPT',
        description: 'Automate bank statements, invoices, and receipts. Secure and free to use.',
        category: 'AI Business Tools',
        websiteUrl: 'https://bankgpt.io',
        imageUrl: 'https://placehold.co/600x400/222/FFF?text=BankGPT',
        isFree: true
    },
    {
        id: '6',
        name: 'Video Transcriber AI',
        description: 'Convert video and audio into clean, accurate transcripts. 98+ languages supported.',
        category: 'AI Audio Tools',
        websiteUrl: 'https://videotranscriber.ai',
        imageUrl: 'https://placehold.co/600x400/333/FFF?text=Transcriber',
        isFree: true
    },
    {
        id: '7',
        name: 'Learn Place AI',
        description: 'Adaptive learning platform that builds custom syllabi and accelerates skill-building.',
        category: 'AI Education Tools',
        websiteUrl: 'https://learnplace.ai',
        imageUrl: 'https://placehold.co/600x400/1e1e1e/FFF?text=Learn+Place',
        isFree: false
    },
    {
        id: '8',
        name: 'Grokipedia',
        description: 'Elon Musk’s AI-powered online encyclopedia launched by xAI in 2025.',
        category: 'AI Education Tools',
        websiteUrl: 'https://grokipedia.com',
        imageUrl: 'https://placehold.co/600x400/000/FFF?text=Grokipedia',
        isFree: true,
        isFeatured: true
    },
    {
        id: '9',
        name: 'ChatGPT Atlas',
        description: 'A smarter way to discover, organize, and learn using interactive AI-powered knowledge maps.',
        category: 'AI Search Engine',
        websiteUrl: 'https://chatgpt.com/atlas',
        imageUrl: 'https://placehold.co/600x400/2a2a2a/FFF?text=Atlas',
        isFree: true
    },
    {
        id: '10',
        name: 'Midjourney',
        description: 'Generates images from natural language descriptions, called "prompts".',
        category: 'AI Image Generator',
        websiteUrl: 'https://midjourney.com',
        imageUrl: 'https://placehold.co/600x400/111/FFF?text=Midjourney',
        isFree: false
    },
    {
        id: '11',
        name: 'Jasper',
        description: 'AI copywriter assistant that helps you write content tailored to your brand voice.',
        category: 'AI Text Tools',
        websiteUrl: 'https://jasper.ai',
        imageUrl: 'https://placehold.co/600x400/444/FFF?text=Jasper',
        isFree: false
    },
    {
        id: '12',
        name: 'GitHub Copilot',
        description: 'AI pair programmer that helps you write code faster and with less work.',
        category: 'AI Coding Tools',
        websiteUrl: 'https://github.com/features/copilot',
        imageUrl: 'https://placehold.co/600x400/000/FFF?text=Copilot',
        isFree: false
    }
];
