import {
  Initialized as InitializedEvent,
  LendingPoolBaseRateSet as LendingPoolBaseRateSetEvent,
  LendingPoolMaxUtilizationSet as LendingPoolMaxUtilizationSetEvent,
  LendingPoolOptimalUtilizationSet as LendingPoolOptimalUtilizationSetEvent,
  LendingPoolRateAtOptimalSet as LendingPoolRateAtOptimalSetEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  ScaledPercentageSet as ScaledPercentageSetEvent,
  Upgraded as UpgradedEvent,
} from "../generated/InterestRateModel/InterestRateModel"
import {
  Initialized,
  LendingPoolBaseRateSet,
  LendingPoolMaxUtilizationSet,
  LendingPoolOptimalUtilizationSet,
  LendingPoolRateAtOptimalSet,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  ScaledPercentageSet,
  Upgraded,
} from "../generated/schema"
import { getOrCreateMarket, getOrCreateInterestRateModelConfig, updateBorrowRate } from "./utils"

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLendingPoolBaseRateSet(
  event: LendingPoolBaseRateSetEvent,
): void {
  let entity = new LendingPoolBaseRateSet(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.lendingPool = event.params.lendingPool
  entity.rate = event.params.rate

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  let market = getOrCreateMarket(event.params.lendingPool)
  market.baseRate = event.params.rate
  market.save()
  updateBorrowRate(market)
}

export function handleLendingPoolMaxUtilizationSet(
  event: LendingPoolMaxUtilizationSetEvent,
): void {
  let entity = new LendingPoolMaxUtilizationSet(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.lendingPool = event.params.lendingPool
  entity.utilization = event.params.utilization

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  let market = getOrCreateMarket(event.params.lendingPool)
  market.maxUtilization = event.params.utilization
  market.save()
  updateBorrowRate(market)
}

export function handleLendingPoolOptimalUtilizationSet(
  event: LendingPoolOptimalUtilizationSetEvent,
): void {
  let entity = new LendingPoolOptimalUtilizationSet(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.lendingPool = event.params.lendingPool
  entity.utilization = event.params.utilization

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  let market = getOrCreateMarket(event.params.lendingPool)
  market.optimalUtilization = event.params.utilization
  market.save()
  updateBorrowRate(market)
}

export function handleLendingPoolRateAtOptimalSet(
  event: LendingPoolRateAtOptimalSetEvent,
): void {
  let entity = new LendingPoolRateAtOptimalSet(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.lendingPool = event.params.lendingPool
  entity.rate = event.params.rate

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  let market = getOrCreateMarket(event.params.lendingPool)
  market.rateAtOptimal = event.params.rate
  market.save()
  updateBorrowRate(market)
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
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
    event.transaction.hash.concatI32(event.logIndex.toI32()),
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
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleScaledPercentageSet(
  event: ScaledPercentageSetEvent,
): void {
  let entity = new ScaledPercentageSet(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.percentage = event.params.percentage

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  let config = getOrCreateInterestRateModelConfig(event.address)
  config.scaledPercentage = event.params.percentage
  config.save()
}

export function handleUpgraded(event: UpgradedEvent): void {
  let entity = new Upgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.implementation = event.params.implementation

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
