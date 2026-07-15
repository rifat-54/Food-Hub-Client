import { env } from "@/env";

import { UserStatus } from "@/types/user.types";



// const url = env.API_URL;
const publicUrl = env.NEXT_PUBLIC_API_URL;

export const userService = {
  //   getSession: async function () {
  //     try {
  //       const cookieStore = await cookies();
  //       console.log("cookie store ->", cookieStore.getAll());

  //       const res = await serverFetch(`${authUrl}/get-session`, {
  //         headers: {
  //           Cookie: cookieStore.toString(),
  //         },
  //         cache: "no-store",
  //       });

  //       console.log(" res form user service ->", res);

  //       const session = await res.json();

  //       console.log("sessin from user service-> ", session);

  //       if (!session) {
  //         return { data: null, error: { message: "Something is missing" } };
  //       }

  //       return { data: session, error: null };
  //     } catch (error) {
  //       return { data: null, error: { message: "Something is missing" } };
  //     }
  //   },
  getAllUsers: async function () {
    try {
      // const cookieStore=await cookies()

      const res = await fetch(`${publicUrl}/user`, {
        credentials: "include",
      });
      const data = await res.json();

      return { data, error: null };
    } catch (error) {
      return { data: null, error: { message: "Something is missing" } };
    }
  },
  updateUserStatus: async function (id: string, data: UserStatus) {
    try {
      //   const cookieStore = await cookies();
      const res = await fetch(`${publicUrl}/user/${id}`, {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: data }),
      });
      const result = await res.json();

      return { data: result, error: null };
    } catch (error) {
      return { data: null, error: { message: "Something Went Wrong", error } };
    }
  },
  getUserInfo: async function () {
    try {
      //   const cookieStore = await cookies();

      const res = await fetch(`${publicUrl}/user/me`, {
        credentials: "include",
      });

      const data = await res.json();

      return { data, error: null };
    } catch (error) {
      return { data: null, error: { message: "Something Went Wrong", error } };
    }
  },
};
