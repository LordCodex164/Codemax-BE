import { UserPort } from "../../ports/input/Userport";
import { Router } from "express";
import { UserRepository } from "../../ports/output/UserRepository";

export class UserRoutes {
    constructor(
        private userPort: UserPort,
        private router: Router,
        private userRepository: UserRepository
    ) {}
     public initRoutes(router: Router) {
        this.router.post('/users', async (req, res) => {
            const { name, email, password } = req.body;
            await this.userPort.createUser({ name, email, password });
            res.status(201).json({ message: 'User created successfully' });
        });
     }
}