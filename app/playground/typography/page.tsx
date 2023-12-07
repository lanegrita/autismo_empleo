import {
  Para,
  ParaL,
  Subtitle,
  SubtitleS,
  SuperTitle,
  SuperTitleL,
  SuperTitleXL,
  Title,
  TitleL,
  TitleS,
  TitleXL,
  TitleXXL,
} from "@/app/components/ui/typography/Typography";
import React from "react";

const page = () => {
  return (
    <div className="mx-5 mb-12 flex gap-6">
      <div className="flex-1 ">
        <SuperTitleXL tag="h1" fontWeight="medium" underline>
          Super Title XL
        </SuperTitleXL>
        <SuperTitleL tag="h2" color="blue" underline>
          Super Title L
        </SuperTitleL>
        <SuperTitle tag="h3"> Super Title</SuperTitle>
        <TitleXXL tag="h4">Title XXL</TitleXXL>
        <TitleXL tag="h5">Title XL</TitleXL>
        <TitleL tag="h6">Title L</TitleL>
        <Title tag="h6">Title</Title>
        <TitleS tag="h6">Title Small</TitleS>
        <ParaL tag="p">Para Large</ParaL>
        <Para tag="p">Para Default </Para>
        <Subtitle tag="p">Subtitle Default</Subtitle>
        <SubtitleS tag="p">Subtite Small</SubtitleS>
      </div>
      <div className="flex-1 bg-[#1a9eda]">
        <SuperTitleXL tag="h1" fontWeight="medium" underline>
          Super Title XL
        </SuperTitleXL>
        <SuperTitleL tag="h2" color="white" underline>
          Super Title L
        </SuperTitleL>
        <SuperTitle tag="h3"> Super Title</SuperTitle>
        <TitleXXL tag="h4">Title XXL</TitleXXL>
        <TitleXL tag="h5">Title XL</TitleXL>
        <TitleL tag="h6">Title L</TitleL>
        <Title tag="h6">Title</Title>
        <TitleS tag="h6">Title Small</TitleS>
        <ParaL tag="p">Para Large</ParaL>
        <Para tag="p">Para Default </Para>
        <Subtitle tag="p">Subtitle Default</Subtitle>
        <SubtitleS tag="p">Subtite Small</SubtitleS>
      </div>
    </div>
  );
};

export default page;
