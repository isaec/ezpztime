/*
import P2PCF from 'p2pcf'

const client_id = 'MyUsername'
const room_id = 'MyRoom'

const p2pcf = new P2PCF(client_id, room_id, {
  // Worker URL (optional) - if left out, will use a public worker
  workerUrl: '<your worker url>',

  // STUN ICE servers (optional)
  // If left out, will use public STUN from Google + Twilio
  stunIceServers: { ... },
  
  // TURN ICE servers (optional)
  // If left out, will use openrelay public TURN servers from metered.ca
  turnIceServers: { ... },
  
  // Network change poll interval (milliseconds, optional, default: 15000, 15 seconds)
  // Interval to poll STUN for network changes + reconnect
  networkChangePollIntervalMs: ...,
  
  // State expiration interval (milliseconds, optional, default: 120000, 2 minutes)
  // Timeout interval for peers during polling
  stateExpirationIntervalMs: ...,
  
  // State heartbeat interval (milliseconds, optional, default: 30000, 30 seconds)
  // Time before expiration to heartbeat
  stateHeartbeatWindowMs: ...,
  
  // Fast polling duration (milliseconds, optional, default: 10000, 10 seconds)
  // How long we run fast polling after a state transition
  fastPollingDurationMs: ...,

  // Fast polling rate (milliseconds, optional, default: 1500)
  // Polling rate during state transitions
  fastPollingRateMs: ...,

  // Slow polling rate (milliseconds, optional, default: 5000, 1.5 seconds)
  // Polling rate when there has been no recent activity
  slowPollingRateMs: ...,

  // Idle polling delay (milliseconds, optional, default: never)
  // How long to wait for activity before switching to idle polling rate
  idlePollingAfterMs: ...,

  // Idle polling rate (milliseconds, optional, default: Infinity)
  // Polling rate when there has been no activity for idlePollingAfterMs milliseconds
  // Infinity will cause polling to stop, which is useful for idle clients left open.
  idlePollingAfterMs: ...,

  // Options to pass to RTCPeerConnection constructor (optional)
  rtcPeerConnectionOptions: {},

  // Proprietary constraints to pass to RTCPeerConnection constructor (optional)
  rtcPeerConnectionProprietaryConstraints: {},

  // SDP transform function (optional)
  sdpTransform: sdp => sdp
});

// Start polling
p2pcf.start()

p2pcf.on('peerconnect', peer => {
  // New peer connected
  
  // Peer is an instance of simple-peer (https://github.com/feross/simple-peer)
  //
  // The peer has two custom fields:
  // - id (a per session unique id)
  // - client_id (which was passed to their P2PCF constructor)
  
  console.log("New peer:", peer.id, peer.client_id)
  
  peer.on('track', (track, stream) => {
    // New media track + stream from peer
  })
  
  // Add a media stream to the peer to start sending it
  peer.addStream(new MediaStream(...))
})

p2pcf.on('peerclose', peer => {
  // Peer has disconnected
})

p2pcf.on('msg', (peer, data) => {
  // Received data from peer (data is an ArrayBuffer)
})

// Broadcast a message via data channel to all peers
p2pcf.broadcast(new ArrayBuffer(...))

// To send a message via data channel to just one peer:
p2pcf.send(peer, new ArrayBuffer(...))

// To stop polling + shut down (not necessary to call this typically, page transition suffices.)
p2pcf.destroy()
*/

declare module "p2pcf" {
  export default class P2PCF {
    constructor(
      clientId: string,
      roomId: string,
      options?: {
        workerUrl?: string;
        stunIceServers?: RTCIceServer[];
        turnIceServers?: RTCIceServer[];
        networkChangePollIntervalMs?: number;
        stateExpirationIntervalMs?: number;
        stateHeartbeatWindowMs?: number;
        fastPollingDurationMs?: number;
        fastPollingRateMs?: number;
        slowPollingRateMs?: number;
        idlePollingAfterMs?: number;
        idlePollingRateMs?: number;
        rtcPeerConnectionOptions?: RTCConfiguration;
        rtcPeerConnectionProprietaryConstraints?: any;
        sdpTransform?: (sdp: string) => string;
      }
    );
    start(): void;
    destroy(): void;
    broadcast(data: ArrayBuffer): void;
    send(peer: any, data: ArrayBuffer): void;
    on(event: string, callback: (peer: any, data: ArrayBuffer) => void): void;
  }
}
