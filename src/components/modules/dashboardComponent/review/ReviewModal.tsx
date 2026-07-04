"use client";
import { createReview } from "@/actions/review.action";
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
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type Review = {
  comment: string;
  rating: number;
};

export function ReviewModal({mealId}:{mealId:string}) {

const [open,setOpen]=useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors,isSubmitting },
  } = useForm<Review>({
    defaultValues:{
        comment:"",
        rating:5
    }
  });

  const onSubmit =async (value: Review) => {

    const data={
        ...value,
        mealId
    }

    try {
        const result=await createReview(data)

        if(result.data){
            toast.success("Successfully add review")
            reset()
            setOpen(false)
        }

        
    } catch (error) {
        toast.error(error instanceof Error?error.message:"Something went wrong")
    }

    // console.log(data)
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form id="review-form" onSubmit={handleSubmit(onSubmit)}>
        <DialogTrigger asChild>
          <Button variant="default">Write Review</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Write Review</DialogTitle>
            <DialogDescription>
              Share your experience with this meal.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="comment">Comment</Label>

              <Textarea
                {...register("comment", { required: "Comment is required" })}
                id="comment"
                placeholder="Delicious Food"
              />
              {errors.comment && <p className="text-red-500 text-sm" >{errors.comment.message}</p>}
            </Field>
            <Field>
              <Label htmlFor="rating">Rating</Label>
              <Input
                {...register("rating", {
                  required: "Provide a rating",
                  valueAsNumber: true,
                  min: {
                    value: 1,
                    message: "Rating must be at least 1",
                  },
                  max: {
                    value: 5,
                    message: "Rating cannot exceed 5",
                  },
                })}
                type="number"
                id="rating"
              
              />
              {errors.rating && <p className="text-red-500 text-sm" >{errors.rating.message}</p>}
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button disabled={isSubmitting} form="review-form" type="submit">
              {isSubmitting?"Saving...": "Save changes"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
