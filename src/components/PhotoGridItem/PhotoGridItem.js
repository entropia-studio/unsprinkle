import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  const buildSrcsetAvi = (src) => {
    const imageAvif = src.replace('.jpg', '.avif');
    const imagePlusTwoAvif = src.replace('.jpg', '@2x.avif');
    const imagePlusThree = src.replace('.jpg', '@3x.avif');
    return `${imageAvif} 1x, ${imagePlusTwoAvif} 2x,  ${imagePlusThree} 3x`;
  };
  const buildSrcsetJpg = (src) => {
    const imagePlusTwo = src.replace('.jpg', '@2x.jpg');
    const imagePlusThree = src.replace('.jpg', '@3x.jpg');
    return `${src} 1x, ${imagePlusTwo} 2x,  ${imagePlusThree} 3x`;
  };

  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source type='image/avif' srcSet={buildSrcsetAvi(src)} />
          <source type='image/jpeg' srcSet={buildSrcsetJpg(src)} />
          <Image src={src} alt={alt} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
`;

export default PhotoGridItem;
