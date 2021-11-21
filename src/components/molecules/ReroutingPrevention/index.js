import React, { useEffect } from "react";
import { Prompt } from "react-router";

const ReroutingPrevention = ({ shouldBlockNavigation }) => {
  useEffect(() => {
    if (shouldBlockNavigation) {
      window.onbeforeunload = () => true;
    } else {
      window.onbeforeunload = undefined;
    }
  }, [shouldBlockNavigation]);

  return (
    <>
      <Prompt
        when={shouldBlockNavigation}
        message="You have unsaved changes, are you sure you want to leave?"
      />
    </>
  );
};

export default ReroutingPrevention;
