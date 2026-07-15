import { env } from "@/env";
import { ProviderProfileType } from "@/types/provider.types";

const publicUrl = env.NEXT_PUBLIC_API_URL;

export const providerServices = {
  getAllProvider: async function () {
    try {
      const res = await fetch(`${publicUrl}/provider`);

      const data = await res.json();

      if (!res.ok) {
        return { data: null, error: { message: data.message } };
      }

      return { data, error: null };
    } catch (error) {
      return {
        data: null,
        error: { message: "Something went wrong", error },
      };
    }
  },

  getProviderWithMenu: async function (id: string) {
    try {
      const res = await fetch(`${publicUrl}/provider/${id}`);

      const data = await res.json();

      if (!res.ok) {
        return { data: null, error: { message: data.message } };
      }

      return { data, error: null };
    } catch (error) {
      return {
        data: null,
        error: { message: "Something went wrong", error },
      };
    }
  },

  getProviderMeals: async function () {
    try {
      const res = await fetch(`${publicUrl}/provider/allmeals`, {
        credentials: "include",
      });

      const meals = await res.json();

      if (!res.ok) {
        return {
          data: null,
          error: { message: meals.message || "Something went wrong" },
        };
      }

      return { data: meals, error: null };
    } catch (error) {
      return {
        data: null,
        error: { message: "Something went wrong", error },
      };
    }
  },

  deleteMeals: async function (id: string) {
    try {
      const res = await fetch(`${publicUrl}/menu/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        return {
          data: null,
          error: { message: data.message || "Something went wrong" },
        };
      }

      return { data, error: null };
    } catch (error) {
      return {
        data: null,
        error: { message: "Something went wrong", error },
      };
    }
  },

  createProviderProfile: async function (data: ProviderProfileType) {
    try {
      const res = await fetch(`${publicUrl}/provider`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        return {
          data: null,
          error: { message: result.message || "Something went wrong" },
        };
      }

      return { data: result, error: null };
    } catch (error) {
      return {
        data: null,
        error: { message: "Something went wrong", error },
      };
    }
  },
};