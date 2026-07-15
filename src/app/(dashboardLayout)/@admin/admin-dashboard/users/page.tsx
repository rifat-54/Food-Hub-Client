"use client";

import { useEffect, useState } from "react";
import { UsersTable } from "@/components/modules/dashboardComponent/users/UsersTable";
import { userService } from "@/services/user.service";

export default function UserPage() {
  const [users, setUsers] = useState<any>(null);

  const loadUsers = async () => {
    const response = await userService.getAllUsers();

    if (response.data) {
      setUsers(response.data.data);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  if (!users) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Users</h1>
        <p className="text-muted-foreground">
          Manage all registered users.
        </p>
      </div>

      <UsersTable users={users} reload={loadUsers} />
    </div>
  );
}