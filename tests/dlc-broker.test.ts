import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, BigInt, Address } from "@graphprotocol/graph-ts"
import { BurnBtcNft } from "../generated/schema"
import { BurnBtcNft as BurnBtcNftEvent } from "../generated/DlcBroker/DlcBroker"
import { handleBurnBtcNft } from "../src/dlc-broker"
import { createBurnBtcNftEvent } from "./dlc-broker-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let dlcUUID = Bytes.fromI32(1234567890)
    let nftId = BigInt.fromI32(234)
    let newBurnBtcNftEvent = createBurnBtcNftEvent(dlcUUID, nftId)
    handleBurnBtcNft(newBurnBtcNftEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("BurnBtcNft created and stored", () => {
    assert.entityCount("BurnBtcNft", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "BurnBtcNft",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "dlcUUID",
      "1234567890"
    )
    assert.fieldEquals(
      "BurnBtcNft",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "nftId",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
