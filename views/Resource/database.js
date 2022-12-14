// Providing entire database
const mongooseDb = await mongoose.connect('mongodb://localhost:27017/test');

const admin = new AdminJS({
	databases: [mongooseDb],
});
