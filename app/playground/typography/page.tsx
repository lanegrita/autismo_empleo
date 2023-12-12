import Text from "@/app/components/ui/typography/Typography";
import React from "react";

const page = () => {
  return (
    <div className="mx-5 mb-12 flex gap-6 ">
      <div className="flex-1 ">
        <Text color="gray" variant="super-title-xl" tag="h1">
          Sample text
        </Text>

        <Text variant="super-title-l" tag="h1">
          Sample text
        </Text>
        <Text variant="super-title" tag="h1">
          Sample text
        </Text>

        <Text variant="title-xxl" tag="h1">
          Sample text
        </Text>
        <Text variant="title-xl" tag="h1">
          Sample text
        </Text>
        <Text variant="title-l" tag="h1">
          Sample text
        </Text>
        <Text variant="title" tag="h1">
          Sample text
        </Text>
      </div>
    </div>
  );
};

export default page;
