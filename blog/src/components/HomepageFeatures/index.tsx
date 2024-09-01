import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Knowledge sharing",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Gather and share knowledge within{" "}
        <strong>MIAGE @Panthéon-Sorbonne Paris 1</strong> . From L1 up to M2.
      </>
    ),
  },
  {
    title: "Focus on What Matters... and more",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Find study materials for your current year under the{" "}
        <code>
          <Link to={"/docs/courses/"}>Courses</Link>
        </code>{" "}
        directory. Check out our {" "}
        <code>
          <Link to={"/tech-blog"}>Tech Blog</Link>
        </code>{" "}
        and {" "}
        <code>
          <Link to={"/mgmt-blog"}>Management Blog</Link>
        </code>{" "}
      </>
    ),
  },
  {
    title: "Powered by Students",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        This documentation is powered by students. You can contribute to this
        documentation by following the steps mentioned in the {" "}
        <code>
          <Link to={"/docs/tutorial/intro"}>tutorials</Link>
        </code>
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
