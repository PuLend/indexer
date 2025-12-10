# Pulend Indexer

A subgraph indexer for the Pulend lending protocol, built with [The Graph](https://thegraph.com/) and deployed on **[Goldsky](https://goldsky.com/)**.

---

## 🌟 Goldsky Deployment

This subgraph is deployed and hosted on **Goldsky**, a high-performance indexing platform that provides:

- ⚡ **Real-time indexing** - Lightning-fast data synchronization with the Story Network
- 🔒 **Enterprise reliability** - 99.9% uptime SLA for production workloads
- 📊 **Instant GraphQL API** - Query blockchain data with standard GraphQL

### Live Endpoint

```
https://api.goldsky.com/api/public/project_cmioox8y90t7401znbgia8tcm/subgraphs/pulend-mainnet/0.0.1/gn
```

### Example Query

```graphql
{
  markets {
    id
    totalBorrowAssets
    totalSupplyAssets
    borrowRate
    utilization
    users
  }
  borrows(first: 10, orderBy: blockTimestamp, orderDirection: desc) {
    user
    amount
    transactionHash
    blockTimestamp
  }
}
```

---

## 📦 Project Structure

```
indexer/
├── abis/                    # Contract ABIs
│   ├── LendingPool.json
│   └── InterestRateModel.json
├── src/
│   ├── lending-pool.ts      # LendingPool event handlers
│   ├── interest-rate-model.ts # InterestRateModel event handlers
│   └── utils.ts             # Utility functions
├── schema.graphql            # GraphQL schema definitions
├── subgraph.yaml             # Testnet subgraph manifest
├── subgraph.mainnet.yaml     # Mainnet subgraph manifest
├── networks.json             # Network configurations
└── tests/                    # Unit tests (matchstick-as)
```

---

## 🔧 Development

### Prerequisites

- Node.js 18+
- Yarn

### Installation

```bash
yarn install
```

### Commands

| Command                | Description                                         |
| ---------------------- | --------------------------------------------------- |
| `yarn codegen`         | Generate AssemblyScript types from schema (testnet) |
| `yarn codegen:mainnet` | Generate types for mainnet                          |
| `yarn build`           | Build the subgraph (testnet)                        |
| `yarn build:mainnet`   | Build for mainnet deployment                        |
| `yarn test`            | Run unit tests with matchstick-as                   |

### Local Development

```bash
# Create local subgraph
yarn create-local

# Deploy to local Graph node
yarn deploy-local

# Remove local subgraph
yarn remove-local
```

---

## 📊 Indexed Entities

### Core Events

| Entity               | Description                         |
| -------------------- | ----------------------------------- |
| `Borrow`             | Borrow transactions                 |
| `Repay`              | Loan repayments                     |
| `Liquidation`        | Collateral liquidations             |
| `SupplyLiquidity`    | Liquidity deposits                  |
| `WithdrawLiquidity`  | Liquidity withdrawals               |
| `SupplyCollateral`   | Collateral deposits (NFT/IP assets) |
| `WithdrawCollateral` | Collateral withdrawals              |

### Aggregated State

| Entity                    | Description                                        |
| ------------------------- | -------------------------------------------------- |
| `Market`                  | Real-time market metrics (TVL, utilization, rates) |
| `UserLiquidity`           | Per-user liquidity positions and yield tracking    |
| `InterestRateModelConfig` | Interest rate model parameters                     |

---

## 🌐 Network Configuration

| Network                    | LendingPool                                  | InterestRateModel                            | Start Block |
| -------------------------- | -------------------------------------------- | -------------------------------------------- | ----------- |
| **Story Mainnet**          | `0x848fDD471ebad6CFD8AfBfB58ba243782AD9201C` | `0xa89Ff50f77A59D6a175c738C3F705B5401BcEbc0` | 11693991    |
| **Story Aeneid (Testnet)** | `0x848fDD471ebad6CFD8AfBfB58ba243782AD9201C` | `0xa89Ff50f77A59D6a175c738C3F705B5401BcEbc0` | 11695085    |

---

## 🚀 Deploying to Goldsky

### 1. Install Goldsky CLI

```bash
npm install -g @goldsky/cli
```

### 2. Authenticate

```bash
goldsky login
```

### 3. Deploy

```bash
# Build the subgraph
yarn build:mainnet

# Deploy to Goldsky
goldsky subgraph deploy pulend-mainnet/0.0.1 --path .
```

### 4. Monitor

Check deployment status and logs in the [Goldsky Dashboard](https://app.goldsky.com/).

---

## 📜 License

UNLICENSED
