module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    parserOptions: {
        parser: "babel-eslint"
    },
    extends: [],
    plugins: [],
    // add your custom rules here
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "max-len": ["error", {"code": 120}],
        "quotes": ["error", "double"],
    }
};