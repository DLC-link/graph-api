import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  BTCPriceFetching,
  CloseDLC,
  CreateDLC,
  MintBtcNft,
  PostCloseDLC,
  PostCreateDLC,
  PostMintBtcNft,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  SetStatusFunded
} from "../generated/DlcManager/DlcManager"

export function createBTCPriceFetchingEvent(
  uuid: Bytes,
  caller: Address,
  price: BigInt,
  eventSource: string
): BTCPriceFetching {
  let btcPriceFetchingEvent = changetype<BTCPriceFetching>(newMockEvent())

  btcPriceFetchingEvent.parameters = new Array()

  btcPriceFetchingEvent.parameters.push(
    new ethereum.EventParam("uuid", ethereum.Value.fromFixedBytes(uuid))
  )
  btcPriceFetchingEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  btcPriceFetchingEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromSignedBigInt(price))
  )
  btcPriceFetchingEvent.parameters.push(
    new ethereum.EventParam(
      "eventSource",
      ethereum.Value.fromString(eventSource)
    )
  )

  return btcPriceFetchingEvent
}

export function createCloseDLCEvent(
  uuid: Bytes,
  outcome: BigInt,
  creator: Address,
  eventSource: string
): CloseDLC {
  let closeDlcEvent = changetype<CloseDLC>(newMockEvent())

  closeDlcEvent.parameters = new Array()

  closeDlcEvent.parameters.push(
    new ethereum.EventParam("uuid", ethereum.Value.fromFixedBytes(uuid))
  )
  closeDlcEvent.parameters.push(
    new ethereum.EventParam(
      "outcome",
      ethereum.Value.fromUnsignedBigInt(outcome)
    )
  )
  closeDlcEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  closeDlcEvent.parameters.push(
    new ethereum.EventParam(
      "eventSource",
      ethereum.Value.fromString(eventSource)
    )
  )

  return closeDlcEvent
}

export function createCreateDLCEvent(
  uuid: Bytes,
  creator: Address,
  receiver: Address,
  emergencyRefundTime: BigInt,
  nonce: BigInt,
  eventSource: string
): CreateDLC {
  let createDlcEvent = changetype<CreateDLC>(newMockEvent())

  createDlcEvent.parameters = new Array()

  createDlcEvent.parameters.push(
    new ethereum.EventParam("uuid", ethereum.Value.fromFixedBytes(uuid))
  )
  createDlcEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  createDlcEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  createDlcEvent.parameters.push(
    new ethereum.EventParam(
      "emergencyRefundTime",
      ethereum.Value.fromUnsignedBigInt(emergencyRefundTime)
    )
  )
  createDlcEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )
  createDlcEvent.parameters.push(
    new ethereum.EventParam(
      "eventSource",
      ethereum.Value.fromString(eventSource)
    )
  )

  return createDlcEvent
}

export function createMintBtcNftEvent(
  dlcUUID: Bytes,
  creator: Address,
  receiver: Address,
  btcDeposit: BigInt,
  eventSource: string
): MintBtcNft {
  let mintBtcNftEvent = changetype<MintBtcNft>(newMockEvent())

  mintBtcNftEvent.parameters = new Array()

  mintBtcNftEvent.parameters.push(
    new ethereum.EventParam("dlcUUID", ethereum.Value.fromFixedBytes(dlcUUID))
  )
  mintBtcNftEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  mintBtcNftEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  mintBtcNftEvent.parameters.push(
    new ethereum.EventParam(
      "btcDeposit",
      ethereum.Value.fromUnsignedBigInt(btcDeposit)
    )
  )
  mintBtcNftEvent.parameters.push(
    new ethereum.EventParam(
      "eventSource",
      ethereum.Value.fromString(eventSource)
    )
  )

  return mintBtcNftEvent
}

export function createPostCloseDLCEvent(
  uuid: Bytes,
  outcome: BigInt,
  actualClosingTime: BigInt,
  eventSource: string
): PostCloseDLC {
  let postCloseDlcEvent = changetype<PostCloseDLC>(newMockEvent())

  postCloseDlcEvent.parameters = new Array()

  postCloseDlcEvent.parameters.push(
    new ethereum.EventParam("uuid", ethereum.Value.fromFixedBytes(uuid))
  )
  postCloseDlcEvent.parameters.push(
    new ethereum.EventParam(
      "outcome",
      ethereum.Value.fromUnsignedBigInt(outcome)
    )
  )
  postCloseDlcEvent.parameters.push(
    new ethereum.EventParam(
      "actualClosingTime",
      ethereum.Value.fromUnsignedBigInt(actualClosingTime)
    )
  )
  postCloseDlcEvent.parameters.push(
    new ethereum.EventParam(
      "eventSource",
      ethereum.Value.fromString(eventSource)
    )
  )

  return postCloseDlcEvent
}

export function createPostCreateDLCEvent(
  uuid: Bytes,
  creator: Address,
  receiver: Address,
  emergencyRefundTime: BigInt,
  nonce: BigInt,
  eventSource: string
): PostCreateDLC {
  let postCreateDlcEvent = changetype<PostCreateDLC>(newMockEvent())

  postCreateDlcEvent.parameters = new Array()

  postCreateDlcEvent.parameters.push(
    new ethereum.EventParam("uuid", ethereum.Value.fromFixedBytes(uuid))
  )
  postCreateDlcEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  postCreateDlcEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  postCreateDlcEvent.parameters.push(
    new ethereum.EventParam(
      "emergencyRefundTime",
      ethereum.Value.fromUnsignedBigInt(emergencyRefundTime)
    )
  )
  postCreateDlcEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )
  postCreateDlcEvent.parameters.push(
    new ethereum.EventParam(
      "eventSource",
      ethereum.Value.fromString(eventSource)
    )
  )

  return postCreateDlcEvent
}

export function createPostMintBtcNftEvent(
  uuid: Bytes,
  nftId: BigInt,
  eventSource: string
): PostMintBtcNft {
  let postMintBtcNftEvent = changetype<PostMintBtcNft>(newMockEvent())

  postMintBtcNftEvent.parameters = new Array()

  postMintBtcNftEvent.parameters.push(
    new ethereum.EventParam("uuid", ethereum.Value.fromFixedBytes(uuid))
  )
  postMintBtcNftEvent.parameters.push(
    new ethereum.EventParam("nftId", ethereum.Value.fromUnsignedBigInt(nftId))
  )
  postMintBtcNftEvent.parameters.push(
    new ethereum.EventParam(
      "eventSource",
      ethereum.Value.fromString(eventSource)
    )
  )

  return postMintBtcNftEvent
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

export function createSetStatusFundedEvent(
  uuid: Bytes,
  eventSource: string
): SetStatusFunded {
  let setStatusFundedEvent = changetype<SetStatusFunded>(newMockEvent())

  setStatusFundedEvent.parameters = new Array()

  setStatusFundedEvent.parameters.push(
    new ethereum.EventParam("uuid", ethereum.Value.fromFixedBytes(uuid))
  )
  setStatusFundedEvent.parameters.push(
    new ethereum.EventParam(
      "eventSource",
      ethereum.Value.fromString(eventSource)
    )
  )

  return setStatusFundedEvent
}
