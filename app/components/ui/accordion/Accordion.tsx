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

export interface ListAccordionItemProps {
  iconUrl: string;
  title: string;
  items: {
    id: string;
    title: string;
  }[];
}

interface ListAccordionProps {
  items: ListAccordionItemProps[];
}

const ListAccordionItem = ({
  iconUrl,
  title,
  items
}: ListAccordionItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={false}
        className={styles.list_accordion_header}
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className={styles.list_accordion_header_left}>
          <ReactSVG className={cn(styles.list_accordion_icon)} src={iconUrl} />
          <Text tag="h4" variant="title-s">
            {title}
          </Text>
        </div>
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
            {items.map((item, index) => (
              <div key={index} className={styles.list_accordion_sub_item}>
                <ReactSVG
                  className={cn(styles.list_accordion_sub_item_icon)}
                  src={iconUrl}
                />
                <Text tag="p" variant="para-l" color="blue">
                  {item.title}
                </Text>
              </div>
            ))}
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

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
              <p dangerouslySetInnerHTML={{ __html: description }} />
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

const ListAccordion = ({ items }: ListAccordionProps) => {
  return (
    <div>
      {items.map((item, index) => (
        <ListAccordionItem
          key={index}
          iconUrl={item.iconUrl}
          title={item.title}
          items={item.items}
        />
      ))}
    </div>
  );
};

export interface NavigationAccordionItemProps {
  iconUrl: string;
  title: string;
  items: {
    id: string;
    title: string;
  }[];
}

interface NavigationAccordionProps {
  items: NavigationAccordionItemProps[];
}

const NavigationAccordionItem = ({
  iconUrl,
  title,
  items
}: ListAccordionItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={false}
        className={styles.navigation_accordion_header}
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className={styles.navigation_accordion_header_left}>
          <ReactSVG
            className={cn(styles.navigation_accordion_icon)}
            src={iconUrl}
          />
          <Text tag="h4" variant="title-s" color={open ? "gray" : "default"}>
            {title}
          </Text>
        </div>
        <ReactSVG
          className={cn(
            styles.navigation_accordion_icon_arrow,
            open && styles.navigation_accordion_icon_arrow_rotate
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
            {items.map((item, index) => (
              <div key={index} className={styles.navigation_accordion_sub_item}>
                <Text tag="p" variant="para" color="blue">
                  0{index + 1}
                </Text>
                <Text tag="p" variant="para" color="default">
                  {item.title}
                </Text>
              </div>
            ))}
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

const NavigationAccordion = ({ items }: NavigationAccordionProps) => {
  return (
    <div>
      {items.map((item, index) => (
        <NavigationAccordionItem
          key={index}
          iconUrl={item.iconUrl}
          title={item.title}
          items={item.items}
        />
      ))}
    </div>
  );
};

export { SimpleAccordion, ListAccordion, NavigationAccordion };
