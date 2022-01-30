import React, { useState } from "react";
import logo from "./logo.svg";
import QRCode from "qrcode.react";
import { getBalance, readCount, setCount } from "./api/UseCaver";
import * as KlipAPI from "./api/UseKlip";
import "./App.css";

const DEFAULT_QR_CODE = "DEFAULT";
function App() {
  const [balance, setBalance] = useState("0");
  const [qrvalue, setQrvalue] = useState(DEFAULT_QR_CODE);
  //readCount();
  //getBalance('0x39c5670875964d511c3bbd1d5d8b789ad871e18d');
  const onClickGetAddress = () => {
    KlipAPI.getAddress(setQrvalue);
  };
  const onClickSetCount = () => {
    KlipAPI.setCount(2000, setQrvalue);
  };
  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={() => {
            onClickGetAddress();
          }}
        >
          주소 가져오기
        </button>
        <button
          onClick={() => {
            onClickSetCount();
          }}
        >
          카운트 값 변경
        </button>
        <br />
        <QRCode value={qrvalue} />
        <p>{balance}</p>
        <br />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
