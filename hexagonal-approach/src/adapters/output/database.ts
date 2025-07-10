import { UserRepository } from "../../ports/output/UserRepository";
import mongoose from "mongoose";

export class MongoUserRepository implements UserRepository {
    constructor(private mongoose: mongoose.Mongoose){}
    async saveUser(user: { name: string; email: string; password: string }): Promise<void> {
        const userModel = this.mongoose.model('User', new mongoose.Schema({
            name: String,
            email: String,
            password: String
        }));
        await userModel.create(user);
        console.log('User created successfully');
    }
}