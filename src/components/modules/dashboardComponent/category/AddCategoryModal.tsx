import { createCategory } from "@/actions/category.action";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "@tanstack/react-form";
import { Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function AddCategoryModal() {

    const[open,setOpen]=useState(false)

  const form = useForm({
    defaultValues: {
      name: "",
    },
    onSubmit: async ({ value }) => {
      try {
        const { data } = await createCategory(value.name);
        console.log(data);
        if(data){
            toast.success("Successfully Added!")
        }
        form.reset()
        setOpen(false)
      } catch (error) {
        toast.error(error instanceof Error?error.message:"Something went wrong")
      }
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        id="category-form"
      >
        <DialogTrigger asChild>
          <Button>
            {" "}
            <Plus className="mr-2 h-4 w-4" />
            Add Category
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Add Category</DialogTitle>
            <DialogDescription>
              Add a new category.Click Save when you're done
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <form.Field
              name="name"
              validators={{
                onChange: ({ value }) => {
                  return !value.trim()
                    ? "Category name is required"
                    : undefined;
                },
              }}
              children={(field) => {
                return (
                  <Field>
                    <Label htmlFor={field.name}>Category Name</Label>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      placeholder="burger"
                    />

                    {field.state.meta.errors.length > 0 && (
                      <p className="text-red-500">
                        {field.state.meta.errors[0]}
                      </p>
                    )}
                  </Field>
                );
              }}
            />
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
            <Button form="category-form" type="submit">
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
