"use client";

import { createProviderProfile } from "@/actions/provider.action";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useForm } from "@tanstack/react-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import * as z from "zod";

const formSchema = z.object({
  restaurantName: z
    .string()
    .min(3, "Restaurant name must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  address: z.string().min(5, "Address is required"),
  image: z.string().url("Please enter a valid URL")
});

export default function UpdateProviderProfileForm() {
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      restaurantName: "",
      description: "",
      address: "",
      image: "",
    },

    validators: {
      onSubmit: formSchema,
    },

    onSubmit: async ({ value }) => {
      const toastId = toast.loading("Creating provider profile...");

      try {
        const { data } = await createProviderProfile(value);

        // console.log(data);

        // if (!data.success) {
        //   toast.error(data.message, { id: toastId });
        //   return;
        // }

        toast.success("Provider profile created successfully.", {
          id: toastId,
        });

        router.replace("/");
      } catch {
        toast.error("Something went wrong.", {
          id: toastId,
        });
      }
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <FieldGroup>
        <form.Field
          name="restaurantName"
          children={(field) => (
            <Field>
              <FieldLabel>Restaurant Name</FieldLabel>

              <Input
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Burger House"
              />

              <FieldError
                className="text-red-500 text-sm"
                errors={field.state.meta.errors}
              />
            </Field>
          )}
        />

        <form.Field
          name="description"
          children={(field) => (
            <Field>
              <FieldLabel>Description</FieldLabel>

              <Textarea
                rows={4}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Tell customers about your restaurant..."
              />

              <FieldDescription>
                A short description that customers will see.
              </FieldDescription>

              <FieldError
                className="text-red-500 text-sm"
                errors={field.state.meta.errors}
              />
            </Field>
          )}
        />

        <form.Field
          name="address"
          children={(field) => (
            <Field>
              <FieldLabel>Restaurant Address</FieldLabel>

              <Input
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="123 Main Street"
              />

              <FieldError
                className="text-red-500 text-sm"
                errors={field.state.meta.errors}
              />
            </Field>
          )}
        />

        <form.Field
          name="image"
          children={(field) => (
            <Field>
              <FieldLabel>Restaurant Image URL</FieldLabel>

              <Input
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="https://example.com/image.jpg"
              />

              <FieldError
                className="text-red-500 text-sm"
                errors={field.state.meta.errors}
              />
            </Field>
          )}
        />

        <Button
          className="w-full"
          type="submit"
          disabled={form.state.isSubmitting}
        >
          {form.state.isSubmitting ? "Saving..." : "Complete Provider Profile"}
        </Button>
      </FieldGroup>
    </form>
  );
}
