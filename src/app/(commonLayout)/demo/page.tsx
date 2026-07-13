import { userService } from "@/services/user.service";


export default async function Demopage() {


  const data=await userService.getSession()

  console.log("session form demo",data)

  return (
    <div>
      Demo page
     
    </div>
  );
}
