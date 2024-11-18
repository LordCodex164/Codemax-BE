module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},
	transformIgnorePatterns: [
		"/node_modules/(?!axios)", // This will allow axios to be transformed
	],
	moduleNameMapper: {
		"^axios$": require.resolve("axios"),
	},
	bail: true,
	verbose: true,
};
