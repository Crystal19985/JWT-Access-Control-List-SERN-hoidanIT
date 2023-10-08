import { userServices } from '../services';

export const getUserList = async (req, res) => {
    try {
        const Users = await userServices.getUserList();
        return res.status(200).json({
            errCode: 0,
            Users,
        });
    } catch (error) {
        throw new Error(error.message);
    }
};
