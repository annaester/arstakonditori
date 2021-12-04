import React from "react";
import styled from "styled-components";

const OmOssBox = styled.article`
  margin: 70px auto;
  width: 1100px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  div {
    width: 500px;
  }

  p {
    padding: 0;
  }

  img {
    width: 500px;
    border-radius: 50px;
  }
`;

const OmOss = () => {
  return (
    <OmOssBox>
      <div>
        <h1>Om oss:</h1>
        <p>
          Hos Årsta Konditori hittar du matbröd, kaffebröd, tårtor och
          konditorivaror som godbitar och bakelser. Allt tillverkat i vårt eget
          bageri.
        </p>

        <p>
          I vårt sortiment finns matbröd, kaffebröd, konditorivaror som godbitar
          och bakelser och olika tårtor.
        </p>

        <p>
          Sortimentet i butiken kan variera så om det är en bestämd tårta du
          vill ha är det säkrast att du beställer den eller kanske prova något
          nytt!
        </p>
        <p>
          Konditoriet har funnits i över ett halvt sekel och vi har bevarat
          inredningen i 50-talsstil. Varmt välkommen till Årsta Konditori!
        </p>
      </div>
      <img src="./pictures/NoahDanny.jpeg" alt="ownerpic" />
    </OmOssBox>
  );
};

export default OmOss;
