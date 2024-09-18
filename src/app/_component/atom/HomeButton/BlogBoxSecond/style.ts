import styled from '@emotion/styled';

export const BlogBoxContainer = styled.div`
  display: flex;
  width: 100%;
  min-width: 590px;
  height: 323px;
  padding: 36px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 20px;
  background: #e8f6ff;
  background-image: url('/assets/ico/ico-right-top-blog.svg');
  background-size: contain;
  background-position: 300px 30px;
  background-repeat: no-repeat;
`;

export const IntroTitle = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 300;
  line-height: 32px;
`;

export const BlogText = styled.div`
  color: #000;
  font-family: Montserrat;
  font-size: 42px;
  font-style: normal;
  font-weight: 600;
`;
