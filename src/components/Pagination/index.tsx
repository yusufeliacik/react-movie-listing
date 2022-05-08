import { FC } from "react";
import {
  PaginationItemButton,
  PaginationStyled,
  PrevNextButton,
} from "./styled";

type Props = {
  totalCount: number;
  currentPage: number;
  setCurrentPage: (value: number) => void;
};

const pageLimit = 5;

export const Pagination: FC<Props> = ({
  totalCount,
  setCurrentPage,
  currentPage,
}) => {
  const pages = Math.round(totalCount / pageLimit);

  const goToNextPage = () => {
    // not yet implemented
    setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    // not yet implemented
    setCurrentPage(currentPage - 1);
  };

  const changePage = (event: any) => {
    // not yet implemented
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  };

  const getPaginationGroup = () => {
    // not yet implemented
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill(0).map((_, idx) => start + idx + 1);
  };

  return (
    <PaginationStyled>
      <PrevNextButton onClick={goToPreviousPage} isDisabled={currentPage === 1}>
        {"<"}
      </PrevNextButton>

      {/* show page numbers */}
      {getPaginationGroup().map(
        (item, index) =>
          item <= pages && (
            <PaginationItemButton
              key={index}
              onClick={changePage}
              isActive={currentPage === item}
            >
              <span>{item}</span>
            </PaginationItemButton>
          )
      )}

      <PrevNextButton onClick={goToNextPage} isDisabled={currentPage >= pages}>
        {">"}
      </PrevNextButton>
    </PaginationStyled>
  );
};
