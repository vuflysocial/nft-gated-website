import { ConnectWallet, useAddress, Web3Button } from "@thirdweb-dev/react";
import { isFeatureEnabled } from "@thirdweb-dev/sdk";
import Link from "next/link";
import { contractAddress } from "../const/yourDetails";
import styles from "../styles/Home.module.css";

export default function Login() {
  const address = useAddress(); // Get the user's address

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Auth - Like Melo NFT Gate</h1>
      <p className={styles.explain}>
        Only holder of our Like Melo NFT are allowed beyond this point!{" "}
        <b>
          <a
            href="https://portal.thirdweb.com/building-web3-apps/authenticating-users"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.purple}
          >
            Auth
          </a>
        </b>
        !
      </p>

      <p className={styles.explain}>
        You cannot access the{" "}
        <Link className={styles.purple} href="/">
          main page
        </Link>{" "}
        unless you own a Like Melo NFT from our collection!
      </p>

      <hr className={styles.divider} />

      <>
        {address ? (
          <p>
            Welcome, {address?.slice(0, 6)}...{address?.slice(-4)}
          </p>
        ) : (
          <p>Please connect your wallet to continue.</p>
        )}

        <ConnectWallet accentColor="darkorange" />
      </>
      <div className={styles.downloadContainer}>
        {isFeatureEnabled("has_nft") ? (
          <>
            <a href="/Download/video.mp4" download>Download Video</a>
            <a href="/Download/document.pdf" download>Download PDF</a>
          </>
        ) : (
          <p>You don't have the required NFT to download files.</p>
        )}
      </div>
    </div>
  );
}

