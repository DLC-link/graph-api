import {
  BurnBtcNft as BurnBtcNftEvent,
  MintBtcNft as MintBtcNftEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  SetupVault as SetupVaultEvent,
  StatusUpdate as StatusUpdateEvent
} from "../generated/DlcBroker/DlcBroker"
import {
  BurnBtcNft,
  MintBtcNft,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  SetupVault,
  StatusUpdate
} from "../generated/schema"

export function handleBurnBtcNft(event: BurnBtcNftEvent): void {
  let entity = new BurnBtcNft(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.dlcUUID = event.params.dlcUUID
  entity.nftId = event.params.nftId

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
  entity.btcDeposit = event.params.btcDeposit

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

export function handleSetupVault(event: SetupVaultEvent): void {
  let entity = new SetupVault(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.dlcUUID = event.params.dlcUUID
  entity.btcDeposit = event.params.btcDeposit
  entity.emergencyRefundTime = event.params.emergencyRefundTime
  entity.index = event.params.index
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStatusUpdate(event: StatusUpdateEvent): void {
  let entity = new StatusUpdate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.vaultid = event.params.vaultid
  entity.dlcUUID = event.params.dlcUUID
  entity.newStatus = event.params.newStatus

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
