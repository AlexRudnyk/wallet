export const colorCategory = category => {
  const categoryColorsData = [
    {
      categoryColor: '#FF7A7A',
      categoryName: 'house',
    },
    {
      categoryColor: '#FFF1CB',
      categoryName: 'children',
    },
    {
      categoryColor: '#75D7B4',
      categoryName: 'food',
    },
    {
      categoryColor: '#FD9498',
      categoryName: 'car',
    },
    {
      categoryColor: '#81E1FF',
      categoryName: 'education',
    },
    {
      categoryColor: '#24CCA7',
      categoryName: 'sports',
    },
    {
      categoryColor: '#00AD84',
      categoryName: 'other',
    },
  ];
  const findedItem = categoryColorsData.find(
    item => item.categoryName === category
  );
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return findedItem !== undefined ? findedItem.categoryColor : randomColor;
};
