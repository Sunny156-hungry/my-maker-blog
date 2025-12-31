import clsx from 'clsx';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Twin Intelligent Agent Project',
    imgSrc: require('@site/static/img/xiaozhi_AI.jpg').default,
    description: (
      <>
        This project moves beyond single-AI assistants by creating a system where two AI agents interact. They debate, brainstorm, and role-play with each other, generating insights and creativity no single AI could achieve alone. Users become directors or participants, not just questioners. The goal is emergent intelligence, unlocking deeper analysis, creative leaps, and a new paradigm for human-AI collaboration.
      </>
    ),
  },
  {
    title: 'small 3D-modeling work',
    imgSrc: require('@site/static/img/blender_ghost.jpg').default,
    description: (
      <>
        This little ghost has small hands and ears.
      </>
    ),
  },
  {
    title: 'A stamp with good wishes',
    imgSrc: require('@site/static/img/3D_print_a_plus.jpg').default,
    description: (
      <>
        The little robot wishes everyone excellent grades (A+) in every subject.
      </>
    ),
  },
];

function Feature({imgSrc, title, description}) {
  const fullImgSrc = useBaseUrl(imgSrc);
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img 
          src={imgSrc} 
          alt={title} 
          className={styles.featureImage} 
          style={{ 
            width: '200px',
            height: '150px',
            objectFit: 'cover',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', 
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            marginBottom: '15px'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
