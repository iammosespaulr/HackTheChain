import React from 'react';
import logo from './logo.svg';
import './App.css';

/* hedera.js */
const {
  Client,
  ConsensusSubmitMessageTransaction,
  ConsensusTopicId,
  ConsensusTopicCreateTransaction,
  MirrorClient,
  MirrorConsensusTopicQuery,
  AccountBalanceQuery,
  AccountInfoQuery
} = require("@hashgraph/sdk");

const operatorPrivateKey = "302e020100300506032b6570042204203c8213c74466cfc91276f9a8649932936a929490b27ac27085b2f515ed701547";
const operatorAccount = "0.0.46239";

async function AccountBalanceQ() {

  if (operatorPrivateKey == null || operatorAccount == null) {
      throw new Error("environment variables OPERATOR_KEY and OPERATOR_ID must be present");
  }

  const client = Client.forTestnet();

  client.setOperator(operatorAccount, operatorPrivateKey);

  const balance = await new AccountBalanceQuery()
      .setAccountId(operatorAccount)
      .execute(client);

  alert(`${operatorAccount} balance = ${balance.asTinybar()}`);
}

async function AccountInfoQ() {
  if (operatorPrivateKey == null || operatorAccount == null) {
  throw new Error("environment variables OPERATOR_KEY and OPERATOR_ID must be present");
}

const client = Client.forTestnet();
client.setOperator(operatorAccount, operatorPrivateKey);

const info = await new AccountInfoQuery()
  .setAccountId(operatorAccount)
  .execute(client);

alert(`${operatorAccount} info = ${JSON.stringify(info, null, 4)}`);
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This works so far!
        </p>
        <a
          className="App-link"
          href="https://github.com/iammosespaulr/HackTheChain"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Source
        </a>
        <a href="#" onClick={AccountBalanceQ}> Click me to know Account Balance</a>
        <a href="#" onClick={AccountInfoQ}> Click me to know Account Info</a>
      </header>
    </div>
  );
}

export default App;
