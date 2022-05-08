import { FC } from "react";
import { InputStyled, SelectStyled } from "./styled";

type Props = {
  searchValue: string;
  setSearch: (value: string) => void;
  yearValue: string;
  setYear: (value: string) => void;
  typeOptions: string[];
  typeValue: string;
  setType: (value: string) => void;
};

export const Filter: FC<Props> = ({
  setSearch,
  searchValue,
  yearValue,
  setYear,
  typeOptions,
  typeValue,
  setType,
}) => {
  return (
    <div className="d-flex justify-content-between mb-4">
      <InputStyled
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
        value={searchValue}
      />
      <InputStyled
        placeholder="Year"
        onChange={(e) => setYear(e.target.value)}
        value={yearValue}
        maxLength={4}
      />
      <SelectStyled onChange={(e) => setType(e.target.value)} value={typeValue}>
        {typeOptions.map((item, index) => {
          return (
            <option value={item} key={index}>
              {item}
            </option>
          );
        })}
      </SelectStyled>
    </div>
  );
};
