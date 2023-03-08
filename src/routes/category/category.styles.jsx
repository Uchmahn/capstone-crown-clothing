import styled from 'styled-components';

const CategoryContainer = styled.div`
  .category-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 50px;
  }
  .category-title {
    font-size: 38px;
    margin-bottom: 25px;
    text-align: center;
  }
`;

// .category-container {
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   column-gap: 20px;
//   row-gap: 50px;
// }
// .category-title {
//   font-size: 38px;
//   margin-bottom: 25px;
//   text-align: center;
// }

export default CategoryContainer;
