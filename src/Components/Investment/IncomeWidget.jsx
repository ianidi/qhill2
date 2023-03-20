import React from "react";
import { useTranslation } from "react-i18next";

import {
  Container,
  Head,
  TitleContainer,
  Dot,
  Title,
  TableContainer,
  TableHead,
  TableCol,
  TableBody,
  TableRow,
  TextTotal,
  Total,
} from "./IncomeWidget.styled";
import Numeral from "../UI/Numeral";

const IncomeWidget = () => {
  const { t, i18n } = useTranslation();

  return (
    <Container>
      <Head>
        <TitleContainer>
          <Dot />
          <Title>Monthly income</Title>
        </TitleContainer>
      </Head>

      <TableContainer>
        <TableHead>
          <TableCol />
          <TableCol>Jan</TableCol>
          <TableCol>Feb</TableCol>
          <TableCol>Mar</TableCol>
          <TableCol>Apr</TableCol>
          <TableCol>May</TableCol>
          <TableCol>Jun</TableCol>
          <TableCol>Jul</TableCol>
          <TableCol>Aug</TableCol>
          <TableCol>Sep</TableCol>
          <TableCol>Oct</TableCol>
          <TableCol>Nov</TableCol>
          <TableCol>Dec</TableCol>
          <TableCol>
            <TextTotal>Total</TextTotal>
          </TableCol>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCol>
              <div>2022</div>
            </TableCol>
            <TableCol negative>-48.9%</TableCol>
            <TableCol>-</TableCol>
            <TableCol>-</TableCol>
            <TableCol>-</TableCol>
            <TableCol>-</TableCol>
            <TableCol>-</TableCol>
            <TableCol>-</TableCol>
            <TableCol>-</TableCol>
            <TableCol>-</TableCol>
            <TableCol>-</TableCol>
            <TableCol>-</TableCol>
            <TableCol>-</TableCol>
            <TableCol>
              <Total negative>2.32%</Total>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <div>2021</div>
            </TableCol>
            <TableCol negative>-12.9%</TableCol>
            <TableCol positive>12.51%</TableCol>
            <TableCol positive>8.51%</TableCol>
            <TableCol positive>5.6%</TableCol>
            <TableCol negative>-34.6%</TableCol>
            <TableCol positive>3.25%</TableCol>
            <TableCol negative>-7.65%</TableCol>
            <TableCol positive>70.8%</TableCol>
            <TableCol negative>-1.2%</TableCol>
            <TableCol negative>-2.65%</TableCol>
            <TableCol positive>2.32%</TableCol>
            <TableCol positive>7.84%</TableCol>
            <TableCol>
              <Total positive>23.9%</Total>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <div>2020</div>
            </TableCol>
            <TableCol negative>-7.65%</TableCol>
            <TableCol positive>70.8%</TableCol>
            <TableCol negative>-1.2%</TableCol>
            <TableCol negative>-2.65%</TableCol>
            <TableCol positive>2.32%</TableCol>
            <TableCol positive>7.84%</TableCol>
            <TableCol negative>-12.9%</TableCol>
            <TableCol positive>12.51%</TableCol>
            <TableCol positive>8.51%</TableCol>
            <TableCol positive>5.6%</TableCol>
            <TableCol negative>-34.6%</TableCol>
            <TableCol positive>3.25%</TableCol>
            <TableCol>
              <Total negative>-48.9%</Total>
            </TableCol>
          </TableRow>
          <TableRow />
        </TableBody>
      </TableContainer>
    </Container>
  );
};

export default IncomeWidget;
