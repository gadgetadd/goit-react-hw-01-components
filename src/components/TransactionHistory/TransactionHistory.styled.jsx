import styled from '@emotion/styled';
import { getColor } from 'utils';

export const TransactionTable = styled.table`
  width: 500px;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background-color: white;
  border-radius: 10px;
  border-collapse: collapse;
  border: 1px solid rgba(0, 0, 0, 0.2);
  overflow: hidden;

  thead {
    background-color: ${getColor};
  }
  tr:nth-of-type(even) {
    background-color: ${getColor};
  }
  td {
    border: 1px solid rgba(0, 0, 0, 0.2);
    text-align: center;
    padding: 10px;
  }
`;

export const TableHeader = styled.th`
  border: 1px solid rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  padding: 15px;
`;
