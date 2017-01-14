/**
 * Created by Will on 1/13/2017.
 */

exports.func = () => process.exit(1);
exports.validator = msg => msg.author.id === process.env.OWNER_ID;