"use client";

import { Card, CardContent } from "@/components/ui/card";
import { UserRole } from "@/types/user.types";
import { User, Store } from "lucide-react";

type Props = {
  value: UserRole.USER | UserRole.PROVIDER
  onChange: (value: UserRole.USER | UserRole.PROVIDER) => void;
};

export default function RoleSelector({ value, onChange }: Props) {
  return (
    <div className="space-y-3">
      <h3 className="font-medium">Choose Account Type</h3>

      <div className="grid grid-cols-2 gap-4">
        <Card
          onClick={() => onChange(UserRole.USER)}
          className={`cursor-pointer transition border-2 ${
            value === "USER"
              ? "border-primary"
              : "border-transparent hover:border-gray-300"
          }`}
        >
          <CardContent className="flex flex-col items-center justify-center py-6">
            <User className="size-8 mb-2" />
            <h4 className="font-semibold">Customer</h4>
            <p className="text-sm text-muted-foreground text-center">
              Browse and order meals.
            </p>
          </CardContent>
        </Card>

        <Card
          onClick={() => onChange(UserRole.PROVIDER)}
          className={`cursor-pointer transition border-2 ${
            value === "PROVIDER"
              ? "border-primary"
              : "border-transparent hover:border-gray-300"
          }`}
        >
          <CardContent className="flex flex-col items-center justify-center py-6">
            <Store className="size-8 mb-2" />
            <h4 className="font-semibold">Provider</h4>
            <p className="text-sm text-muted-foreground text-center">
              Sell your meals.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}