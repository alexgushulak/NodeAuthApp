exports.getPrivateData = (req, res, next) => {

    const { email } = req.body;
    console.log(req.body)

    res.status(200).json({
        success: true,
        data: `You, ${email}, can access the private data in this route`,
    });
}