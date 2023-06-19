import { styled } from "styled-components";

export const MasterContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
`;
export const Row = styled.section`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-wrap: wrap;
  gap: 20px;
`;
export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
