import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Borrow,
  BorrowTokenSet,
  CollateralTokenSet,
  Initialized,
  InterestRateModelSet,
  Liquidation,
  LtvSet,
  MinSupplyAmountSet,
  Paused,
  Repay,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  RouterSet,
  SupplyCollateral,
  SupplyLiquidity,
  Unpaused,
  Upgraded,
  WithdrawCollateral,
  WithdrawLiquidity
} from "../generated/LendingPool/LendingPool"

export function createBorrowEvent(
  user: Address,
  token: Address,
  amount: BigInt
): Borrow {
  let borrowEvent = changetype<Borrow>(newMockEvent())

  borrowEvent.parameters = new Array()

  borrowEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return borrowEvent
}

export function createBorrowTokenSetEvent(token: Address): BorrowTokenSet {
  let borrowTokenSetEvent = changetype<BorrowTokenSet>(newMockEvent())

  borrowTokenSetEvent.parameters = new Array()

  borrowTokenSetEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )

  return borrowTokenSetEvent
}

export function createCollateralTokenSetEvent(
  token: Address
): CollateralTokenSet {
  let collateralTokenSetEvent = changetype<CollateralTokenSet>(newMockEvent())

  collateralTokenSetEvent.parameters = new Array()

  collateralTokenSetEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )

  return collateralTokenSetEvent
}

export function createInitializedEvent(version: BigInt): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(version)
    )
  )

  return initializedEvent
}

export function createInterestRateModelSetEvent(
  interestRateModel: Address
): InterestRateModelSet {
  let interestRateModelSetEvent =
    changetype<InterestRateModelSet>(newMockEvent())

  interestRateModelSetEvent.parameters = new Array()

  interestRateModelSetEvent.parameters.push(
    new ethereum.EventParam(
      "interestRateModel",
      ethereum.Value.fromAddress(interestRateModel)
    )
  )

  return interestRateModelSetEvent
}

export function createLiquidationEvent(
  borrower: Address,
  borrowToken: Address,
  collateralToken: Address,
  userBorrowAssets: BigInt,
  collateralTokenIds: Array<BigInt>,
  liquidatorTokenIds: Array<BigInt>,
  borrowerTokenIds: Array<BigInt>
): Liquidation {
  let liquidationEvent = changetype<Liquidation>(newMockEvent())

  liquidationEvent.parameters = new Array()

  liquidationEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  liquidationEvent.parameters.push(
    new ethereum.EventParam(
      "borrowToken",
      ethereum.Value.fromAddress(borrowToken)
    )
  )
  liquidationEvent.parameters.push(
    new ethereum.EventParam(
      "collateralToken",
      ethereum.Value.fromAddress(collateralToken)
    )
  )
  liquidationEvent.parameters.push(
    new ethereum.EventParam(
      "userBorrowAssets",
      ethereum.Value.fromUnsignedBigInt(userBorrowAssets)
    )
  )
  liquidationEvent.parameters.push(
    new ethereum.EventParam(
      "collateralTokenIds",
      ethereum.Value.fromUnsignedBigIntArray(collateralTokenIds)
    )
  )
  liquidationEvent.parameters.push(
    new ethereum.EventParam(
      "liquidatorTokenIds",
      ethereum.Value.fromUnsignedBigIntArray(liquidatorTokenIds)
    )
  )
  liquidationEvent.parameters.push(
    new ethereum.EventParam(
      "borrowerTokenIds",
      ethereum.Value.fromUnsignedBigIntArray(borrowerTokenIds)
    )
  )

  return liquidationEvent
}

export function createLtvSetEvent(ltv: BigInt): LtvSet {
  let ltvSetEvent = changetype<LtvSet>(newMockEvent())

  ltvSetEvent.parameters = new Array()

  ltvSetEvent.parameters.push(
    new ethereum.EventParam("ltv", ethereum.Value.fromUnsignedBigInt(ltv))
  )

  return ltvSetEvent
}

export function createMinSupplyAmountSetEvent(
  token: Address,
  amount: BigInt
): MinSupplyAmountSet {
  let minSupplyAmountSetEvent = changetype<MinSupplyAmountSet>(newMockEvent())

  minSupplyAmountSetEvent.parameters = new Array()

  minSupplyAmountSetEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  minSupplyAmountSetEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return minSupplyAmountSetEvent
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createRepayEvent(
  user: Address,
  token: Address,
  amount: BigInt
): Repay {
  let repayEvent = changetype<Repay>(newMockEvent())

  repayEvent.parameters = new Array()

  repayEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  repayEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  repayEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return repayEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createRouterSetEvent(router: Address): RouterSet {
  let routerSetEvent = changetype<RouterSet>(newMockEvent())

  routerSetEvent.parameters = new Array()

  routerSetEvent.parameters.push(
    new ethereum.EventParam("router", ethereum.Value.fromAddress(router))
  )

  return routerSetEvent
}

export function createSupplyCollateralEvent(
  user: Address,
  token: Address,
  tokenId: BigInt
): SupplyCollateral {
  let supplyCollateralEvent = changetype<SupplyCollateral>(newMockEvent())

  supplyCollateralEvent.parameters = new Array()

  supplyCollateralEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  supplyCollateralEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  supplyCollateralEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return supplyCollateralEvent
}

export function createSupplyLiquidityEvent(
  user: Address,
  token: Address,
  amount: BigInt
): SupplyLiquidity {
  let supplyLiquidityEvent = changetype<SupplyLiquidity>(newMockEvent())

  supplyLiquidityEvent.parameters = new Array()

  supplyLiquidityEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  supplyLiquidityEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  supplyLiquidityEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return supplyLiquidityEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}

export function createUpgradedEvent(implementation: Address): Upgraded {
  let upgradedEvent = changetype<Upgraded>(newMockEvent())

  upgradedEvent.parameters = new Array()

  upgradedEvent.parameters.push(
    new ethereum.EventParam(
      "implementation",
      ethereum.Value.fromAddress(implementation)
    )
  )

  return upgradedEvent
}

export function createWithdrawCollateralEvent(
  user: Address,
  token: Address,
  tokenId: BigInt
): WithdrawCollateral {
  let withdrawCollateralEvent = changetype<WithdrawCollateral>(newMockEvent())

  withdrawCollateralEvent.parameters = new Array()

  withdrawCollateralEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  withdrawCollateralEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  withdrawCollateralEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return withdrawCollateralEvent
}

export function createWithdrawLiquidityEvent(
  user: Address,
  token: Address,
  amount: BigInt
): WithdrawLiquidity {
  let withdrawLiquidityEvent = changetype<WithdrawLiquidity>(newMockEvent())

  withdrawLiquidityEvent.parameters = new Array()

  withdrawLiquidityEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  withdrawLiquidityEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  withdrawLiquidityEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawLiquidityEvent
}
