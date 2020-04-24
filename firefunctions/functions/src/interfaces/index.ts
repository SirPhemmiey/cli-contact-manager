

export interface ContactForm {
    firstName: string;
    lastName: string;
    phone: number;
    email: string;
}

export interface UpdateContactForm {
    id: number,
    firstName?: string;
    lastName?: string;
    phone?: number;
    email?: string;
}