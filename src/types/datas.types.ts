export type DataGenreType = {
    id: number;
    createAt: string | Date;
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
    createdAt: Date | string;
    genreId: number;
}