import db from "../db";
import {
  isValidPassword,
  hashPassword,
  buildUserResponse,
  comparePassword,
  jwtVerify
} from "../utils/auth";
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError
} from "../utils/errors";

export default {
  async register(req, res) {
    const { id, username, password, name } = req.body;
    if (!id)
      throw new UnauthorizedError("Please contact the admin for a signup ID");
    if (!username) throw new BadRequestError("Please provide a username");
    if (!password) throw new BadRequestError("Please provide a valid password");

    if (!isValidPassword(password))
      throw new BadRequestError("Password must contain atleast 8 characters");
    const givenId = process.env.ADMIN_ID;
    if (id != givenId)
      throw new BadRequestError("You are not permitted to register");
    const userExists = await db.users.findByUserName(username);

    console.log("userExists", userExists);
    if (userExists[0])
      throw new BadRequestError("Username exists! Proceed to login");

    const user = await db.users.create({
      id,
      username,
      name,
      password: await hashPassword(password)
    });

    return res.json({
      ...buildUserResponse(user),
      message: "Registered!"
    });
  },
  async login(req, res) {
    const { username, password } = req.body;
    if (!username) throw new BadRequestError("Please enter username");
    if (!password) throw new BadRequestError("Please enter a password");

    const user = await db.users.findByUserName(username);

    if (!user) throw new NotFoundError("User not found!");

    let checker = user[0].password;

    const isCorrectPassword = await comparePassword(password, checker);

    if (!isCorrectPassword) {
      throw new UnauthorizedError("Incorrect Password");
    }
    return res.json({
      ...buildUserResponse(user),
      message: "Login Successful"
    });
  },
  async getMe(req, res, next) {
    const { _id } = req.user;
    const user = await db.users.findById(_id);
    return res.json(buildUserResponse(user[0]));
  },
  // Authenticate
  async authenticate(req, res, next) {
    const token = (
      req.headers["Authorization"] ||
      req.headers["authorization"] ||
      ""
    ).replace(/bearer\s+/i, "");
    if (!token) throw new UnauthorizedError("No Auth Token provided");

    const decodedUser = await jwtVerify(token).catch(() => null);

    if (!decodedUser) throw new UnauthorizedError("Invalid token");

    req.user = decodedUser;

    return next();
  }
};
