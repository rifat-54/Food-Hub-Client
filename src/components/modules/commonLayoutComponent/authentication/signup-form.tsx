"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { env } from "@/env";
import { authClient } from "@/lib/auth-client";
import { UserRole } from "@/types/user.types";
import { useForm } from "@tanstack/react-form";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { toast } from "sonner";
import * as z from "zod";
import RoleSelector from "./RoleSelector";
import ProviderFields from "./ProviderFields";
import { createProviderProfile } from "@/actions/provider.action";
import { useEffect, useState } from "react";
import { Role } from "@/constant/role";

const formSchema = z
  .object({
    name: z.string().min(1, "This field is required"),
    email: z.email(),
    password: z.string().min(8, "Minium length is 8"),
    confirmPassword: z.string().min(1),
    role: z.enum([UserRole.USER, UserRole.PROVIDER]),
    restaurantName: z.string(),
    description: z.string(),
    address: z.string(),
    image: z.string().url("Please enter a valid URL"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password doesn't match",
    path: ["confirmPassword"],
  });

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  const router = useRouter();

  const { data: session } = authClient.useSession();

  useEffect(() => {
    if (!session) return;

    const role = localStorage.getItem("signup-role");

    if (role === UserRole.PROVIDER) {
      localStorage.removeItem("signup-role");
      router.replace("/updateprofile");
    } else {
      localStorage.removeItem("signup-role");
      router.replace("/");
    }
  }, [session, router]);

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: UserRole.USER,
      restaurantName: "",
      description: "",
      address: "",
      image: "",
    },
    validators: {
      // onBlur:formSchema,
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      const toastId = toast.loading("Creating User...");
      console.log("on submit called", value);

      // const { confirmPassword, ...userData } = value;

      const userData = {
        name: value.name,
        email: value.email,
        password: value.password,
        role: value.role,
      };

      const providerData = {
        address: value.address,
        description: value.description,
        image: value.image,
        restaurantName: value.restaurantName,
      };

      console.log(userData);
      console.log(providerData);

      try {
        const { data, error } = await authClient.signUp.email(userData);
        console.log(data, error);

        if (error) {
          toast.error(error?.message, { id: toastId });
          return;
        }

        if (value.role === UserRole.PROVIDER) {
          const pdata = await createProviderProfile(providerData);
          console.log(pdata);
        }

        toast.success("Account created successfully", { id: toastId });
        form.reset();
        router.push("/");
      } catch (error) {
        toast.error("Something went wrong. Try Again", { id: toastId });
      }
    },
  });

  console.log(form.state.values.role);

  const handleGoogleLogin = async () => {
    const userRole = form.state.values.role;

    localStorage.setItem("signup-role", userRole);

    const data = await authClient.signIn.social({
      provider: "google",
      callbackURL: `${env.NEXT_PUBLIC_FRONTEND_URL}/signup`,
    });
  };

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            <form.Field
              name="name"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Full Name</FieldLabel>
                    <Input
                      type="text"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="John Doe"
                      required
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            ></form.Field>

            <form.Field
              name="email"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                    <Input
                      type="email"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="m@example.com"
                      required
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            <form.Field
              name="password"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                    <Input
                      type="password"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="m@example.com"
                      required
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />
            <form.Field
              name="confirmPassword"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field>
                    <FieldLabel htmlFor={field.name}>
                      Confirm Password
                    </FieldLabel>
                    <Input
                      type="password"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      required
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            <form.Field
              name="role"
              children={(field) => (
                <RoleSelector
                  value={field.state.value}
                  onChange={(value) => field.handleChange(value)}
                />
              )}
            />

            <form.Subscribe selector={(state) => state.values.role}>
              {(role) =>
                role === UserRole.PROVIDER ? (
                  <ProviderFields form={form} />
                ) : null
              }
            </form.Subscribe>

            <FieldGroup>
              <Field>
                <Button type="submit" disabled={form.state.isSubmitting}>
                  {form.state.isSubmitting ? "Creating..." : "Create Account"}
                </Button>
                <Button
                  onClick={() => handleGoogleLogin()}
                  variant="outline"
                  type="button"
                >
                  Sign up with Google
                </Button>
                <FieldDescription className="px-6 text-center">
                  Already have an account? <Link href="/login">Sign in</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
