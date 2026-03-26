export type DataGenreType = {
    id: number;
    createdAt: string;
    name: string;
    color: string;
    creatorName: string;
    totalTexts: number;
}

export type DataTextType = {
    publicId: string;
    title: string;
    isImageOnly: boolean;
    referenceUrl?: string;
    createdAt: string;
    genre: {
        id: number;
        color: string;
        name: string;
    }
}

