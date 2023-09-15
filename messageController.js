const Messages = require('../model/messageModal');

module.exports.contactUs = async (req, res, next) => {
    try {
        //RECIEVE DATA FROM FRONTEND
        const { name, email, message } = req.body;

        // CREATE USER IN DATABASE WITH PROCESSED CREDENTAILS
        const contactUsMessage = await Messages.create({
            name,
            email,
            message
        });

        return res.json({ status: true, contactUsMessage });
    }
    catch (error) {
        next(error);
    }
};