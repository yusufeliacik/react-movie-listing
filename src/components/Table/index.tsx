import { FC, ReactNode } from "react";
import { StyledTable } from "./styled";

type Props = {
  header: Array<String>;
  trComp: ReactNode;
};

export const Table: FC<Props> = ({ header, trComp }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          {header.map((item, index) => {
            return <th key={index}>{item}</th>;
          })}
        </tr>
      </thead>
      <tbody>{trComp}</tbody>
    </StyledTable>
  );
};
