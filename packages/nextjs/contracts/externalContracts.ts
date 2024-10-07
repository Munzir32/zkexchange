import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

/**
 * @example
 * const externalContracts = {
 *   1: {
 *     DAI: {
 *       address: "0x...",
 *       abi: [...],
 *     },
 *   },
 * } as const;
 */
const externalContracts = {
  300: {
    Zkexchange: {
      address: "0x6C6dd09F2Ff6151aa432Bf2e685aaa824c3C8a1c",
      abi: [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "feeCollectorAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "fee",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "orderId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "FundsReleased",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "orderId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "buyer",
          "type": "address"
        }
      ],
      "name": "OrderAccepted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "orderId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "seller",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "OrderCancelled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "previousAdminRole",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "newAdminRole",
          "type": "bytes32"
        }
      ],
      "name": "RoleAdminChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleGranted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleRevoked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "orderId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "seller",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "currency",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amountInToken",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amountInCurrency",
          "type": "uint256"
        }
      ],
      "name": "SellOrderPlaced",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "BUYER_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "DEFAULT_ADMIN_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "MANAGER_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "SIGNER_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "_orders",
      "outputs": [
        {
          "internalType": "enum Zkexchange._TransactionState",
          "name": "txStatus",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "nonce",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "seller",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "buyer",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "currency",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "amountInToken",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountInCurrency",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "_ordersCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "_ordersSignatures",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "orderId",
          "type": "uint256"
        }
      ],
      "name": "acceptOrder",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "currency",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "fee",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "minOrder",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "maxOrder",
          "type": "uint256"
        }
      ],
      "name": "addCurrency",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "fee",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "minOrder",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "maxOrder",
          "type": "uint256"
        }
      ],
      "name": "addToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "orderId",
          "type": "uint256"
        }
      ],
      "name": "adminRefundFunds",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "orderId",
          "type": "uint256"
        }
      ],
      "name": "adminReleaseFunds",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "orderId",
          "type": "uint256"
        }
      ],
      "name": "cancelOrder",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "orderId",
          "type": "uint256"
        }
      ],
      "name": "cancelOrderAdmin",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "fee",
          "type": "uint256"
        }
      ],
      "name": "changeFee",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "orderId",
          "type": "uint256"
        }
      ],
      "name": "completeOrder",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "currency",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "fee",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "minOrder",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "maxOrder",
          "type": "uint256"
        }
      ],
      "name": "editCurrency",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "fee",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "minOrder",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "maxOrder",
          "type": "uint256"
        }
      ],
      "name": "editToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        }
      ],
      "name": "getRoleAdmin",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "grantRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "hasRole",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountInToken",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountInCurrency",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "currency",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        }
      ],
      "name": "placeSellOrder",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "orderId",
          "type": "uint256"
        }
      ],
      "name": "releaseFunds",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "currency",
          "type": "string"
        }
      ],
      "name": "removeCurrency",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        }
      ],
      "name": "removeToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "renounceRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "revokeRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "orderId",
          "type": "uint256"
        }
      ],
      "name": "transactionState",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
    },
   
  },
  11155111: {
    GDAv1Forward: {
      address: "0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08",
      abi: [
        {
          "inputs": [
            {
              "internalType": "contract ISuperfluid",
              "name": "host",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [
            {
              "internalType": "contract ISuperfluidPool",
              "name": "pool",
              "type": "address"
            },
            { "internalType": "address", "name": "memberAddress", "type": "address" },
            { "internalType": "bytes", "name": "userData", "type": "bytes" }
          ],
          "name": "claimAll",
          "outputs": [{ "internalType": "bool", "name": "success", "type": "bool" }],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "contract ISuperfluidPool",
              "name": "pool",
              "type": "address"
            },
            { "internalType": "bytes", "name": "userData", "type": "bytes" }
          ],
          "name": "connectPool",
          "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "contract ISuperfluidToken",
              "name": "token",
              "type": "address"
            },
            { "internalType": "address", "name": "admin", "type": "address" },
            {
              "components": [
                {
                  "internalType": "bool",
                  "name": "transferabilityForUnitsOwner",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "distributionFromAnyAddress",
                  "type": "bool"
                }
              ],
              "internalType": "struct PoolConfig",
              "name": "config",
              "type": "tuple"
            }
          ],
          "name": "createPool",
          "outputs": [
            { "internalType": "bool", "name": "success", "type": "bool" },
            {
              "internalType": "contract ISuperfluidPool",
              "name": "pool",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "contract ISuperfluidPool",
              "name": "pool",
              "type": "address"
            },
            { "internalType": "bytes", "name": "userData", "type": "bytes" }
          ],
          "name": "disconnectPool",
          "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "contract ISuperfluidToken",
              "name": "token",
              "type": "address"
            },
            { "internalType": "address", "name": "from", "type": "address" },
            {
              "internalType": "contract ISuperfluidPool",
              "name": "pool",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "requestedAmount",
              "type": "uint256"
            },
            { "internalType": "bytes", "name": "userData", "type": "bytes" }
          ],
          "name": "distribute",
          "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "contract ISuperfluidToken",
              "name": "token",
              "type": "address"
            },
            { "internalType": "address", "name": "from", "type": "address" },
            {
              "internalType": "contract ISuperfluidPool",
              "name": "pool",
              "type": "address"
            },
            { "internalType": "int96", "name": "requestedFlowRate", "type": "int96" },
            { "internalType": "bytes", "name": "userData", "type": "bytes" }
          ],
          "name": "distributeFlow",
          "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "contract ISuperfluidToken",
              "name": "token",
              "type": "address"
            },
            { "internalType": "address", "name": "from", "type": "address" },
            {
              "internalType": "contract ISuperfluidPool",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "requestedAmount",
              "type": "uint256"
            }
          ],
          "name": "estimateDistributionActualAmount",
          "outputs": [
            { "internalType": "uint256", "name": "actualAmount", "type": "uint256" }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "contract ISuperfluidToken",
              "name": "token",
              "type": "address"
            },
            { "internalType": "address", "name": "from", "type": "address" },
            {
              "internalType": "contract ISuperfluidPool",
              "name": "to",
              "type": "address"
            },
            { "internalType": "int96", "name": "requestedFlowRate", "type": "int96" }
          ],
          "name": "estimateFlowDistributionActualFlowRate",
          "outputs": [
            { "internalType": "int96", "name": "actualFlowRate", "type": "int96" },
            {
              "internalType": "int96",
              "name": "totalDistributionFlowRate",
              "type": "int96"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "contract ISuperfluidToken",
              "name": "token",
              "type": "address"
            },
            { "internalType": "address", "name": "from", "type": "address" },
            {
              "internalType": "contract ISuperfluidPool",
              "name": "to",
              "type": "address"
            }
          ],
          "name": "getFlowDistributionFlowRate",
          "outputs": [{ "internalType": "int96", "name": "", "type": "int96" }],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "contract ISuperfluidToken",
              "name": "token",
              "type": "address"
            },
            { "internalType": "address", "name": "account", "type": "address" }
          ],
          "name": "getNetFlow",
          "outputs": [{ "internalType": "int96", "name": "", "type": "int96" }],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "contract ISuperfluidPool",
              "name": "pool",
              "type": "address"
            }
          ],
          "name": "getPoolAdjustmentFlowInfo",
          "outputs": [
            { "internalType": "address", "name": "", "type": "address" },
            { "internalType": "bytes32", "name": "", "type": "bytes32" },
            { "internalType": "int96", "name": "", "type": "int96" }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            { "internalType": "address", "name": "pool", "type": "address" }
          ],
          "name": "getPoolAdjustmentFlowRate",
          "outputs": [{ "internalType": "int96", "name": "", "type": "int96" }],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "contract ISuperfluidPool",
              "name": "pool",
              "type": "address"
            },
            { "internalType": "address", "name": "member", "type": "address" }
          ],
          "name": "isMemberConnected",
          "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "contract ISuperfluidToken",
              "name": "token",
              "type": "address"
            },
            { "internalType": "address", "name": "account", "type": "address" }
          ],
          "name": "isPool",
          "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "contract ISuperfluidPool",
              "name": "pool",
              "type": "address"
            },
            { "internalType": "address", "name": "memberAddress", "type": "address" },
            { "internalType": "uint128", "name": "newUnits", "type": "uint128" },
            { "internalType": "bytes", "name": "userData", "type": "bytes" }
          ],
          "name": "updateMemberUnits",
          "outputs": [{ "internalType": "bool", "name": "success", "type": "bool" }],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ]
    }
  }
} as const;

export default externalContracts satisfies GenericContractsDeclaration;