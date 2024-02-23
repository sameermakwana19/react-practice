import React from "react";

const message = {
  content: "Just ate at “Les Corbeaux En Colère”. Wonderful little venue!",
  published: "2024-03-14T15:09:26.000Z",
  author: {
    avatarSrc: "https://sandpack-bundler.vercel.app/img/avatars/009.png",
    avatarDescription: "Cartoon bear",
    name: "Ben Thorn",
    handle: "benjaminthorn",
  },
};

const baseUrl = "/users/";
const Exercise7_1 = () => {
  return (
    <>
      <article
        style={{
          filter: "var(--shadow-elevation-high)",
          backgroundColor: "gray",
        }}
      >
        <header>
          <img
            alt={message.author.avatarDescription}
            src={message.author.avatarSrc}
          />
          <a href={`${baseUrl}${message.author.handle}`}>
            {message.author.name}
          </a>
        </header>
        <p>{message.content}</p>
        <footer>
          Posted :{" "}
          <time dateTime={message.published}>
            {new Date(message.published).getFullYear()}
          </time>
        </footer>
      </article>
    </>
  );
};

export default Exercise7_1;
