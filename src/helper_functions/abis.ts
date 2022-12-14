export const ABIS =

{
    "tester": [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
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
            "inputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "dates",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "asset",
                    "type": "string"
                }
            ],
            "name": "getDates",
            "outputs": [
                {
                    "internalType": "string[]",
                    "name": "",
                    "type": "string[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "asset",
                    "type": "string"
                }
            ],
            "name": "getRValues",
            "outputs": [
                {
                    "internalType": "int256[]",
                    "name": "",
                    "type": "int256[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "asset",
                    "type": "string"
                }
            ],
            "name": "getRanges",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
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
                    "internalType": "string",
                    "name": "asset",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "date",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "strike",
                    "type": "uint256"
                }
            ],
            "name": "getStrikeObjects",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "int256",
                            "name": "nR3Short",
                            "type": "int256"
                        },
                        {
                            "internalType": "int256",
                            "name": "nR3Long",
                            "type": "int256"
                        },
                        {
                            "internalType": "int256",
                            "name": "nR2Short",
                            "type": "int256"
                        },
                        {
                            "internalType": "int256",
                            "name": "nR2Long",
                            "type": "int256"
                        },
                        {
                            "internalType": "int256",
                            "name": "nR1Short",
                            "type": "int256"
                        },
                        {
                            "internalType": "int256",
                            "name": "nR1Long",
                            "type": "int256"
                        },
                        {
                            "internalType": "int256",
                            "name": "pR1Short",
                            "type": "int256"
                        },
                        {
                            "internalType": "int256",
                            "name": "pR1Long",
                            "type": "int256"
                        },
                        {
                            "internalType": "int256",
                            "name": "pR2Short",
                            "type": "int256"
                        },
                        {
                            "internalType": "int256",
                            "name": "pR2Long",
                            "type": "int256"
                        },
                        {
                            "internalType": "int256",
                            "name": "pR3Short",
                            "type": "int256"
                        },
                        {
                            "internalType": "int256",
                            "name": "pR3Long",
                            "type": "int256"
                        }
                    ],
                    "internalType": "struct Tester.StrikeObject",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "asset",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "date",
                    "type": "string"
                }
            ],
            "name": "getStrikeWithObjects",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "listStrikes",
                    "type": "uint256[]"
                },
                {
                    "components": [
                        {
                            "internalType": "int256",
                            "name": "nR3Short",
                            "type": "int256"
                        },
                        {
                            "internalType": "int256",
                            "name": "nR3Long",
                            "type": "int256"
                        },
                        {
                            "internalType": "int256",
                            "name": "nR2Short",
                            "type": "int256"
                        },
                        {
                            "internalType": "int256",
                            "name": "nR2Long",
                            "type": "int256"
                        },
                        {
                            "internalType": "int256",
                            "name": "nR1Short",
                            "type": "int256"
                        },
                        {
                            "internalType": "int256",
                            "name": "nR1Long",
                            "type": "int256"
                        },
                        {
                            "internalType": "int256",
                            "name": "pR1Short",
                            "type": "int256"
                        },
                        {
                            "internalType": "int256",
                            "name": "pR1Long",
                            "type": "int256"
                        },
                        {
                            "internalType": "int256",
                            "name": "pR2Short",
                            "type": "int256"
                        },
                        {
                            "internalType": "int256",
                            "name": "pR2Long",
                            "type": "int256"
                        },
                        {
                            "internalType": "int256",
                            "name": "pR3Short",
                            "type": "int256"
                        },
                        {
                            "internalType": "int256",
                            "name": "pR3Long",
                            "type": "int256"
                        }
                    ],
                    "internalType": "struct Tester.StrikeObject[]",
                    "name": "listSOs",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "asset",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "date",
                    "type": "string"
                }
            ],
            "name": "getStrikes",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getUnderlyings",
            "outputs": [
                {
                    "internalType": "string[]",
                    "name": "",
                    "type": "string[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "asset",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "date",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "strike",
                    "type": "uint256"
                },
                {
                    "internalType": "uint8",
                    "name": "rId",
                    "type": "uint8"
                }
            ],
            "name": "getVersion",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
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
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "item17",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
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
            "name": "item18",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
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
            "name": "item20",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
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
            "name": "item22",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "maxAmount",
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
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "rValues",
            "outputs": [
                {
                    "internalType": "int256",
                    "name": "",
                    "type": "int256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "ranges",
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
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "name": "refPrice",
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
                    "internalType": "string",
                    "name": "asset",
                    "type": "string"
                },
                {
                    "internalType": "string[]",
                    "name": "newDates",
                    "type": "string[]"
                }
            ],
            "name": "setDates",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "asset",
                    "type": "string"
                },
                {
                    "internalType": "int256[]",
                    "name": "newRValues",
                    "type": "int256[]"
                }
            ],
            "name": "setRValues",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "asset",
                    "type": "string"
                },
                {
                    "internalType": "uint256[]",
                    "name": "newRanges",
                    "type": "uint256[]"
                }
            ],
            "name": "setRanges",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "asset",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "date",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "strike",
                    "type": "uint256"
                },
                {
                    "components": [
                        {
                            "internalType": "int256",
                            "name": "nR3Short",
                            "type": "int256"
                        },
                        {
                            "internalType": "int256",
                            "name": "nR3Long",
                            "type": "int256"
                        },
                        {
                            "internalType": "int256",
                            "name": "nR2Short",
                            "type": "int256"
                        },
                        {
                            "internalType": "int256",
                            "name": "nR2Long",
                            "type": "int256"
                        },
                        {
                            "internalType": "int256",
                            "name": "nR1Short",
                            "type": "int256"
                        },
                        {
                            "internalType": "int256",
                            "name": "nR1Long",
                            "type": "int256"
                        },
                        {
                            "internalType": "int256",
                            "name": "pR1Short",
                            "type": "int256"
                        },
                        {
                            "internalType": "int256",
                            "name": "pR1Long",
                            "type": "int256"
                        },
                        {
                            "internalType": "int256",
                            "name": "pR2Short",
                            "type": "int256"
                        },
                        {
                            "internalType": "int256",
                            "name": "pR2Long",
                            "type": "int256"
                        },
                        {
                            "internalType": "int256",
                            "name": "pR3Short",
                            "type": "int256"
                        },
                        {
                            "internalType": "int256",
                            "name": "pR3Long",
                            "type": "int256"
                        }
                    ],
                    "internalType": "struct Tester.StrikeObject",
                    "name": "so",
                    "type": "tuple"
                }
            ],
            "name": "setStrikeObjects",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "asset",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "date",
                    "type": "string"
                },
                {
                    "internalType": "uint256[]",
                    "name": "newStrikes",
                    "type": "uint256[]"
                }
            ],
            "name": "setStrikes",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "newTest",
                    "type": "uint256"
                }
            ],
            "name": "setTest",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string[]",
                    "name": "newUnderlyings",
                    "type": "string[]"
                }
            ],
            "name": "setUnderlyings",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "asset",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "date",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "strike",
                    "type": "uint256"
                },
                {
                    "internalType": "uint8",
                    "name": "rId",
                    "type": "uint8"
                },
                {
                    "internalType": "uint8",
                    "name": "newVersion",
                    "type": "uint8"
                }
            ],
            "name": "setVersion",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "strikeObjects",
            "outputs": [
                {
                    "internalType": "int256",
                    "name": "nR3Short",
                    "type": "int256"
                },
                {
                    "internalType": "int256",
                    "name": "nR3Long",
                    "type": "int256"
                },
                {
                    "internalType": "int256",
                    "name": "nR2Short",
                    "type": "int256"
                },
                {
                    "internalType": "int256",
                    "name": "nR2Long",
                    "type": "int256"
                },
                {
                    "internalType": "int256",
                    "name": "nR1Short",
                    "type": "int256"
                },
                {
                    "internalType": "int256",
                    "name": "nR1Long",
                    "type": "int256"
                },
                {
                    "internalType": "int256",
                    "name": "pR1Short",
                    "type": "int256"
                },
                {
                    "internalType": "int256",
                    "name": "pR1Long",
                    "type": "int256"
                },
                {
                    "internalType": "int256",
                    "name": "pR2Short",
                    "type": "int256"
                },
                {
                    "internalType": "int256",
                    "name": "pR2Long",
                    "type": "int256"
                },
                {
                    "internalType": "int256",
                    "name": "pR3Short",
                    "type": "int256"
                },
                {
                    "internalType": "int256",
                    "name": "pR3Long",
                    "type": "int256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "strikes",
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
            "inputs": [],
            "name": "test",
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
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "underlyings",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "name": "version",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
}
