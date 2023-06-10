import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import { BTCPriceFetching } from "../generated/schema"
import { BTCPriceFetching as BTCPriceFetchingEvent } from "../generated/DlcManager/DlcManager"
import { handleBTCPriceFetching } from "../src/dlc-manager"
import { createBTCPriceFetchingEvent } from "./dlc-manager-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let uuid = Bytes.fromI32(1234567890)
    let caller = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let price = BigInt.fromI32(234)
    let eventSource = "Example string value"
    let newBTCPriceFetchingEvent = createBTCPriceFetchingEvent(
      uuid,
      caller,
      price,
      eventSource
    )
    handleBTCPriceFetching(newBTCPriceFetchingEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("BTCPriceFetching created and stored", () => {
    assert.entityCount("BTCPriceFetching", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "BTCPriceFetching",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "uuid",
      "1234567890"
    )
    assert.fieldEquals(
      "BTCPriceFetching",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "caller",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "BTCPriceFetching",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "price",
      "234"
    )
    assert.fieldEquals(
      "BTCPriceFetching",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "eventSource",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
