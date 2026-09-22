export interface Campaign {
    id: number;
    title: string;
    slug: string;
    description: string;
    image: string;
    targetAmount: number;
    collectedAmount: number;
    status: "active" | "completed" | "upcoming";
    startDate: string;
    endDate: string;
}