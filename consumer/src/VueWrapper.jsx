import React, { useEffect, useRef } from "react";
import { createApp, h } from "vue";

export default function VueWrapper({ component, props }) {
  const ref = useRef(null);

  useEffect(() => {
    const app = createApp({
      render() {
        return h(component, props);
      },
    });

    app.mount(ref.current);

    return () => {
      app.unmount();
    };
  }, [component, props]);

  return <div ref={ref}></div>;
}
