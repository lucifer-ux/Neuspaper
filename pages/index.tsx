import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';
export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          {/* <BasicSection imageUrl="/demo-illustration-1.svg" title="Lorem ipsum dolor sit amet consectetur." overTitle="We will research for you">
            <p>
              Want great news without googling. In this world of misinformation let us be your informant. 24/7 available to help you out{' '}
              <Link href="/help-center">Contact us?</Link> Either the issue will be resolved or it will cease to exise. Yes, we are that good.
            </p>
          </BasicSection> */}
          <BasicSection imageUrl="/premium_member.svg" title="Can we help you with that." overTitle="Want to create news?" reversed>
            <p>
              Let us empower you to provide information that is so vital and give voice to the articles you wish to publish.{' '}
              <strong>Be rewarded</strong>. forr the most valuable tool of 21st centuary. Information
            </p>
            <ul>
              <li>Review and create news based on relevance and prove that you matter.</li>
              <li>Get fresh and relevant news. If I like sports no bollywood shall cross my path.</li>
              <li>With this power now you become neuspaper the destroyer of Nonsense news.</li>
            </ul>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          {/* <Cta /> */} {/* removed can be added for newsletter*/}
          {/* <FeaturesGallery /> */}  {/* removed can be added for mentioning features*/}
          {/* <Features /> */} {/* removed can be added for features*/}
          {/* <Testimonials /> */} {/* removed can be added for reviews*/}
          {/* <ScrollableBlogPosts posts={posts} /> */} {/* removed can be added for news post examples*/}
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    /* margin-bottom: 15rem; */
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    /* margin-top: 15rem; */
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    /* padding-bottom: 15rem; */
  }

  & > *:not(:first-child) {
    /* margin-top: 15rem; */
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
