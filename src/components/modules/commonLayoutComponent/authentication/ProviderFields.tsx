"use client";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Props = {
  form: any; // We'll improve this type later.
};

export default function ProviderFields({ form }: Props) {

  console.log(form.state.values.role)

  return (
    <FieldGroup>
      <h3 className="text-lg font-semibold">Restaurant Information</h3>

      {/* Restaurant Name */}
      <form.Field
        name="restaurantName"
        children={(field:any) => {
          const isInvalid =
            field.state.meta.isTouched && !field.state.meta.isValid;

          return (
            <Field>
              <FieldLabel htmlFor={field.name}>
                Restaurant Name
              </FieldLabel>

              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Sarah's Kitchen"
              />

              {isInvalid && (
                <FieldError errors={field.state.meta.errors} />
              )}
            </Field>
          );
        }}
      />

      {/* Description */}
      <form.Field
        name="description"
        children={(field:any) => {
          const isInvalid =
            field.state.meta.isTouched && !field.state.meta.isValid;

          return (
            <Field>
              <FieldLabel htmlFor={field.name}>
                Description
              </FieldLabel>

              <Textarea
                id={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Tell customers about your restaurant..."
              />

              {isInvalid && (
                <FieldError errors={field.state.meta.errors} />
              )}
            </Field>
          );
        }}
      />

      {/* Address */}
      <form.Field
        name="address"
        children={(field:any) => {
          const isInvalid =
            field.state.meta.isTouched && !field.state.meta.isValid;

          return (
            <Field>
              <FieldLabel htmlFor={field.name}>
                Address
              </FieldLabel>

              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Gulshan 2, Dhaka"
              />

              {isInvalid && (
                <FieldError errors={field.state.meta.errors} />
              )}
            </Field>
          );
        }}
      />

      {/* Image */}
      <form.Field
        name="image"
        children={(field:any) => {
          const isInvalid =
            field.state.meta.isTouched && !field.state.meta.isValid;

          return (
            <Field>
              <FieldLabel htmlFor={field.name}>
                Restaurant Image URL
              </FieldLabel>

              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="https://example.com/image.jpg"
              />

              {isInvalid && (
                <FieldError errors={field.state.meta.errors} />
              )}
            </Field>
          );
        }}
      />
    </FieldGroup>
  );
}