"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UserStatus } from "@/types/user.types";

import { toast } from "sonner";
import { userService } from "@/services/user.service";

type User = {
  id: string;
  name: string;
  email: string;
  image: string | null;
  role: "USER" | "PROVIDER" | "ADMIN";
  status: "ACTIVE" | "SUSPENDED";
  emailVerified: boolean;
  createdAt: string;
};

interface UsersTableProps {
  users: User[];
  reload:()=>Promise<void>
}

export function UsersTable({ users,reload }: UsersTableProps) {
  const handleUpdateStatus = async (id: string, status: UserStatus) => {
    // console.log(status);
    try {
      const { data } = await userService.updateUserStatus(id, status);
    //   console.log(data);
      if (data?.data) {
        toast.success("Successfully Updated Status");
      }
      reload()
    } catch (error) {
        toast.error(error instanceof Error?error.message:"Something Went wrong")
    }
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Users ({users.length})</CardTitle>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Verified</TableHead>
                <TableHead>Joined</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={user.image ?? ""} />
                        <AvatarFallback>
                          {user.name.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>

                      <span className="font-medium">{user.name}</span>
                    </div>
                  </TableCell>

                  <TableCell>{user.email}</TableCell>

                  <TableCell>
                    <Badge variant="secondary">{user.role}</Badge>
                  </TableCell>

                  <TableCell>
                    <Select
                      value={user.status}
                      onValueChange={(value: UserStatus) => {
                        // console.log(user.id, value);
                        handleUpdateStatus(user.id, value);
                      }}
                    >
                      <SelectTrigger className="w-[140px]">
                        <SelectValue />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value={UserStatus.ACTIVE}>
                          ACTIVE
                        </SelectItem>
                        <SelectItem value={UserStatus.SUSPENDED}>
                          SUSPENDED
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>

                  <TableCell>{user.emailVerified ? "Yes" : "No"}</TableCell>

                  <TableCell>
                    {new Date(user.createdAt).toLocaleDateString("en-GB")}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Update dialog will go here in the next step */}
    </>
  );
}
