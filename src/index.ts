import AgoraRTC, { EncryptionMode } from "agora-rtc-sdk-ng";
import test from "./testFile";

export default class SuperSdk {
  encryptionMode: EncryptionMode = "aes-128-xts";
  createClient() {
    AgoraRTC.createClient({ mode: "rtc", codec: "vp9" });
  }
  testFunc = test;
}
