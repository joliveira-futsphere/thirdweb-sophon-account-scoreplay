"use server";

import "server-only";

import { VerifyLoginPayloadParams } from "thirdweb/auth";
import { cookies } from "next/headers";
import { thirdwebAuth } from "./thirdweb.server";

const privateKey = process.env.AUTH_PRIVATE_KEY || "";

if (!privateKey) {
  throw new Error("Missing AUTH_PRIVATE_KEY in .env file.");
}

export const generatePayload = thirdwebAuth.generatePayload;

export async function doLogin(params: VerifyLoginPayloadParams) {
  const { address } = params.payload;
  const verifiedPayload = await thirdwebAuth.verifyPayload(params);
  console.log("verifiedPayload", verifiedPayload);
  debugger;
  // invalid signature
  try {
    if (verifiedPayload.valid) {
      const jwt = await thirdwebAuth.generateJWT({
        payload: verifiedPayload.payload,
        context: {
          user: {
            walletAddress: address,
          },
        },
      });

      (await cookies()).set("jwt", jwt);

      return {
        success: true,
        user: {
          walletAddress: address,
        },
      };
    }
  } catch (error: any) {
    return {
      success: false,
      message: error?.message,
    };
  }
}

export async function isLoggedIn(address?: string) {
  try {
    const jwt = (await cookies()).get("jwt");
    debugger;

    const authResult = await thirdwebAuth.verifyJWT({ jwt: jwt?.value || "" });
    if (!authResult.valid) {
      return false;
    }

    return authResult.valid;
  } catch (error: any) {
    console.error("Error checking login status:", error);
    return false;
  }
}

export async function logout() {
  (await cookies()).delete("jwt");
}
