import { Document, Schema, model, MongooseError } from 'mongoose';
import bcrypt from 'bcrypt';

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  img?: string;
  role: 'Admin' | 'Teacher' | 'Student';
  confirmed: Boolean;
  fullname?: string;
  createdAt: Date;
  updatedAt: Date;
  inviteCode?: string;
  classes?: {
    classId: string;
    startYear: number;
  }[]; 
  subjects?: Schema.Types.ObjectId[];
  isUserInYear2(): boolean;
}

const UserSchema = new Schema<IUser>(
  {
    fullname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
        trim: true,
        min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    confirmed: {
      type: Boolean,
      default: false,
      required: true,
    },
    /* inviteCode: {
      type: String,
      required: false,
    }, */
    img: {
      type: String,
      default: '',
      required: false,
    },
    role: {
      type: String,
      default: 'Student',
    },
    classes: [
      {
        classId: {
          type: String,
          required: true,
        },
        startYear: {
          type: Number,
          required: true,
        },
      },
    ],
    subjects: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Subject',
      },
    ],
  },
  { timestamps: true }
);

// adding the hassed password transformation here is more secure in production
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();

  try {
      this.password = await bcrypt.hash(this.password, 10);
      next();
  } catch (error) {
      if (error instanceof MongooseError) next(error);
      else throw error;
  }
})

// Define the method on the schema's methods property
UserSchema.methods.isUserInYear2 = function () {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1; // January is 0
  const isInYear2 = currentMonth >= 8;

  const startYear = this.classes?.[0]?.startYear ?? 0;

  return currentYear - startYear === (isInYear2 ? 1 : 0);
};

const UserModel = model<IUser>('User', UserSchema);

export default UserModel;
export type { IUser };

