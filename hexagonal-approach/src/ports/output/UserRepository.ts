export interface UserRepository {
    saveUser(user: {name: string, email: string, password: string}): Promise<void>;
}