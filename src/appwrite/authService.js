import { Client, Account, ID } from "appwrite";
import toast from 'react-hot-toast'
import conf from "../conf/conf";

const client = new Client()
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId);

const account = new Account(client);

const authService = {
    createAccount: async ({ email, password, name }) => {
        try {
            const user = await account.create(ID.unique(), email, password, name);
            console.log(user);
            // return user;
            return await authService.login({ email, password });
        } catch (error) {
            if (error.statusCode === 409) {
                console.log("Account already exists. Trying login...");
                toast.error("Account already exists. Trying login...");
                return await authService.login({ email, password });
            } else {
                throw error;
            }
        };
    },

    login: async ({ email, password }) => {
        try {
            return await account.createEmailPasswordSession(email, password);
        } catch (error) {
            if (error.statusCode === 429) {
                toast.error("Too many login attempts. Please wait a few minutes and try again.");
            }
            console.error("Error logging in:", error);
            throw error;
        }
    },

    getCurrentUser: async () => {
        try {
            const currentUser = await account.get();
            console.log(currentUser);
            return currentUser;

        } catch {
            return null;
        }
    },

    logout: () => account.deleteSessions(),
};

export default authService;
