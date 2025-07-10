

export interface UserPort {
    createUser(user: {name: string, email: string, password: string}): Promise<void>;
}