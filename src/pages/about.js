import * as React from 'react';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const query = graphql`
  query CocktailQuery {
    file(name: { eq: "cocktail" }) {
      childImageSharp {
        gatsbyImageData(placeholder: DOMINANT_COLOR)
      }
    }
  }
`;

export default function About({ data }) {
  return (
    <Layout
      title="About This Site"
      description="More information about this site."
    >
      <GatsbyImage
        image={getImage(data.file)}
        alt="a cocktail set inside an elaborate floral arrangement with dry ice mist curling around it"
      />
      <h1>About this site</h1>
      <Link to="/">Back to Home</Link>
    </Layout>
  );
}
