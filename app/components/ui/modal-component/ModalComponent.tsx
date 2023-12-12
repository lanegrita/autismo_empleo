"use client";
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Text from "@/app/components/ui/typography/Typography";
import Image from "next/image";
import ImageComponent from "@/app/components/ui/ImageComponent/ImageComponent";
import Button from "../button/Button";
import { cn } from "@/lib/utils";
import { ReactSVG } from "react-svg";
import { error } from "console";
import Input from "../../form/input/Input";

interface ModalProps {
  title?: string;
  description?: string;
  image?: string;
  variant?: "default" | "azul";
  topIcon?: string;
  topIconText?: string;
  form?: boolean;
  errorMessage?: string;
  error?: boolean;
  button1Title?: string;
  button1Varient?:
    | "primary"
    | "secondary"
    | "outline"
    | "simple"
    | "primary-azul"
    | "secondary-azul"
    | "outline-azul"
    | "simple-azul";
  button1Icon?: string;
  button2Title?: string;
  button2Varient?:
    | "primary"
    | "secondary"
    | "outline"
    | "simple"
    | "primary-azul"
    | "secondary-azul"
    | "outline-azul"
    | "simple-azul";
  button2Icon?: string;
}

const ModalComponent = ({
  title,
  description = "",
  image,
  topIcon = "",
  topIconText,
  variant = "default",
  button1Title,
  button1Varient = "primary",
  button1Icon,
  button2Title,
  button2Icon,
  button2Varient = "primary",
  error,
  errorMessage,
  form,
}: ModalProps) => {
  const [openModal, setOpenModal] = useState(false);
  const crossIconColor = variant === "default" ? "#888d8e" : "white";
  const topIconColor = error
    ? "#ed3e34"
    : variant === "default"
    ? "#1a9eda"
    : "white";
  return (
    <AlertDialog onOpenChange={() => setOpenModal(true)} open={openModal}>
      <AlertDialogTrigger asChild>
        <Button
          onClick={() => setOpenModal(true)}
          variant="primary"
          title="Open Modal"
        />
      </AlertDialogTrigger>
      <AlertDialogContent>
        {/* Content Container */}
        <div
          className={cn(
            image && "flex flex-col lg:gap-27 lg:flex-row",
            variant === "azul" && "bg-azulAe"
          )}
        >
          {/* Image Container */}
          {image && (
            <div className="relative w-full h-[200px] lg:w-[400px] lg:min-w-[400px] lg:h-full">
              <Image
                src={image}
                fill
                alt="modal image"
                style={{ objectFit: "cover" }}
              />
            </div>
          )}
          {/* Right Container */}
          <div
            className={cn(
              "p-10 pb-20  ",
              "md:pt-12 md:pr-12 md:pb-27",
              !image && " pl-10 md:pl-27"
            )}
          >
            {/* Cross Icon */}
            <div className="flex justify-end">
              <ReactSVG
                onClick={() => setOpenModal(false)}
                src={"/images/icons/cross.svg"}
                width={20}
                height={20}
                className="cursor-pointer "
                beforeInjection={(svg) => {
                  // Modify all path elements' fill color
                  const paths = svg.querySelectorAll("path,line,circle,rect");
                  paths.forEach((path) => {
                    path.setAttribute("stroke", crossIconColor);
                  });
                }}
              />
            </div>
            <div className="lg:mr-28">
              {/* Text Container */}
              <div className="flex flex-col gap-8 mt-15">
                {/* Top Icon and Title */}
                {topIcon && topIconText && (
                  <div className="flex gap-5 items-center">
                    <ReactSVG
                      src={topIcon}
                      width={26}
                      height={26}
                      beforeInjection={(svg) => {
                        // Modify all path elements' fill color
                        const paths = svg.querySelectorAll(
                          "path,line,circle,rect"
                        );
                        paths.forEach((path) => {
                          path.setAttribute("fill", topIconColor);
                        });
                      }}
                    />
                    <Text
                      tag="p"
                      variant="para"
                      color={
                        error
                          ? "error"
                          : variant === "default"
                          ? "blue"
                          : "white"
                      }
                    >
                      {topIconText}
                    </Text>
                  </div>
                )}
                {/* Top Icon And Title Ends */}

                {/* Error Message */}
                {error && (
                  <Text
                    tag="h5"
                    variant="title"
                    color="error"
                    className="max-w-sm"
                  >
                    {errorMessage}
                  </Text>
                )}

                {/* Main Title */}
                <Text
                  tag="h4"
                  variant="title"
                  color={variant === "default" ? "blue" : "white"}
                >
                  {title}
                </Text>
                <Text
                  color={variant === "default" ? "default" : "white"}
                  tag="p"
                  variant="para"
                  className="sm:max-w-[420px]"
                >
                  <div dangerouslySetInnerHTML={{ __html: description }}></div>
                </Text>
              </div>
              {/* Form */}
              {form && (
                <div className="flex flex-col gap-21 mt-30 mb-10">
                  <Input placeholder="email" type="email" variant="simple" />
                  <Input
                    placeholder="Password"
                    type="password"
                    variant="simple"
                  />
                </div>
              )}
              {/* Button Container */}
              <div className="flex gap-8 mt-20">
                {/* Button 1 */}
                {button1Title && (
                  <Button
                    variant={
                      variant === "azul"
                        ? (button1Varient = "primary-azul")
                        : button1Varient
                    }
                    title={button1Title}
                    icon={button1Icon}
                    direction="right"
                  />
                )}
                {/* Button 2 */}
                {button2Title && (
                  <Button
                    variant={
                      variant === "azul"
                        ? (button2Varient = "simple-azul")
                        : button2Varient
                    }
                    icon={button2Icon}
                    direction="right"
                    title={button2Title}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ModalComponent;

{
  /* <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter> */
}
