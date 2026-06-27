"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";


export default function DeliveryAddress() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Delivery Address</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <Label>Full Name</Label>
            <Input placeholder="John Doe" />
          </div>

          <div className="space-y-2">
            <Label>Phone Number</Label>
            <Input placeholder="+8801XXXXXXXXX" />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <Label>City</Label>
            <Input placeholder="Dhaka" />
          </div>

          <div className="space-y-2">
            <Label>Area</Label>
            <Input placeholder="Mirpur" />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Street Address</Label>
          <Textarea
            rows={4}
            placeholder="House, Road, Block..."
          />
        </div>

        <div className="space-y-2">
          <Label>Apartment (Optional)</Label>
          <Input placeholder="Flat 4A" />
        </div>

        <div className="space-y-2">
          <Label>Delivery Note (Optional)</Label>
          <Textarea
            rows={3}
            placeholder="Ring the bell, call before delivery..."
          />
        </div>

        <Button className="w-full h-11">
          Place Order
        </Button>
      </CardContent>
    </Card>
  );
}