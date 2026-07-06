import UpdateProviderProfileForm from "@/components/modules/commonLayoutComponent/profile/UpdateProviderProfileForm";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";


export default function UpdateProfilePage() {
  return (
    <div className="container mx-auto flex min-h-screen items-center justify-center p-6">
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle>Complete Your Provider Profile</CardTitle>
          <CardDescription>
            Add your restaurant information to start selling on FoodHub.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <UpdateProviderProfileForm />
        </CardContent>
      </Card>
    </div>
  );
}