'use client';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useSearchParams } from 'next/navigation';

type PaginationComponentProps = {
  totalPages: number;
};

export function PaginationComponent({ totalPages }: PaginationComponentProps) {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `?${params.toString()}`;
  };

  const renderPaginationLinks = () => {
    const pageNumbers = [];
    const ellipsis = <PaginationItem key="ellipsis_start" >...</PaginationItem>;

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <PaginationItem key={i}>
            <PaginationLink href={createPageURL(i)} isActive={currentPage === i}>
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    } else {
        if (currentPage <= 4) {
            for (let i = 1; i <= 5; i++) {
                pageNumbers.push(
                <PaginationItem key={i}>
                    <PaginationLink href={createPageURL(i)} isActive={currentPage === i}>
                    {i}
                    </PaginationLink>
                </PaginationItem>
                );
            }
            pageNumbers.push(ellipsis);
            pageNumbers.push(
                <PaginationItem key={totalPages}>
                    <PaginationLink href={createPageURL(totalPages)} isActive={currentPage === totalPages}>
                    {totalPages}
                    </PaginationLink>
                </PaginationItem>
            );
        } else if (currentPage > totalPages - 4) {
            pageNumbers.push(
                <PaginationItem key={1}>
                    <PaginationLink href={createPageURL(1)} isActive={currentPage === 1}>
                    {1}
                    </PaginationLink>
                </PaginationItem>
            );
            pageNumbers.push(ellipsis);
            for (let i = totalPages - 4; i <= totalPages; i++) {
                pageNumbers.push(
                <PaginationItem key={i}>
                    <PaginationLink href={createPageURL(i)} isActive={currentPage === i}>
                    {i}
                    </PaginationLink>
                </PaginationItem>
                );
            }
        } else {
            pageNumbers.push(
                <PaginationItem key={1}>
                    <PaginationLink href={createPageURL(1)} isActive={currentPage === 1}>
                    {1}
                    </PaginationLink>
                </PaginationItem>
            );
            pageNumbers.push(<PaginationItem key="ellipsis_start">...</PaginationItem>);
            for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                pageNumbers.push(
                <PaginationItem key={i}>
                    <PaginationLink href={createPageURL(i)} isActive={currentPage === i}>
                    {i}
                    </PaginationLink>
                </PaginationItem>
                );
            }
            pageNumbers.push(<PaginationItem key="ellipsis_end">...</PaginationItem>);
            pageNumbers.push(
                <PaginationItem key={totalPages}>
                    <PaginationLink href={createPageURL(totalPages)} isActive={currentPage === totalPages}>
                    {totalPages}
                    </PaginationLink>
                </PaginationItem>
            );
        }
    }


    return pageNumbers;
  };


  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={createPageURL(currentPage - 1)}
            aria-disabled={currentPage <= 1}
            tabIndex={currentPage <= 1 ? -1 : undefined}
            className={
              currentPage <= 1 ? "pointer-events-none opacity-50" : undefined
            }
          />
        </PaginationItem>
        {renderPaginationLinks()}
        <PaginationItem>
          <PaginationNext
            href={createPageURL(currentPage + 1)}
            aria-disabled={currentPage >= totalPages}
            tabIndex={currentPage >= totalPages ? -1 : undefined}
            className={
              currentPage >= totalPages ? "pointer-events-none opacity-50" : undefined
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}