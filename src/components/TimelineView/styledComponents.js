import styled from 'styled-components/macro'

export const TimelineContainer = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: space-between;
  align-items: center;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-width: 1110px;
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`

export const Heading = styled.h1`
  color: #171f46;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto';
  line-height: 2.7;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const CCBPHeading = styled.span`
  color: #2b237c;
  font-size: 24px;

  font-family: 'Roboto';

  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
