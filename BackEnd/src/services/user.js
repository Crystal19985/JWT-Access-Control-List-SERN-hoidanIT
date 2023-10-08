import db from '../models';

export const getUserList = async () => {
    try {
        // const response = await db.User.findAll({
        //     attributes: ['email', 'userName'],
        //     include: { model: db.Group, attributes: ['name', 'description'] },
        // });

        // const response = await db.Group.findAll({
        //     where: { id: 1 },
        //     include: { model: db.Role, where: { id: 1 } },
        // });

        const response = await db.Role.findAll({
            include: { model: db.Group, where: { id: 1 } },
            raw: true,
            nest: true,
        });
        console.log(response);
        return response;
    } catch (error) {
        throw new Error(error);
    }
};
