exports.func = () => process.exit(1);
exports.validator = msg => msg.author.id === process.env.OWNER_ID;