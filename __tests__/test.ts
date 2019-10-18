import mongoose from 'mongoose';

// beforeAll(() => {
//   //
// });

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});
