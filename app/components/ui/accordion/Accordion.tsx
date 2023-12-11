"use client";
import { ReactSVG } from "react-svg";
import Text from "../typography/Typography";
import styles from "./Accordion.module.css";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface SimpleAccordionItemProps {
  heading: string;
  description: string;
}
interface SimpleAccordionProps {
  items: SimpleAccordionItemProps[];
}

const SimpleAccordionItem = ({
  heading,
  description
}: SimpleAccordionItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={false}
        className={styles.accordion_header}
        onClick={() => setOpen((prev) => !prev)}
      >
        <Text color={open ? "blue" : "default"} tag="h4" variant="title-s">
          {heading}
        </Text>
        <ReactSVG
          className={cn(
            styles.accordion_icon,
            open && styles.accordion_icon_rotate
          )}
          src="/images/icons/arrow-up.svg"
        />
      </motion.header>
      <AnimatePresence initial={false}>
        {open && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <Text
              tag="p"
              variant="para"
              className={cn(
                styles.accordion_description,
                open && styles.accordion_open
              )}
            >
              {description}
            </Text>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

const SimpleAccordion = ({ items }: SimpleAccordionProps) => {
  return (
    <div>
      {items.map((item, index) => (
        <SimpleAccordionItem
          key={index}
          heading={item.heading}
          description={item.description}
        />
      ))}
    </div>
  );
};

export { SimpleAccordion };
