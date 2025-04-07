import styled from "styled-components";

/* MyHeader.jsx */
export const MyHeaderContainer = styled.div`
  display: flex;
  width: 200px;
  justify-content: left;
  align-items: center;
  gap: 15px;
  flex-shrink: 0;
  margin: 20px 0 0 60px;
`;
export const Back = styled.img`
  cursor: pointer;
`;
export const PageIcon = styled.img`
  width: 20px;
  height: 20px;
`;
export const PageName = styled.div`
  margin-left: -5px;
  color: ${({ theme }) => theme.colors.gray5};
  font-size: 17px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`;

/* MyContainer */
export const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
`;

export const MyContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-bottom: 20px;
`;

export const EditBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 30px;
  height: 450px;
`;

export const UsernameTitle = styled.div`
  color: ${({ theme }) => theme.colors.gray4};
  font-size: 17px;
  font-weight: 700;
  align-self: flex-start;
  text-align: left;
`;

export const UsernameCurrentBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-radius: 25px;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  background: white;
  color: ${({ theme }) => theme.colors.gray5};
  font-size: 16px;
  margin-bottom: 24px;
`;

export const UsernameInputBox = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 20px;
  border-radius: 25px;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  background: white;
  color: ${({ theme }) => theme.colors.gray5};
  font-size: 16px;
  font-weight: 400;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray3};
  }
`;

export const ValidationMessage = styled.div<{ isError: boolean }>`
  text-align: right;
  font-size: 12px;
  margin-top: -5px;
  margin-left: 8px;
  color: ${(props) => (props.isError ? "#DB7575" : "#73C56A")};
`;

export const ButtonSection = styled.div``;

// export const Blocks = styled.div`
//   margin: 36px 10px 0 0;
//   display: inline-block;
//   padding: 8px 16px;
//   text-align: center;
//   align-items: center;
//   border-radius: 23px;
//   border: 1px solid var(--Gray2, #e0e0e0);
//   background: #fff;
//   color: var(--Gray5, #2e302d);
//   font-family: Pretendard;
//   font-size: 20px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: normal;
//   letter-spacing: -0.8px;
//   width: fit-content;
// `;

// export const BolckImg = styled.img`
//   margin-right: 10px;
// `;

// export const SaveBox = styled.div`
//   cursor: pointer;
// `;

// export const ContactBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: 232px;
//   @media (width<440px) {
//     width: 100%;
//   }
//   flex-shrink: 0;
//   border-radius: 8px;
//   background: var(--Gray1, #f1f1f1);
// `;

// export const Username_t = styled.div`
//   color: ${({ theme }) => theme.colors.gray4};
//   font-size: 20px;
//   font-style: normal;
//   font-weight: 700;
//   line-height: normal;
//   letter-spacing: -0.8px;
// `;

// export const Username_current = styled.div`
//   width: 353px;
//   height: 51px;
//   flex-shrink: 0;
//   display: inline-flex;
//   padding-left: 15px;
//   justify-content: left;
//   align-items: center;
//   gap: 10px;
//   border-radius: 23px;
//   border: 1px solid ${({ theme }) => theme.colors.gray2};
//   background: #fff;
//   color: ${({ theme }) => theme.colors.gray4};
//   font-size: 20px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: normal;
//   letter-spacing: -0.8px;
// `;

// export const Username_new = styled.input`
//   outline: none;
//   display: inline-flex;
//   margin: 16px 0 5px 0;
//   min-width: 30px;
//   max-width: 85px;
//   padding: 8px 16px;
//   justify-content: center;
//   align-items: center;
//   gap: 10px;
//   border-radius: 23px;
//   border: 1px solid #e0e0e0;
//   background: #fff;
//   color: ${({ theme }) => theme.colors.gray5};
//   font-size: 20px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: normal;
//   letter-spacing: -0.8px;
// `;

// export const DuplicationMessage = styled.div`
//   margin-left: 4px;
//   color: ${({ theme }) => theme.colors.Error};
//   font-size: 12px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: normal;
//   letter-spacing: -0.48px;
// `;

/* MyTheme.jsx */
export const ThemeMain = styled.form``;

export const ThemeBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 35px 0 0 40px;
`;
export const SaveBox_Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px auto 100px auto;
`;

export const ThemeImg = styled.img`
  width: 134px;
`;
export const ThemeTextBox = styled.div`
  margin-top: 16px;
  display: inline-flex;
  gap: 24px;
`;
export const ThemeText = styled.div`
  display: inline-flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 34px;
  border: 1px solid var(--Gray2, #e0e0e0);
  background: var(--Gray1, #f1f1f1);
  color: #000;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.68px;
`;
export const ThemeText_img = styled.img``;
export const ThemeSelectBtn_img = styled.img`
  cursor: pointer;
`;
export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #e0e0e0;
  margin: 30px auto 0;
`;

/* MyShoppinglist.jsx */
export const ShoppinglistMain = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 30px 20px;
  width: 100%;
  max-height: 58vh;
  overflow-y: auto;
`;

export const CardContainer = styled.div`
  width: calc(50% - 20px);
  height: 200px;
  display: flex;
  flex-direction: column;
  margin-left: 7px;
  margin-top: 10px;
`;

export const ImgContainer = styled.div`
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 108px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const MarketItemImg = styled.img`
  height: 90%;
`;

export const ItemNameContainer = styled.div`
  display: flex;
  width: fit-content;
  height: 24px;
  padding: 2px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 34px;
  border: 1px solid #e0e0e0;
  background: #fff;
  margin-bottom: 8px;
`;

export const ItemPointContainer = styled.div`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  height: 14px;
  padding: 2px 8px;
  justify-content: center;
  border-radius: 34px;
  border: 1px solid #e0e0e0;
  background: #fff;
`;

export const ItemName = styled.span`
  margin: 0;
  color: #2e302d;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;

export const Point = styled.span`
  color: #417e59;
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  color: var(--Primary-color, #417e59);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`;

/* MyContact.jsx */
export const ContactText = styled.h2`
  margin-top: 250px;
  color: ${({ theme }) => theme.colors.gray5};
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.8px;
`;
export const SNSBox = styled.div`
  width: 250px;
  height: 100px;
  margin: 20px auto;
  padding: 8px;
  gap: 10px;
  border-radius: 23px;
  border: 2px solid ${({ theme }) => theme.colors.primaryColor};
  background: #fff;
  color: ${({ theme }) => theme.colors.gray4};
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 200%;
  letter-spacing: -0.8px;

  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.14);
  cursor: pointer;
`;
export const Bold = styled.span`
  color: ${({ theme }) => theme.colors.gray5};
  font-weight: 700;
`;

/* MyLogout.jsx */
export const Logout_text = styled.h2`
  margin-bottom: 30px;
  color: var(--Gray5, #2e302d);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.8px;
`;

/* MyQuit.jsx */
export const Quit_text = styled.h2`
  margin-bottom: 5px;
  color: var(--Gray5, #2e302d);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.8px;
`;
export const Quit_Warning = styled.p`
  margin-bottom: 20px;
  color: var(--Negative-Error-Cancel, #f66466);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;
`;
