import {
  Borrow as BorrowEvent,
  BorrowTokenSet as BorrowTokenSetEvent,
  CollateralTokenSet as CollateralTokenSetEvent,
  Initialized as InitializedEvent,
  InterestRateModelSet as InterestRateModelSetEvent,
  Liquidation as LiquidationEvent,
  LtvSet as LtvSetEvent,
  MinSupplyAmountSet as MinSupplyAmountSetEvent,
  Paused as PausedEvent,
  Repay as RepayEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  RouterSet as RouterSetEvent,
  SupplyCollateral as SupplyCollateralEvent,
  SupplyLiquidity as SupplyLiquidityEvent,
  Unpaused as UnpausedEvent,
  Upgraded as UpgradedEvent,
  WithdrawCollateral as WithdrawCollateralEvent,
  WithdrawLiquidity as WithdrawLiquidityEvent
} from "../generated/LendingPool/LendingPool"
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
} from "../generated/schema"
import { getOrCreateMarket, updateBorrowRate, getOrCreateUserLiquidity, updateMarketData, updateUserYield } from "./utils"

export function handleBorrow(event: BorrowEvent): void {
  let entity = new Borrow(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.token = event.params.token
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  updateMarketData(event.address)
}

export function handleBorrowTokenSet(event: BorrowTokenSetEvent): void {
  let entity = new BorrowTokenSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCollateralTokenSet(event: CollateralTokenSetEvent): void {
  let entity = new CollateralTokenSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInterestRateModelSet(
  event: InterestRateModelSetEvent
): void {
  let entity = new InterestRateModelSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.interestRateModel = event.params.interestRateModel

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  let market = getOrCreateMarket(event.address)
  market.interestRateModel = event.params.interestRateModel
  market.save()
  updateBorrowRate(market)
}

export function handleLiquidation(event: LiquidationEvent): void {
  let entity = new Liquidation(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.borrower = event.params.borrower
  entity.borrowToken = event.params.borrowToken
  entity.collateralToken = event.params.collateralToken
  entity.userBorrowAssets = event.params.userBorrowAssets
  entity.collateralTokenIds = event.params.collateralTokenIds
  entity.liquidatorTokenIds = event.params.liquidatorTokenIds
  entity.borrowerTokenIds = event.params.borrowerTokenIds

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  updateMarketData(event.address)
}

export function handleLtvSet(event: LtvSetEvent): void {
  let entity = new LtvSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.ltv = event.params.ltv

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMinSupplyAmountSet(event: MinSupplyAmountSetEvent): void {
  let entity = new MinSupplyAmountSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRepay(event: RepayEvent): void {
  let entity = new Repay(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.token = event.params.token
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  updateMarketData(event.address)
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new RoleGranted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new RoleRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRouterSet(event: RouterSetEvent): void {
  let entity = new RouterSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.router = event.params.router

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSupplyCollateral(event: SupplyCollateralEvent): void {
  let entity = new SupplyCollateral(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.token = event.params.token
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSupplyLiquidity(event: SupplyLiquidityEvent): void {
  let entity = new SupplyLiquidity(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.token = event.params.token
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  updateMarketData(event.address)

  let market = getOrCreateMarket(event.address)
  let userLiquidity = getOrCreateUserLiquidity(
    event.address,
    event.params.user,
    event.params.token,
    event.block.timestamp
  )

  // Update yield before modifying balance
  updateUserYield(userLiquidity, market, event.block.timestamp)

  userLiquidity.totalDeposited = userLiquidity.totalDeposited.plus(event.params.amount)
  userLiquidity.currentBalance = userLiquidity.currentBalance.plus(event.params.amount)
  userLiquidity.token = event.params.token  // Update token in case it wasn't set
  userLiquidity.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpgraded(event: UpgradedEvent): void {
  let entity = new Upgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.implementation = event.params.implementation

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawCollateral(event: WithdrawCollateralEvent): void {
  let entity = new WithdrawCollateral(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.token = event.params.token
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawLiquidity(event: WithdrawLiquidityEvent): void {
  let entity = new WithdrawLiquidity(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.token = event.params.token
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  updateMarketData(event.address)

  let market = getOrCreateMarket(event.address)
  let userLiquidity = getOrCreateUserLiquidity(
    event.address,
    event.params.user,
    event.params.token,
    event.block.timestamp
  )

  // Update yield before modifying balance
  updateUserYield(userLiquidity, market, event.block.timestamp)

  userLiquidity.totalWithdrawn = userLiquidity.totalWithdrawn.plus(event.params.amount)
  userLiquidity.currentBalance = userLiquidity.currentBalance.minus(event.params.amount)
  userLiquidity.save()
}
