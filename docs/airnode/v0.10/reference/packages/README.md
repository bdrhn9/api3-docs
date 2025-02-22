---
title: Overview
docSetName: Airnode v0.10
folder: Reference > Packages
basePath: /airnode/v0.10
tags:
---

<TitleSpan>{{$frontmatter.folder}}</TitleSpan>

# {{$frontmatter.title}}

<VersionWarning/>

Airnode is a fully-serverless oracle node that is designed specifically for API
providers to operate their own oracles. Its code base is a monorepo managed
using [Lerna](https://github.com/lerna/lerna). The
[Airnode monorepo](https://github.com/api3dao/airnode/tree/v0.8/packages) has
several packages. Some of these packages are used by dApp developers and API
providers to interact with or to build Airnode. A few are simply used for
internal Airnode development.

- [airnode-adapter](./adapter.md)
- [airnode-admin](./admin-cli.md)
- [airnode-abi](./airnode-abi.md)
- [airnode-deployer](./deployer.md)

---

**Read about each package in the monorepo.**

Airnode packages are cross platform, available as npm packages or docker
containers. You should also be able to clone, build and use the packages on any
platform. However there is no guarantee that the development only features (e.g.
test or examples) will work out of the box. It is recommend to use UNIX based
systems for development. If you are using Windows, consider
[WSL2](https://docs.microsoft.com/en-us/windows/wsl/install).

[**airnode-adapter**:](https://github.com/api3dao/airnode/tree/v0.8/packages/airnode-adapter)
The module that makes an API call, processes the response and returns a single
value.

[**airnode-admin**:](https://github.com/api3dao/airnode/tree/v0.8/packages/airnode-admin)
A package/CLI tool to interact with the Airnode contracts across chains.

[**airnode-abi**:](https://github.com/api3dao/airnode/tree/v0.8/packages/airnode-abi)
Encoding and decoding utilities for Airnode according to the
[Airnode ABI specifications](../specifications/airnode-abi-specifications.md).

[**airnode-deployer**:](https://github.com/api3dao/airnode/tree/v0.8/packages/airnode-deployer)
Tools to automate Airnode deployment.

[**airnode-examples**:](https://github.com/api3dao/airnode/tree/v0.8/packages/airnode-examples)
A public list of examples showcasing the features of Airnode.

[**airnode-node**:](https://github.com/api3dao/airnode/tree/v0.8/packages/airnode-node)
The node part of Airnode that allows for connecting multiple blockchains to the
rest of the world.

[**airnode-operation**:](https://github.com/api3dao/airnode/tree/v0.8/packages/airnode-operation)
Development and testing utilities for the core parts of Airnode.

[**airnode-protocol**:](https://github.com/api3dao/airnode/tree/v0.8/packages/airnode-protocol)
Contracts that implement Airnode RRP (request–response protocol).

[**airnode-validator**:](https://github.com/api3dao/airnode/tree/v0.8/packages/airnode-validator)
A package that can be used to validate Airnode configuration.

## OIS

The `airnode-ois` monorepo package was removed from the Airnode repo and is now
in its own repo (`ois`) starting with Airnode `v0.8`.

[**ois**:](https://github.com/api3dao/ois/tree/v1.2.0) Types for
[Oracle Integration Specification (OIS)](/ois/v1.2/ois.md).
