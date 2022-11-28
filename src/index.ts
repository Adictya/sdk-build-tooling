import AgoraRTC, { EncryptionMode } from "agora-rtc-sdk-ng";

export default class SuperSdk {
  encryptionMode: EncryptionMode = "aes-128-xts";
  createClient() {
    AgoraRTC.createClient({ mode: "rtc", codec: "vp9" });
  }
}
