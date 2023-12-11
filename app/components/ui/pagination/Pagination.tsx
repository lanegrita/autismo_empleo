"use client";
import { useCallback, useEffect, useState } from "react";
import styles from "./Pagination.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  totalPages: number;
  page: number;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  page,
}: PaginationProps) => {
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState<number>(page);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [maxButtonsToShow, setMaxButtonsToShow] = useState<number>(1);
  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: number | string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value.toString());
      window.scrollTo({ top: 0 });
      setCurrentPage(typeof value === "number" ? value : parseInt(value));
      return params.toString();
    },
    [searchParams]
  );

  console.log("Page: ", page);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      router.push(`${pathname}?${createQueryString("page", currentPage + 1)}`);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      router.push(`${pathname}?${createQueryString("page", currentPage - 1)}`);
    }
  };

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth <= 1050) {
        setMaxButtonsToShow(4); // Show 4 buttons at a time
      } else {
        setMaxButtonsToShow(3);
      }
    };

    checkScreenWidth(); // Initial check
    window.addEventListener("resize", checkScreenWidth);

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const renderPageButtons = () => {
    const pageButtons = [];

    if (isMobile) {
      if (currentPage > 1) {
        pageButtons.push(
          <button
            key="1"
            className={styles.paginationButton}
            onClick={() => setCurrentPage(1)}
          >
            1
          </button>
        );

        if (currentPage > 2) {
          pageButtons.push(
            <span key="ellipsis-1" className={styles.paginationEllipsis}>
              ...
            </span>
          );
        }
      }

      pageButtons.push(
        <button
          key={currentPage}
          className={`${styles.paginationButton} ${styles.active}`}
          onClick={() => setCurrentPage(currentPage)}
        >
          {currentPage}
        </button>
      );

      if (currentPage < totalPages) {
        if (currentPage < totalPages - 1) {
          pageButtons.push(
            <span key="ellipsis-2" className={styles.paginationEllipsis}>
              ...
            </span>
          );
        }

        pageButtons.push(
          <button
            key={totalPages}
            className={styles.paginationButton}
            onClick={() => setCurrentPage(totalPages)}
          >
            {totalPages}
          </button>
        );
      }
    } else {
      const halfButtonsToShow = Math.floor(maxButtonsToShow / 2);

      const startPage = Math.max(currentPage - halfButtonsToShow, 1);
      const endPage = Math.min(startPage + maxButtonsToShow - 1, totalPages);

      if (startPage > 1) {
        pageButtons.push(
          <button
            key="1"
            className={styles.paginationButton}
            onClick={() => setCurrentPage(1)}
          >
            1
          </button>
        );

        if (startPage > 2) {
          pageButtons.push(
            <span key="ellipsis-1" className={styles.paginationEllipsis}>
              ...
            </span>
          );
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pageButtons.push(
          <button
            key={i}
            className={`${styles.paginationButton} ${
              i == currentPage ? styles.active : ""
            }`}
            onClick={() =>
              router.push(pathname + "?" + createQueryString("page", Number(i)))
            }
          >
            {i}
          </button>
        );
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pageButtons.push(
            <span key="ellipsis-2" className={styles.paginationEllipsis}>
              ...
            </span>
          );
        }

        pageButtons.push(
          <button
            key={totalPages}
            className={styles.paginationButton}
            onClick={() => setCurrentPage(totalPages)}
          >
            {totalPages}
          </button>
        );
      }
    }

    return pageButtons;
  };

  return (
    <div className={styles.pagination}>
      <button onClick={handlePrevPage} disabled={isFirstPage}>
        {/* Arrow container */}
        <div className={styles.arrowIcon}>
          <Image src={"/images/icons/arrow-blue.svg"} alt="left arrow" fill />
        </div>
      </button>

      <div className={styles.middleButtonWrapper}>{renderPageButtons()}</div>
      <button onClick={handleNextPage} disabled={isLastPage}>
        {/* Arrow container */}
        <div className={styles.arrowIcon}>
          <Image src={"/images/icons/arrow-blue.svg"} alt="right arrow" fill />
        </div>
      </button>
    </div>
  );
};

export default Pagination;
