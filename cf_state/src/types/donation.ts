export interface Donation {
    id: number;
    donorName: string;
    email: string;
    amount: number;
    compaignId?: number;
    paymentId: string;
    paymentStatus: "pending" | "success" | "failed";
    createdAt: string;
}