import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
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
  Upgraded
} from "../generated/InterestRateModel/InterestRateModel"

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

export function createLendingPoolBaseRateSetEvent(
  lendingPool: Address,
  rate: BigInt
): LendingPoolBaseRateSet {
  let lendingPoolBaseRateSetEvent =
    changetype<LendingPoolBaseRateSet>(newMockEvent())

  lendingPoolBaseRateSetEvent.parameters = new Array()

  lendingPoolBaseRateSetEvent.parameters.push(
    new ethereum.EventParam(
      "lendingPool",
      ethereum.Value.fromAddress(lendingPool)
    )
  )
  lendingPoolBaseRateSetEvent.parameters.push(
    new ethereum.EventParam("rate", ethereum.Value.fromUnsignedBigInt(rate))
  )

  return lendingPoolBaseRateSetEvent
}

export function createLendingPoolMaxUtilizationSetEvent(
  lendingPool: Address,
  utilization: BigInt
): LendingPoolMaxUtilizationSet {
  let lendingPoolMaxUtilizationSetEvent =
    changetype<LendingPoolMaxUtilizationSet>(newMockEvent())

  lendingPoolMaxUtilizationSetEvent.parameters = new Array()

  lendingPoolMaxUtilizationSetEvent.parameters.push(
    new ethereum.EventParam(
      "lendingPool",
      ethereum.Value.fromAddress(lendingPool)
    )
  )
  lendingPoolMaxUtilizationSetEvent.parameters.push(
    new ethereum.EventParam(
      "utilization",
      ethereum.Value.fromUnsignedBigInt(utilization)
    )
  )

  return lendingPoolMaxUtilizationSetEvent
}

export function createLendingPoolOptimalUtilizationSetEvent(
  lendingPool: Address,
  utilization: BigInt
): LendingPoolOptimalUtilizationSet {
  let lendingPoolOptimalUtilizationSetEvent =
    changetype<LendingPoolOptimalUtilizationSet>(newMockEvent())

  lendingPoolOptimalUtilizationSetEvent.parameters = new Array()

  lendingPoolOptimalUtilizationSetEvent.parameters.push(
    new ethereum.EventParam(
      "lendingPool",
      ethereum.Value.fromAddress(lendingPool)
    )
  )
  lendingPoolOptimalUtilizationSetEvent.parameters.push(
    new ethereum.EventParam(
      "utilization",
      ethereum.Value.fromUnsignedBigInt(utilization)
    )
  )

  return lendingPoolOptimalUtilizationSetEvent
}

export function createLendingPoolRateAtOptimalSetEvent(
  lendingPool: Address,
  rate: BigInt
): LendingPoolRateAtOptimalSet {
  let lendingPoolRateAtOptimalSetEvent =
    changetype<LendingPoolRateAtOptimalSet>(newMockEvent())

  lendingPoolRateAtOptimalSetEvent.parameters = new Array()

  lendingPoolRateAtOptimalSetEvent.parameters.push(
    new ethereum.EventParam(
      "lendingPool",
      ethereum.Value.fromAddress(lendingPool)
    )
  )
  lendingPoolRateAtOptimalSetEvent.parameters.push(
    new ethereum.EventParam("rate", ethereum.Value.fromUnsignedBigInt(rate))
  )

  return lendingPoolRateAtOptimalSetEvent
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

export function createScaledPercentageSetEvent(
  percentage: BigInt
): ScaledPercentageSet {
  let scaledPercentageSetEvent = changetype<ScaledPercentageSet>(newMockEvent())

  scaledPercentageSetEvent.parameters = new Array()

  scaledPercentageSetEvent.parameters.push(
    new ethereum.EventParam(
      "percentage",
      ethereum.Value.fromUnsignedBigInt(percentage)
    )
  )

  return scaledPercentageSetEvent
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
