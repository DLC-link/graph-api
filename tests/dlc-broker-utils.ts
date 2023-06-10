import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  BurnBtcNft,
  MintBtcNft,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  SetupVault,
  StatusUpdate
} from "../generated/DlcBroker/DlcBroker"

export function createBurnBtcNftEvent(
  dlcUUID: Bytes,
  nftId: BigInt
): BurnBtcNft {
  let burnBtcNftEvent = changetype<BurnBtcNft>(newMockEvent())

  burnBtcNftEvent.parameters = new Array()

  burnBtcNftEvent.parameters.push(
    new ethereum.EventParam("dlcUUID", ethereum.Value.fromFixedBytes(dlcUUID))
  )
  burnBtcNftEvent.parameters.push(
    new ethereum.EventParam("nftId", ethereum.Value.fromUnsignedBigInt(nftId))
  )

  return burnBtcNftEvent
}

export function createMintBtcNftEvent(
  dlcUUID: Bytes,
  btcDeposit: BigInt
): MintBtcNft {
  let mintBtcNftEvent = changetype<MintBtcNft>(newMockEvent())

  mintBtcNftEvent.parameters = new Array()

  mintBtcNftEvent.parameters.push(
    new ethereum.EventParam("dlcUUID", ethereum.Value.fromFixedBytes(dlcUUID))
  )
  mintBtcNftEvent.parameters.push(
    new ethereum.EventParam(
      "btcDeposit",
      ethereum.Value.fromUnsignedBigInt(btcDeposit)
    )
  )

  return mintBtcNftEvent
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

export function createSetupVaultEvent(
  dlcUUID: Bytes,
  btcDeposit: BigInt,
  emergencyRefundTime: BigInt,
  index: BigInt,
  owner: Address
): SetupVault {
  let setupVaultEvent = changetype<SetupVault>(newMockEvent())

  setupVaultEvent.parameters = new Array()

  setupVaultEvent.parameters.push(
    new ethereum.EventParam("dlcUUID", ethereum.Value.fromFixedBytes(dlcUUID))
  )
  setupVaultEvent.parameters.push(
    new ethereum.EventParam(
      "btcDeposit",
      ethereum.Value.fromUnsignedBigInt(btcDeposit)
    )
  )
  setupVaultEvent.parameters.push(
    new ethereum.EventParam(
      "emergencyRefundTime",
      ethereum.Value.fromUnsignedBigInt(emergencyRefundTime)
    )
  )
  setupVaultEvent.parameters.push(
    new ethereum.EventParam("index", ethereum.Value.fromUnsignedBigInt(index))
  )
  setupVaultEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return setupVaultEvent
}

export function createStatusUpdateEvent(
  vaultid: BigInt,
  dlcUUID: Bytes,
  newStatus: i32
): StatusUpdate {
  let statusUpdateEvent = changetype<StatusUpdate>(newMockEvent())

  statusUpdateEvent.parameters = new Array()

  statusUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "vaultid",
      ethereum.Value.fromUnsignedBigInt(vaultid)
    )
  )
  statusUpdateEvent.parameters.push(
    new ethereum.EventParam("dlcUUID", ethereum.Value.fromFixedBytes(dlcUUID))
  )
  statusUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "newStatus",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(newStatus))
    )
  )

  return statusUpdateEvent
}
