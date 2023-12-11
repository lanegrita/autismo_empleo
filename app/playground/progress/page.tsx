import {
  FormProgressBar,
  ProgressBar
} from "@/app/components/form/progress/Progress";
import Text from "@/app/components/ui/typography/Typography";
import React from "react";

const page = () => {
  return (
    <div className="container mt-10">
      <Text variant="title-l" tag="h2" className="mt-10 mb-5">
        Simple Progress Bar
      </Text>
      <ProgressBar value={10} maxValue={100} />

      <Text variant="title-l" tag="h2" className="mt-10 mb-5">
        Steps Progress Bar
      </Text>
      <div className=" flex flex-col gap-10">
        <FormProgressBar value={1} maxValue={5} />
        <FormProgressBar value={2} maxValue={5} />
        <FormProgressBar value={3} maxValue={5} />
        <FormProgressBar value={4} maxValue={5} />
        <FormProgressBar value={5} maxValue={5} />
      </div>
    </div>
  );
};

export default page;
