"use client";
import React from "react";
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
import { Button } from "@/components/ui/button";
import Text from "@/app/components/ui/typography/Typography";
import Image from "next/image";
import ImageComponent from "@/app/components/ui/ImageComponent/ImageComponent";

interface ModalProps {
  image?: string;
  variant?: "defaul";
}

const ModalComponent = ({ image }: ModalProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        {/* Content Container */}
        <div className="flex">
          {/* Image Container */}
          {image && (
            <ImageComponent
              src={image}
              alt="componentImage"
              width={400}
              height={368}
              maxWidth="400px"
              maxHeight="368px"
            />
          )}
          {/* Right Container */}
          <div className="pt-12 pr-12 ">
            {/* Cross Icon */}
            <div></div>
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
