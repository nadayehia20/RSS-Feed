import SkeletonElement from "./skeletonElement";

const SkeletonArticle = () => {
  return (
    <div className="skeleton-wrapper">
      <SkeletonElement type="thumbnail" />
      <SkeletonElement type="title" />
      <SkeletonElement type="text" />
      <SkeletonElement type="text" />
      <SkeletonElement type="text" />
      <SkeletonElement type="avatar" />
      <SkeletonElement type="text" />
    </div>
  );
};

export default SkeletonArticle;
