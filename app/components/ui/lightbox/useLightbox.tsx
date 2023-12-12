import * as React from "react";
import dynamic from "next/dynamic";
import type { LightboxExternalProps } from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import styles from "./Lightbox.module.css";
import { ReactSVG } from "react-svg";

const Lightbox = dynamic(() => import("./Lightbox"));

export default function useLightbox() {
  const [open, setOpen] = React.useState(false);
  const [interactive, setInteractive] = React.useState(false);

  const openLightbox = React.useCallback(() => {
    setOpen(true);
    setInteractive(true);
  }, []);

  const renderLightbox = React.useCallback(
    (props?: Omit<LightboxExternalProps, "open" | "close">) =>
      interactive ? (
        <Lightbox
          className={styles.lightbox}
          plugins={[Video]}
          open={open}
          close={() => setOpen(false)}
          render={{
            iconClose: () => (
              <div className={styles.close_icon}>
                <ReactSVG src="/images/icons/cross.svg" />
              </div>
            )
          }}
          {...props}
        />
      ) : null,
    [open, interactive]
  );

  return { openLightbox, renderLightbox };
}
