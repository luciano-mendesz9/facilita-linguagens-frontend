type UserType = {
    publicId: string;
    email: string;
    firstName: string;
    lastName: string;
    isCollaborator: boolean;
    status: 'ACTIVE' | 'INACTIVE' | 'PENDING' | 'BLOCKED';
    createAt: string;
    image: string | null;
}

export default UserType;