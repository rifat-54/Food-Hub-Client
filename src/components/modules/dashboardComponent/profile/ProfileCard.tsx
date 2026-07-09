import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  CalendarDays,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  User,
} from "lucide-react";
import Link from "next/link";

type ProfileCardProps = {
  user: {
    id: string;
    name: string;
    email: string;
    image: string | null;
    phone: string | null;
    address: string | null;
    role: string;
    status: string;
    emailVerified: boolean;
    createdAt: string;
    updatedAt: string;
  };
};

export default function ProfileCard({ user }: ProfileCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg border-0">
      <div className="h-48 bg-gradient-to-r from-blue-500 via-green-500 to-yellow-300" />

      <CardHeader className="relative flex flex-col items-center text-center -mt-16">
        <Avatar className="h-32 w-32 border-4 border-background shadow-lg">
          <AvatarImage src={user.image ?? ""} />

          <AvatarFallback className="text-4xl font-bold">
            {user.name.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>

        <h2 className="mt-4 text-3xl font-bold">{user.name}</h2>

        <p className="text-muted-foreground">{user.email}</p>

        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
            {user.role}
          </Badge>

          <Badge
            className={
              user.status === "ACTIVE"
                ? "bg-green-100 text-green-700 hover:bg-green-100"
                : "bg-red-100 text-red-700 hover:bg-red-100"
            }
          >
            {user.status}
          </Badge>

          <Badge
            className={
              user.emailVerified
                ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-100"
                : "bg-orange-100 text-orange-700 hover:bg-orange-100"
            }
          >
            {user.emailVerified ? "Verified Email" : "Email Not Verified"}
          </Badge>
        </div>

        <Button asChild className="mt-6">
          <Link href="#">Edit Profile</Link>
        </Button>
      </CardHeader>

      <CardContent className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="flex items-start gap-4">
          <User className="w-5 h-5 mt-1 text-primary" />

          <div>
            <p className="text-sm text-muted-foreground">Role</p>

            <p className="font-semibold">{user.role}</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Mail className="w-5 h-5 mt-1 text-primary" />

          <div>
            <p className="text-sm text-muted-foreground">Email</p>

            <p className="font-semibold break-all">{user.email}</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Phone className="w-5 h-5 mt-1 text-primary" />

          <div>
            <p className="text-sm text-muted-foreground">Phone</p>

            <p className="font-semibold">{user.phone ?? "Not Provided"}</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <MapPin className="w-5 h-5 mt-1 text-primary" />

          <div>
            <p className="text-sm text-muted-foreground">Address</p>

            <p className="font-semibold">{user.address ?? "Not Provided"}</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <CalendarDays className="w-5 h-5 mt-1 text-primary" />

          <div>
            <p className="text-sm text-muted-foreground">Member Since</p>

            <p className="font-semibold">
              {new Date(user.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <ShieldCheck className="w-5 h-5 mt-1 text-primary" />

          <div>
            <p className="text-sm text-muted-foreground">Account Status</p>

            <p className="font-semibold">{user.status}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
