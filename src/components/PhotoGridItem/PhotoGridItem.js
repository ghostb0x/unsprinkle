import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <ArticleWrapper>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source
            type="image/avif"
            srcset={`
              ${src.replace('.jpg', '.avif')} 1x,
              ${src.replace('.jpg', '@2x.avif')} 2x,
              ${src.replace('.jpg', '@2x.avif')} 3x
              `}
          />
          <source
            type="image/jpeg"
            srcset={`${src} 1x,
            ${src}@2x.jpg 2x,
            ${src}@3x.jpg 3x`}
          />
          <Image
            alt={alt}
            src={src}
          />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </ArticleWrapper>
  );
};

const ArticleWrapper = styled.article`
  /* overflow-x: clip; */
  /* text-overflow: ellipsis; */
`
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
  object-position: 0 40%;
`;

const Tags = styled.ul`
  display: block;
  overflow-x: clip;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 4px 0;
`;

const Tag = styled.li`
  display: inline;
  margin: 4px;
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);

  &:first-of-type {
    margin-left: 0px;
  }
`;

export default PhotoGridItem;
