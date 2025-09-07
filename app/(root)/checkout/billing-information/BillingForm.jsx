"use client";
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import Button from "@/components/shared/Button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const BillingForm = () => {
  const [billingInfo, setBillingInfo] = useState({
    fullName: "",
    mobileNumber: "",
    district: "",
    address: "",
  });

  const handleChange = (e) => {
    setBillingInfo({
      ...billingInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(JSON.stringify(billingInfo));
  };

  return (
    <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
      <Label>
        <span className="font-semibold capitalize">
          Full Name / আপনার সম্পূর্ণ নাম
        </span>
        <Input
          name="fullName"
          placeholder="Enter Your Full Name"
          value={billingInfo.fullName}
          onChange={handleChange}
        />
      </Label>
      <Label>
        <span className="font-semibold capitalize">
          Mobile Number / মোবাইল নম্বর
        </span>

        <Input
          name="mobileNumber"
          value={billingInfo.mobileNumber}
          onChange={handleChange}
          placeholder="Enter Your Mobile Number"
          type="number"
        />
      </Label>
      <Label>
        <span className="font-semibold capitalize">Select District / জেলা</span>
        <Input
          name="district"
          value={billingInfo.district}
          onChange={handleChange}
          placeholder="Select Your District"
        />
      </Label>
      <Label>
        <span className="font-semibold capitalize">Address / ঠিকানা</span>
        <Input
          name="address"
          value={billingInfo.address}
          onChange={handleChange}
          placeholder="Enter Your Address"
        />
      </Label>

      <Button
        variant="primary"
        className="font-semibold mt-4 rounded-md flex items-center justify-center gap-x-4"
      >
        Confirm & Order Now
        <ArrowRight />
      </Button>
    </form>
  );
};

export default BillingForm;
