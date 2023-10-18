import Link from "next/link";
import Script from "next/script";

/**
 * See https://substackapi.com/
 */
export const EmailSignup = () => {
  return (
    <div>
      <div id="custom-substack-embed"></div>
      <Script id="substack-script">
        {`window.CustomSubstackWidget = {
    substackUrl: "emersonforcouncil.substack.com",
    placeholder: "example@gmail.com",
    buttonText: "Subscribe",
    theme: "custom",
    colors: {
      primary: "#47FFD1",
      input: "#000000",
      email: "#FFFFFF",
      text: "#000",
    }
  };`}
      </Script>
      <Script
        id="substack-widget"
        src="https://substackapi.com/widget.js"
        async
      />
    </div>
    // <iframe
    //   src="https://emersonforcouncil.substack.com/embed"
    //   style={{
    //     width: "100%",
    //     background: "black",
    //   }}
    //   frameBorder={0}
    //   scrolling="no"
    // />

    // <Link
    //   className="btn btn-outline btn-primary"
    //   target="_blank"
    //   href="http://eepurl.com/iB2AIw"
    // >
    //   Sign-up for email updates
    // </Link>
  );
};
