import mongoose from 'mongoose';

export interface Logo extends mongoose.Document {
  company: string;
  website: string;
  logoUrl: string;
}

const logoSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true
  },
  website: {
    type: String,
    required: true
  },
  logoUrl: {
    type: String,
    required: true
  }
});

export default mongoose.model<Logo>('Logo', logoSchema);
