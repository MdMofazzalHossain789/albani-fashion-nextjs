import MainSection from "@/components/shared/MainSection";
import React from "react";
import Title from "../Title";
import Description from "../Description";

const description = `About Believer's Sign
One of the largest Islamic Lifestyle brands in Bangladesh.

Since April 2019, we have been operating business on the F-commerce platform.

We have 11 sales centers in Dhaka, Rajshahi, Chattogram, Sylhet, Barishal, Narayanganj, Brahmanbaria, and Madaripur.

We aim to spread the message of peace (Islam) worldwide by dawah clothing and other goods.`;

const page = () => {
  return (
    <div>
      <MainSection>
        <Title>About Us</Title>
        <Description>{description}</Description>
      </MainSection>
    </div>
  );
};

export default page;
