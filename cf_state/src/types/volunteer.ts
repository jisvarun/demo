export interface Volunteer {
    id: number;
    name: string;
    email: string;
    phone: string;
    occupation?: string;
    message?: string;
    status: "pending" | "approved" | "rejected";
}