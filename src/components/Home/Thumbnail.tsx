import React, { useEffect, useState } from "react";

export default function Thumbnail(img: any) {
  const [thumbnail, setThumbnail] = useState<any>({});

  useEffect(() => {
    async function loadThumbnail() {
      const response = await fetch(
        "https://blog.playstation.com/wp-json/wp/v2/media/" + img.mediaId
      );
      if (!response.ok) {
        // Not a 200 response! return...
        return;
      }
      // Get the
      const media = await response.json();
      // Modify state variable posts
      setThumbnail(media.media_details.sizes.medium);
    }
    // call loadPosts when component PostsContainer renders
    loadThumbnail();
  }, [img]);

  return <img src={thumbnail.source_url} alt={thumbnail.file} />;
}
