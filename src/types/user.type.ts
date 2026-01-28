type UserType = {
    publicId: string;
    email: string;
    firstName: string;
    lastName: string;
    image: string;
    status: 'ACTIVE' | 'INACTIVE' | 'PENDING' | 'BLOCKED';
    role: 'USUARIO' | 'PROFESSOR' | 'DESENVOLVEDOR';
    createdAt: string;
    updatedAt: string;
    isSuperAdmin: boolean;
    isCollaborator: boolean
}

export default UserType;