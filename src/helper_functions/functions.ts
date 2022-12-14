import {BigNumber, ethers} from "ethers";
import {ABIS} from "./abis";

const testerAddress         = "0xF4A2BC48Aa4cB0f0eFA84391aeCf0c3C8F4Ce845";
const JSON_RPC_PROVIDER     = 'https://rpc.ankr.com/polygon_mumbai';

let provider                = new ethers.providers.JsonRpcProvider(JSON_RPC_PROVIDER);
let tester                  = new ethers.Contract(testerAddress, ABIS.tester, provider);

enum STATE {STATE0, STATE1, STATE2}
enum R_TAG {NEG_R3, NEG_R2, NEG_R1, POS_R1, POS_R2, POS_R3}

export const ASSETS = {
    BTC: "BTC", ETH: "ETH", LTC: "LTC"
}

export const CALL_PUT_SELECTION = {
    CALL: "CALL", PUT: "PUT"
}

interface RowObject
{
    nR3Short: number; nR3Long: number; nR2Short: number; nR2Long: number; nR1Short: number; nR1Long: number;
    pR1Short: number; pR1Long: number; pR2Short: number; pR2Long: number; pR3Short: number; pR3Long: number;
}

interface TimeRemainingObject
{
    days: number, hours: number, minutes: number
}

setImmediate(async () => {
    let btcDates: string[]
    let ethRValues: number[]
    let btcRange: number[]

    await Promise.all([
        getDates(ASSETS.BTC), getRValues(ASSETS.ETH), getRanges(ASSETS.BTC), getReferencePrice(ASSETS.BTC), getMax()
    ]).then(
        results => {
            btcDates = results[0] // this will be a list of strings
            ethRValues = results[1].map((x: BigNumber) => x.toNumber()) // convert from "BigNumber" to more readable "Number" format
            btcRange = results[2].map((x: BigNumber) => x.toNumber())
            const refPrice = formatDecNumber(results[3])
            const maxAmount = formatDecNumber(results[4])
            const timeRemaining = getTimeRemaining(btcDates[0])
            console.log(btcDates, ethRValues, btcRange, refPrice, maxAmount, timeRemaining)
        }
    )


    const btcStrikeWithObjects = await getStrikeWithObjects(ASSETS.BTC, btcDates!![0])
    const oneTablePage = formatStrikeWithObjects(btcStrikeWithObjects[0], btcStrikeWithObjects[1])
    console.log(oneTablePage)

    await Promise.all([
        item17(STATE.STATE0), item18(STATE.STATE1), item20(STATE.STATE2), item22(STATE.STATE0),
        getVersion(ASSETS.BTC, btcDates!![0], Number(Object.keys(oneTablePage).at(0)), R_TAG.NEG_R1)
    ]).then(
        results => {
            console.log("Item 17 display msg:", results[0])
            console.log("Item 18 display msg:", results[1])
            console.log("Item 20 display msg:", results[2])
            console.log("Item 22 display msg:", results[3])
            console.log(ASSETS.BTC, btcDates[0], Number(Object.keys(oneTablePage).at(0)), "r-tag: Negative R1,",
                "VERSION:", results[4])
        }
    )

})

export async function getDates(asset: string) {
    return tester.getDates(asset)
}

export async function getReferencePrice(asset: string) {
    return tester.refPrice(asset)
}

export async function getRValues(asset: string) {
    return tester.getRValues(asset)
}

export async function getRanges(asset: string) {
    return tester.getRanges(asset)
}

export async function getVersion(asset: string, date: string, strike: number, rId: R_TAG) {
    return tester.getVersion(asset, date, strike, rId)
}

export function getTimeRemaining(date: string) {
    const end = new Date(date)
    const start = new Date()
    const diff = end.getTime() - start.getTime()
    let days = diff % (86400000)
    let hours = days % (3600000)
    let mins = hours % (60000)

    mins = Math.round((hours - mins) / 60000)
    hours = Math.floor((days - hours) / 3600000)
    days = Math.floor((diff - days) / 86400000)
    const timeRemaining: TimeRemainingObject = {
        days: days, hours: hours, minutes: mins
    }
    return timeRemaining
}

// returns 2 arrays. One array of strike prices, and another array with the corresponding 12 values for the row.
// use `formatStrikeWithObjects` to format.
export async function getStrikeWithObjects(asset: string, date: string) {
    return tester.getStrikeWithObjects(asset, date)
}

// returns an object with strikes and row objects as a key-value pair.
export function formatStrikeWithObjects(strikes: number[], rowObjects: BigNumber[][]) {
    let returnObj: { [id:number] : RowObject } = {}
    for (let i=0; i<strikes.length; i++) {
        const thisStrike: number = strikes[i]
        const thisObject: BigNumber[] = rowObjects[i]
        returnObj[thisStrike] = {
            nR3Short: formatDecNumber(thisObject[0]),
            nR3Long: formatDecNumber(thisObject[1]),
            nR2Short: formatDecNumber(thisObject[2]),
            nR2Long: formatDecNumber(thisObject[3]),
            nR1Short: formatDecNumber(thisObject[4]),
            nR1Long: formatDecNumber(thisObject[5]),
            pR1Short: formatDecNumber(thisObject[6]),
            pR1Long: formatDecNumber(thisObject[7]),
            pR2Short: formatDecNumber(thisObject[8]),
            pR2Long: formatDecNumber(thisObject[9]),
            pR3Short: formatDecNumber(thisObject[10]),
            pR3Long: formatDecNumber(thisObject[11]),
        }
    }

    return returnObj
}

export function formatDecNumber(decNumber: BigNumber) {
    return Number(ethers.utils.formatUnits(decNumber, 6))
}


export async function getMax() {
    return tester.maxAmount()
}

export async function item17(state: STATE) {
    return tester.item17(state)
}

export async function item18(state: STATE) {
    return tester.item18(state)
}

export async function item20(state: STATE) {
    return tester.item20(state)
}

export async function item22(state: STATE) {
    return tester.item22(state)
}