import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Loader } from 'components/loader';
import {
  Container,
  Label,
  ChartContainer,
  Text,
  NotFoundImg,
} from './Chart.styled';
import noDataFound from '../../images/noDataFound.jpg';

ChartJS.register(ArcElement, Tooltip, Legend);

export const Chart = ({ tableCategories = [], tableExpenseSum = 0 }) => {
  const [categoryName, setCategoryName] = useState(null);
  const [categoryColor, setCategoryColor] = useState(null);
  const [categorySum, setCategorySum] = useState(null);

  useEffect(() => {
    if (tableCategories) {
      setCategoryName(tableCategories.map(item => item.categoryName));
      setCategoryColor(tableCategories.map(item => item.categoryColor));
      setCategorySum(tableCategories.map(item => item.categorySum));
    }
  }, [tableCategories]);

  const [chartData, setChartData] = useState({
    labels: [
      'House',
      'Food',
      'Children',
      'Education',
      'Sports',
      'Car',
      'Other',
    ],
    datasets: [
      {
        data: [0],
        backgroundColor: ['#FED057'],
        hoverOffset: 5,
        borderWidth: 0,
        cutout: '70%',
        radius: '95%',
      },
    ],
  });

  useEffect(() => {
    if (categoryColor && categoryName && categorySum) {
      setChartData({
        labels: categoryName,
        datasets: [
          {
            data: categorySum,
            backgroundColor: categoryColor,
            hoverOffset: 5,
            borderWidth: 0,
            cutout: '70%',
            radius: '95%',
          },
        ],
      });
    }
  }, [categoryColor, categoryName, categorySum]);

  const [chartOption] = useState({
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (toolTipItem) {
            return `${toolTipItem.label}: ₴ ${toolTipItem.parsed}`;
          },
        },
      },
    },
  });

  return (
    <Container>
      <Label>Statistics</Label>
      <ChartContainer>
        {!tableCategories && <Loader color="#4a56e2" size="100px" />}
        {categorySum?.length === 0 && (
          <NotFoundImg src={noDataFound} alt="Oops, something is wrong" />
        )}
        {tableCategories && categorySum?.length !== 0 && (
          <>
            <Doughnut data={chartData} options={chartOption} />
            <Text>₴{tableExpenseSum}</Text>
          </>
        )}
      </ChartContainer>
    </Container>
  );
};
