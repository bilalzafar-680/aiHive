export interface AiTool {
    id: string;
    name: string;
    description: string;
    category: string;
    websiteUrl: string;
    imageUrl?: string;
    isFree?: boolean;
    isFeatured?: boolean;
}
