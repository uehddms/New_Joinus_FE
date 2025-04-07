import styled from "styled-components";
export const Wrapper = styled.header`
  width: 100%;
  margin-bottom: 20px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  gap: 20px;

  img {
    width: 24px;
    height: 24px;
  }
  p {
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.96px;
    color: ${({ theme }) => theme.colors.gray5};
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10%;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.gray2};

  position: relative;
  z-index: 1;

  padding-top: calc(80% * 3 / 2 + 20px);

  .card-frame {
    width: 80%;
    display: flex;
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);

    z-index: 5;
    aspect-ratio: 2/3;

    border-radius: 10%;
    border-width: 2px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.gray2};
  }

  .user-image {
    width: 80%;
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);

    z-index: 3;

    border-radius: 10%;
  }
`;
export const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 0.5rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;

  img:nth-of-type(1) {
    width: 24px;
    height: 18px;
  }

  img:nth-of-type(2) {
    width: 24px;
    height: 24px;
  }
`;

export const PointContainer = styled.div`
  display: flex;
  align-items: center;
  p {
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

export const Title = styled.p<{ isExpanded: boolean }>`
  width: 80%;
  display: -webkit-box;
  -webkit-line-clamp: ${({ isExpanded }) => (isExpanded ? "unset" : "1")};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  padding: 0.5rem 0 0;

  color: ${({ theme }) => theme.colors.gray5};
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  letter-spacing: -0.56px;

  text-align: left;
`;

export const Button = styled.button`
  width: 80%;
  color: ${({ theme }) => theme.colors.gray4};
  text-align: left;
  padding: 0.5rem 0;
`;

// Comment Box

export const InputComment = styled.input`
  width: 100%;

  border-radius: 24px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.gray2};

  padding: 0.5rem;

  color: ${({ theme }) => theme.colors.gray4};
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  letter-spacing: -0.56px;
`;

export const AddedComment = styled.div`
  width: 100%;

  padding: 0.5rem;
  margin: 0.5rem 0;

  background-color: ${({ theme }) => theme.colors.gray1};
  border-radius: 24px;
  color: ${({ theme }) => theme.colors.gray4};
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  letter-spacing: -0.56px;

  text-align: start;
`;
