import React from "react";

import AuthorSocials from "@theme/Blog/Components/Author/Socials";
import styles from "./styles.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import { authors } from "@site/docs/authors";

function MaybeLink(props) {
  if (props.href) {
    return <Link {...props} />;
  }
  return <>{props.children}</>;
}
function AuthorTitle({ title }) {
  return (
    <small className={styles.authorTitle} title={title}>
      {title}
    </small>
  );
}

function AuthorUniversity({ studentInfo }) {
  if (!studentInfo) {
    return null;
  }
  return (
    <small className={styles.authorTitle}>
      {studentInfo.major} @ {studentInfo.university}
    </small>
  );
}
function AuthorName({ name, as }) {
  if (!as) {
    return <span className={styles.authorName}>{name}</span>;
  } else {
    return (
      <Heading as={as} className={styles.authorName}>
        {name}
      </Heading>
    );
  }
}

const Author = ({ as = "", author }) => {
  const { name, title, url, imageURL, email, page, studentInfo } =
    authors[author];
  const link =
    page?.permalink || url || (email && `mailto:${email}`) || undefined;
  console.log(imageURL);
  return (
    <div
      style={{ marginTop: "3rem", marginLeft: "1rem" }}
      className={clsx(
        "avatar margin-bottom--sm ",
        "margin-top",
        styles[`author-as-${as}`]
      )}
    >
      {imageURL && (
        <MaybeLink href={link} className="avatar__photo-link">
          <img
            className={clsx("avatar__photo", styles.authorImage)}
            src={imageURL}
            alt={name}
          />
        </MaybeLink>
      )}

      {(name || title) && (
        <div className={clsx("avatar__intro", styles.authorDetails)}>
          <div className="avatar__name">
            {name && (
              <MaybeLink href={link}>
                <AuthorName name={name} as={as} />
              </MaybeLink>
            )}
          </div>
          {!!title && <AuthorTitle title={title} />}
          {!!title && <AuthorUniversity studentInfo={studentInfo} />}

          {/*
              We always render AuthorSocials even if there's none
              This keeps other things aligned with flexbox layout
            */}
          <AuthorSocials author={authors[author]} />
        </div>
      )}
    </div>
  );
};
export default Author;
