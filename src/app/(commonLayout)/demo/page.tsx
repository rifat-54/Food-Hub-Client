"use client";

import { useForm } from "react-hook-form";

export default function Demopage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data:any) => {
    // console.log(data)
  };

  return (
    <div>
      Demopage
      <form onSubmit={handleSubmit(onSubmit)} action="">
        <div className="flex flex-col gap-1">
          first name
          <input placeholder="name" type="text" {...register("name")} />
          email
          <input placeholder="email" type="email" {...register("email")} />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
