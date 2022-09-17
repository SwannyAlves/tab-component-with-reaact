import { useState } from "react";
import * as S from "./styles";

export const Tabs = () => {
  const [tab, setTab] = useState(0);
  const [checked, setChecked] = useState(tab);

  const handleTabChange = (index: number) => {
    setTab(index);
    setChecked(index);
  };

  return (
    <S.TabsContainer>
      <S.ListContainer>
        <S.Tabs check={checked === 0} onClick={() => handleTabChange(0)}>
          Guia 1
        </S.Tabs>
        <S.Tabs check={checked === 1} onClick={() => handleTabChange(1)}>
          Guia 2
        </S.Tabs>
        <S.Tabs check={checked === 2} onClick={() => handleTabChange(2)}>
          Guia 3
        </S.Tabs>
        <S.Tabs check={checked === 3} onClick={() => handleTabChange(3)}>
          Guia 4
        </S.Tabs>
      </S.ListContainer>
      <S.Content>
        {tab === 0 && <p>Cliquei na guia 1</p>}
        {tab === 1 && <p>Cliquei na guia 2</p>}
        {tab === 2 && <p>Cliquei na guia 3</p>}
        {tab === 3 && <p>Cliquei na guia 4</p>}
      </S.Content>
    </S.TabsContainer>
  );
};
