"use client";
import Text from "@/app/components/ui/typography/Typography";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { ReactSVG } from "react-svg";
import Input from "../../form/input/Input";
import Button from "../button/Button";

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
  openModal: boolean;
  setOpenModal: (param1: boolean) => void;
  button1OnClick?: () => void;
  button2OnClick?: () => void;
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
  openModal,
  setOpenModal,
  button1OnClick,
  button2OnClick,
}: ModalProps) => {
  const crossIconColor = variant === "default" ? "#888d8e" : "white";
  const topIconColor = error
    ? "#ed3e34"
    : variant === "default"
    ? "#1a9eda"
    : "white";
  return (
    <AlertDialog onOpenChange={() => setOpenModal(true)} open={openModal}>
      <AlertDialogTrigger asChild></AlertDialogTrigger>
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
                  <Input
                    placeholder="email"
                    type="email"
                    variant="simple"
                    color={variant}
                  />
                  <Input
                    placeholder="Password"
                    type="password"
                    variant="simple"
                    color={variant}
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
                    onClick={button1OnClick}
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
                    onClick={button2OnClick}
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
