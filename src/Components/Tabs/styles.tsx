import styled from "styled-components";

export const TabsContainer = styled.section``;

export const ListContainer = styled.ul`
  display: flex;
  list-style: none;
`;

export const Tabs = styled("li")<{ check: boolean }>`
  display: flex;
  align-items: center;
  padding: 0 20px;
  cursor: pointer;
  color: ${({ check }) => (check ? "#038C73" : "#000")};
  border-bottom: ${({ check }) => (check ? "2px solid #038C73" : "none")};
`;

export const Content = styled.div`
  padding: 0 20px;
  p {
    padding: 0 20px;
  }
`;
