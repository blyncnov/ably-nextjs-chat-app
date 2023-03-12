import { Realtime } from "ably";

const API_Key: string = process.env.NEXT_PUBLIC_ABLY_KEY || "Enter Key";

export const ably: Realtime = new Realtime(API_Key);

export default ably;
