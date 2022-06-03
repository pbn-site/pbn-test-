const path = require("path");
const PATH = process.env.NEXT_PUBLIC_ASSET_PREFIX;
module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, "src/styles")],
    },
    assetPrefix: PATH ?? "",
    basePath: PATH ?? "",
};
