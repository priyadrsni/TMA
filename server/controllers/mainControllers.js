import User from "../models/userdb";

export const getHomePage = (req, res) => {};
export const postLoginpage = (req, res) => {
  try {
    const { username, password } = req.body;

    if (!(username && password)) {
      res.status(400).send("All inputs are required.");
    }

    const user = await User.findOne({ username });

    if (!user) {
      res.status(400).send("User not found. Please register");
    } else if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, username },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      user.token = token;
      const userdata = {
        id: user._id,
        token: user.token,
      };
      res.cookie("x-access-token", userdata);
      res.redirect("/");
    } else if (user || (await bcrypt.compare(password, user.password))) {
      res.status(400).send("Invalid credentials");
    }
  } catch (err) {
    console.log(err);
  }
};
export const postSignuppage = (req, res) => {
  try {
    const { name, email, pwd } = req.body;

    if (!(name && email && pwd)) {
      res.status(400).send("All inputs are required.");
    }

    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User alreasdy exists. Please login");
    }

    const encryptedPassword = await bcrypt.hash(pwd, 10);

    const user = await User.create({
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
    const userdata = {
      id: user._id,
      token: user.token,
    };
    res.cookie("x-access-token", userdata);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
};
