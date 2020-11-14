import React, { useEffect, useState } from "react";
import { NextButton } from "./NextButton";

export function NextButtonContainer(props: {
  totPages: number;
  onChange: any;
}) {
  const [page, setPage] = useState<number>(1);
  const [totPages, setTotPages] = useState<number>(1);

  useEffect(() => {
    // set totPages to the value of the Parent (Posts)
    setTotPages(props.totPages);
  }, [props.totPages]);

  useEffect(() => {
    // Run once!
    setPage(2);
  }, []);

  function nextPage() {
    // Modify state variable page = page + 1
    setPage(page + 1);
    // Scroll to top
    document?.querySelector("ion-content")?.scrollToTop(500);
    // Notify Parent (Posts) about the page change
    updatePostsPageNumber();
  }

  function updatePostsPageNumber() {
    // Here, we invoke the callback function provided by the Parent with the new page value
    props.onChange(page);
  }

  return <NextButton page={page} totPages={totPages} nextPage={nextPage} />;
}
