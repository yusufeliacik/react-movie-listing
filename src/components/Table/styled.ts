import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;

  thead {
    tr {
      font-size: 20px;
      th {
        padding: 10px;
      }
      border-bottom: 1px solid;
    }
  }
  tbody {
    td {
      padding: 10px;
    }
  }
  tbody {
    tr:hover {
      box-shadow: 0 0 10px blue;
      cursor: pointer;
    }
  }
`;
