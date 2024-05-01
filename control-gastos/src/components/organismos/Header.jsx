import styled from "styled-components";
import {DataUser} from "../../index"
import {ContentHeader} from "../../components/atomos/ContentHeader"

export function Header({ stateConfig }) {
  return (
    <ContentHeader>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <DataUser stateConfig={stateConfig} />
      </div>
    </ContentHeader>
  );
}

const Container =styled.div`
  
`