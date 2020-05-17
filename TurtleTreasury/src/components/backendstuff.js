import React from "react";
import logo from "./logo.svg";
import "./App.css";

/* hedera.js */
const {
  Client,
  ConsensusSubmitMessageTransaction,
  ConsensusTopicId,
  ConsensusTopicCreateTransaction,
  MirrorClient,
  MirrorConsensusTopicQuery,
  Ed25519PrivateKey,
  AccountCreateTransaction,
  Hbar,
  AccountBalanceQuery,
  AccountInfoQuery,
  CryptoTransferTransaction,
} = require("@hashgraph/sdk");

const operatorPrivateKey =
  "302e020100300506032b6570042204203c8213c74466cfc91276f9a8649932936a929490b27ac27085b2f515ed701547";
const operatorAccount = "0.0.46239";
const client = Client.forTestnet();
client.setOperator(operatorAccount, operatorPrivateKey);

async function AccountBalanceQ() {
  if (operatorPrivateKey == null || operatorAccount == null) {
    throw new Error(
      "environment variables OPERATOR_KEY and OPERATOR_ID must be present"
    );
  }

  const balance = await new AccountBalanceQuery()
    .setAccountId(operatorAccount)
    .execute(client);

  alert(`${operatorAccount} balance = ${balance.asTinybar()}`);
}

async function AccountInfoQ() {
  if (operatorPrivateKey == null || operatorAccount == null) {
    throw new Error(
      "environment variables OPERATOR_KEY and OPERATOR_ID must be present"
    );
  }

  const info = await new AccountInfoQuery()
    .setAccountId(operatorAccount)
    .execute(client);

  alert(`${operatorAccount} info = ${JSON.stringify(info, null, 4)}`);
}

async function CreateUser() {
  if (operatorPrivateKey == null || operatorAccount == null) {
    throw new Error(
      "environment variables OPERATOR_KEY and OPERATOR_ID must be present"
    );
  }
  const privateKey = await Ed25519PrivateKey.generate();

  alert(`private = ${privateKey}`);
  alert(`public = ${privateKey.publicKey}`);

  const transactionId = await new AccountCreateTransaction()
    .setKey(privateKey.publicKey)
    .setMaxTransactionFee(new Hbar(1))
    .setInitialBalance(0)
    .execute(client);

  const transactionReceipt = await transactionId.getReceipt(client);

  alert(`receipt = ${transactionReceipt}`);

  const newAccountId = transactionReceipt.getAccountId();

  console.log(`accountId = ${newAccountId}`);
}

async function NewTopic() {
  const tx = await new ConsensusTopicCreateTransaction().execute(client);
  alert(`tx: ${tx}`);

  const receipt = await tx.getReceipt(client);
  const newTopicId = receipt.getTopicId();
  alert(`new HCS topic ID: ${newTopicId}`);
}

async function MultiPartyTransfer() {
  const transactionId = await new CryptoTransferTransaction()
    .addSender(operatorAccount, new Hbar(2)) // define total amount of hbar to send
    .addRecipient(operatorAccount, new Hbar(1)) // add recipient, and amount of hbar
    .addRecipient(operatorAccount, new Hbar(1)) // add recipient, and amount of hbar
    .execute(client);

  const receipt = await transactionId.getRecord(client);
  alert(`receipt ${JSON.stringify(receipt)}\n`);
}

async function SingleTransfer(ToID, Amount) {
  const transactionId = await new CryptoTransferTransaction()
    .addSender(operatorAccount, new Hbar(Amount))
    .addRecipient(ToID, new Hbar(Amount))
    .execute(client);

  const receipt = await transactionId.getRecord(client);
  alert(`receipt ${JSON.stringify(receipt)}\n`);
}

function Backend() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This works so far!</p>
        <a
          className="App-link"
          href="https://github.com/iammosespaulr/HackTheChain"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Source
        </a>
        <a href="#" onClick={AccountBalanceQ}>
          {" "}
          Click me to know Account Balance
        </a>
        <a href="#" onClick={AccountInfoQ}>
          {" "}
          Click me to know Account Info
        </a>
        <a href="#" onClick={CreateUser}>
          {" "}
          Click me to Create An User
        </a>
        <a href="#" onClick={NewTopic}>
          {" "}
          Click me to Create A New Topic
        </a>
      </header>
    </div>
  );
}

export default Backend;