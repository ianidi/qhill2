import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Popup } from "@yandex/ui/Popup/desktop/bundle";

import {
  Container,
  Head,
  DropdownFilterContainer,
  SearchContainer,
  SearchImageContainer,
  SearchInput,
  FilterImageContainer,
  WidgetContainer,
} from "./ListWidget.styled";
import Select from "../UI/Select";
import Filter from "./Filter";
import FundCard from "../FundCard";

import { ReactComponent as FilterImage } from "../../Asset/Images/filter.svg";
import { ReactComponent as SearchImage } from "../../Asset/Images/search.svg";

const ListWidget = ({ funds }) => {
  const { t, i18n } = useTranslation();

  const filterRef = useRef(null);
  const [filterVisible, setFilterVisible] = useState(false);

  return (
    <Container>
      <Head>
        <SearchContainer>
          <SearchImageContainer>
            <SearchImage />
          </SearchImageContainer>
          <SearchInput
            defaultValue=""
            type="text"
            spellCheck={false}
            autoComplete="off"
            placeholder={t(`Market.ListWidget.SearchPlaceholder`)}
          />
        </SearchContainer>

        <DropdownFilterContainer>
          <Select
            //options={options.brand}
            placeholder="AUM"
            //value={brand}
            name="brand"
            //setValue={(val) => dispatch(setBrand(val))}
          />

          <FilterImageContainer
            ref={filterRef}
            onClick={() => setFilterVisible(!filterVisible)}
          >
            <FilterImage />
          </FilterImageContainer>
          <Popup
            target="anchor"
            anchor={filterRef}
            view="default"
            direction={["bottom-end"]}
            visible={filterVisible}
            onClose={() => setFilterVisible(false)}
            scope="inplace"
            motionless={true}
          >
            <Filter setVisible={setFilterVisible} />
          </Popup>
        </DropdownFilterContainer>
      </Head>
      <WidgetContainer>
        {funds?.map((fund) => (
          <FundCard key={fund.id} {...fund} />
        ))}
      </WidgetContainer>
    </Container>
  );
};

export default ListWidget;
