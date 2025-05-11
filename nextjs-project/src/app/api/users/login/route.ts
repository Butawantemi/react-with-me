import connect from "@/dbConfing/dbConfig";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    // Check if user is already exits.
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "User is does not exits" },
        { status: 400 }
      );
    }

    // Check if password is correct
    const ValidPassword = await bcrypt.compare(password, user.password);
    if (!ValidPassword) {
      return NextResponse.json({ error: "Invalid password" }, { status: 400 });
    }

    // Create token data
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    // Create token
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1h",
    });

    const response = NextResponse.json({
      message: "Login succeful",
      success: true,
    });

    response.cookies.set("token", token, { httpOnly: true});
    return response;

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
