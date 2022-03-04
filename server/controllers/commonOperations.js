import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// User signin and signup operations
export const registerUser = async (Model, data) => {
  try {
    const { name, email, pwd } = data;

    if (!(name && email && pwd)) {
      return { status: "Failed", error: "All inputs are required." };
    }

    const oldUser = await Model.findOne({ email });
    if (oldUser) {
      return {
        status: "Failed",
        error: "User alreasdy exists. Please login",
      };
    }

    const encryptedPassword = await bcrypt.hash(pwd, 10);
    const user = await Model.create({
      username: name,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );

    user.token = token;
    user.save();

    const userData = {
      id: user._id,
      token: user.token,
    };

    return { status: "Success", data: user, cookie: userData };
  } catch (err) {
    console.log(err);
    return { status: "Failed", error: err };
  }
};

export const loginUser = async (Model, data) => {
  try {
    const { username, password } = data;

    if (!(username && password)) {
      return { status: "Failed", error: "All inputs are required." };
    }

    const user = await Model.findOne({ username });

    if (!user) {
      return { status: "Failed", error: "User not found. Please register" };
    } else if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, username },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      user.token = token;
      const userData = {
        id: user._id,
        token: user.token,
      };

      return { status: "Success", data: user, cookie: userData };
    } else if (user || (await bcrypt.compare(password, user.password))) {
      return { status: "Failed", error: "Invalid credentials" };
    }
  } catch (err) {
    console.log(err);
    return { status: "Failed", error: err };
  }
};

// Common CRUD operations
const getAllDataFromDB = async (Model) => {
  const data = await Model.find();
  return data;
};

const getOneDataFromDB = async (Model, id) => {
  const data = await Model.findOne({ _id: id });
  return data;
};

const updateData = (Model, id, updatedData) => {
  try {
    Model.findByIdAndUpdate(
      { _id: id },
      updatedData,
      { new: true },
      (err, data) => {
        return { status: "Success", data };
      }
    );
  } catch (err) {
    console.log(err);
    return { status: "Failed", error: err };
  }
};

const addNewData = async (Model, newData) => {
  try {
    const newCollection = new Model(newData);

    await newCollection.save();
    return { status: "Success", data: newCollection };
  } catch (err) {
    console.log(err);
    return { status: "Failed", error: err };
  }
};

const deleteData = async (Model, id) => {
  const deletedData = await Model.deleteOne({ _id: id });
  return { status: "Success", data: deleteData };
};

// App specific operations
const addMembers = (Model) => {};
