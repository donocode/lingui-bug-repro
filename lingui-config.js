const path = require("path");

const srcDir = "/Volumes/workplace/waypoint/temp/test-lingui-cli";
module.exports = {
  sourceLocale: "en",
  locales: ["en"],
  format: "lingui",
  formatOptions: { origins: false },
  catalogs: [
    {
      path: path.join(srcDir, "build", "{locale}"),
      include: [path.join(srcDir, "src")],
      exclude: ["**/node_modules/**", "**/build/**"],
    },
  ],
};
