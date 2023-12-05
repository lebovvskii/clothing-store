import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from "./directory-item.styles";

export const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer>
      <BackgroundImage $imageUrl={imageUrl} />
      <Body>
        <h2>{title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};
