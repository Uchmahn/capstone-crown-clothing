import { Link } from 'react-router-dom';
import { FC } from 'react';

import ProductCard from '../product-card/product-card.component';

import { CategoryPreviewContainer } from './category-preview.styles';
import { CategoryItem } from '../../store/categories/category.types';

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  return (
    <CategoryPreviewContainer key={title}>
      <h2>
        <Link className="title" to={title}>
          <span>{title.toUpperCase()}</span>
        </Link>
      </h2>

      <div className="preview">
        {products
          .filter((_, index: number) => index < 4)
          .map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
