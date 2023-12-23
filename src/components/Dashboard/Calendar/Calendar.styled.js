import { createGlobalStyle } from 'styled-components';

export const CalendarGlobalStyles = createGlobalStyle`
  .MuiPaper-root.MuiMenu-paper {
    background-color: #0F0F0F;
    border-radius: 12px;
    width: 212px;
    height: 144px;
    overflow-y: scroll;
    scrollbar-width: none;
    box-shadow: 0px 4px 14px 0px  rgba(227, 255, 168, 0.2);

    &::-webkit-scrollbar { 
    width: 0;
  }
}
  .MuiList-root {
     padding-top: 10px;
     padding-bottom: 10px;
  }

   .MuiMenu-list {
    background-color: #0F0F0F;
  }
`;
