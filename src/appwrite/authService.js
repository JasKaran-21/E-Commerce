import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

const client = new Client()
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId);

const account = new Account(client);

const authService = {
    createAccount: async ({ email, password, name }) => {
        const user = await account.create(ID.unique(), email, password, name);
        console.log(user);

        return authService.login({ email, password });
    },

    login: async ({ email, password }) => {
        return await account.createEmailPasswordSession(email, password);
    },

    getCurrentUser: async () => {
        try {
            return await account.get();
        } catch {
            return null;
        }
    },

    logout: () => account.deleteSessions(),
};

export default authService;
