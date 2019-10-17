import mongoose from 'mongoose';

class Database {
  constructor() {
    this.mongo();
  }

  private database():void {
    //
  }

  private mongo(): void {
    const mongoURL = process.env.MONGO_URL || '';
    mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  }
}

export default new Database();
