import React from 'react';

export default function Home() {
  return (
    <div>
      <p>
       If you are a new musician that is looking for feedback about your music, this is the right place for you!
       Sign up and join other musicians that are looking for feedback. 
       leave comments and see what others think about your music.
       Listen to the Music and enjoy!
        <br></br><br></br>
        <div>
        <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/t4sK8d48Exs`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
        </div>
      </p>
    </div>
  );
}

