import {
  BTCPriceFetching as BTCPriceFetchingEvent,
  CloseDLC as CloseDLCEvent,
  CreateDLC as CreateDLCEvent,
  MintBtcNft as MintBtcNftEvent,
  PostCloseDLC as PostCloseDLCEvent,
  PostCreateDLC as PostCreateDLCEvent,
  PostMintBtcNft as PostMintBtcNftEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  SetStatusFunded as SetStatusFundedEvent
} from "../generated/DlcManager/DlcManager"
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
} from "../generated/schema"

export function handleBTCPriceFetching(event: BTCPriceFetchingEvent): void {
  let entity = new BTCPriceFetching(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.uuid = event.params.uuid
  entity.caller = event.params.caller
  entity.price = event.params.price
  entity.eventSource = event.params.eventSource

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCloseDLC(event: CloseDLCEvent): void {
  let entity = new CloseDLC(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.uuid = event.params.uuid
  entity.outcome = event.params.outcome
  entity.creator = event.params.creator
  entity.eventSource = event.params.eventSource

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCreateDLC(event: CreateDLCEvent): void {
  let entity = new CreateDLC(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.uuid = event.params.uuid
  entity.creator = event.params.creator
  entity.receiver = event.params.receiver
  entity.emergencyRefundTime = event.params.emergencyRefundTime
  entity.nonce = event.params.nonce
  entity.eventSource = event.params.eventSource

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMintBtcNft(event: MintBtcNftEvent): void {
  let entity = new MintBtcNft(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.dlcUUID = event.params.dlcUUID
  entity.creator = event.params.creator
  entity.receiver = event.params.receiver
  entity.btcDeposit = event.params.btcDeposit
  entity.eventSource = event.params.eventSource

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePostCloseDLC(event: PostCloseDLCEvent): void {
  let entity = new PostCloseDLC(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.uuid = event.params.uuid
  entity.outcome = event.params.outcome
  entity.actualClosingTime = event.params.actualClosingTime
  entity.eventSource = event.params.eventSource

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePostCreateDLC(event: PostCreateDLCEvent): void {
  let entity = new PostCreateDLC(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.uuid = event.params.uuid
  entity.creator = event.params.creator
  entity.receiver = event.params.receiver
  entity.emergencyRefundTime = event.params.emergencyRefundTime
  entity.nonce = event.params.nonce
  entity.eventSource = event.params.eventSource

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePostMintBtcNft(event: PostMintBtcNftEvent): void {
  let entity = new PostMintBtcNft(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.uuid = event.params.uuid
  entity.nftId = event.params.nftId
  entity.eventSource = event.params.eventSource

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
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

export function handleSetStatusFunded(event: SetStatusFundedEvent): void {
  let entity = new SetStatusFunded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.uuid = event.params.uuid
  entity.eventSource = event.params.eventSource

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
