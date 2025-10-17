import baseConfig from "@rfk/eslint-config/base.js";

export default [
  ...baseConfig,
  {
    ignores: ["dist/**/*"],
  },
];
