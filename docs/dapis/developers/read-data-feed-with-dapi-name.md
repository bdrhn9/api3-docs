---
title: readDataFeedWithDapiName()
folder: dApp Developers
---

<TitleSpan>{{$frontmatter.folder}}</TitleSpan>

# {{$frontmatter.title}}

<TocHeader />
<TOC class="table-of-contents" :include-level="[2,3]" />

This function reads a value and timestamp from a dAPI using its name. In the
code example below, `_dapiName` is a dAPI name. For on-chain smart contracts the
`msg.sender` argument received by the function
[readDataFeedWithDapiName()](https://github.com/api3dao/airnode-protocol-v1/blob/v0.5.0/contracts/dapis/DapiServer.sol#L729-L744)
must have [read access](./#coverage-policies) for the dAPI requested.

Calling from off-chain code (_using a library such as `ether.js`_) is not
subject to coverage policies. Off-chain code is beyond the scope of this doc.

## Example Code

```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "@api3/airnode-protocol-v1/contracts/dapis/interfaces/IDapiServer.sol";
contract mySmartContract {

    function myGetDataFeedValue(
        address _dapiServerContractAddress,
        bytes32 _dapiName
    ) external {
        int224 private value;
        uint32 private timestamp;

        // Calling the DapiServer for a data feed value and timestamp.
        (value, timestamp) =
            IDapiServer(_dapiServerContractAddress).readDataFeedWithDapiName(_dapiName);
    }
}
```

See another code example of `readDataFeedWithDapiName()` in the
[data-feed-reader-example repo](https://github.com/api3dao/data-feed-reader-example/blob/main/contracts/DataFeedReaderExample.sol#L27).

## Parameters

`readDataFeedWithDapiName(bytes32 _dapiName)`

- `bytes32 dapiName` - The name of the dAPI to retrieve a value and timestamp
  for.

## Returns

- `int224 value` - The value of the dAPI.
- `uint32 timestamp` - The timestamp associated with the value.

::: tip Please note:

The `DapiServer.sol` contract casts the reported data point to `int224`. If this
is a problem (because the reported data may not fit into 224 bits or it is of a
completely different type such as `bytes32`), do not use this contract and
implement a customized version instead. The contract casts the timestamps to
`uint32`, which means it will not work work past-2106 in the current form. If
this is an issue, consider casting the timestamps to a larger type.

:::

If the `timestamp` of a data feed is zero, this means that it was never written
to. This may be the case for new data feeds. Therefore a zero value in the
`value` field is not valid if the `timestamp` is zero.

In general, make sure to check if the timestamp of the data feed is fresh
enough, and definitely disregard data feeds with a zero `timestamp`.
