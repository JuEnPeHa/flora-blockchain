import Fingerprint from "./Fingerprint";

type Worker = {
  fd_cli: boolean;
  worker: boolean;
  fingerprint?: Fingerprint;
  farmerPublicKey?: string;
  poolPublicKey?: string;
}

export default Worker;
