import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCategories } from 'redux/categories/operations';
import { useSelector } from 'react-redux';
import { selectCategories } from 'redux/categories/selectors';
import { colorCategory } from 'helpers/colorCategory';
import { Chart } from 'components/chart';
import { ExpensesList } from 'components/expensesList';
import {
  StatisticsContainer,
  DiagramTabWrapper,
  DiagramTableBar,
  SelectWrapper,
  Select,
  Form,
  SelectOption,
} from './DiagramTab.styled';

export const DiagramTab = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  const [tableCategories, setTableCategories] = useState([]);
  const [tableIncomeSum, setTableIncomeSum] = useState(0);
  const [tableExpenseSum, setTableExpenseSum] = useState(0);
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    function sumTheSameCategories(data) {
      let sumaryData = [];

      for (let item of data) {
        if (sumaryData.length === 0) {
          sumaryData = [
            {
              categoryName: item.category,
              categorySum: item.sum,
              categoryColor: colorCategory(item.category),
            },
          ];
        } else {
          const existingItemOnsumaryData = sumaryData.find(
            element => element.categoryName === item.category
          );

          if (existingItemOnsumaryData !== undefined) {
            existingItemOnsumaryData.categorySum += item.sum;
          } else {
            sumaryData = [
              ...sumaryData,
              {
                categoryName: item.category,
                categorySum: item.sum,
                categoryColor: colorCategory(item.category),
              },
            ];
          }
        }
      }
      return sumaryData;
    }

    function onDateFilter({ month, year }, data) {
      if (month === '' && year === '') {
        const result = data;
        return result;
      }

      if (month !== '' && year === '') {
        const result = data.filter(item => item._id.month === Number(month));
        return result;
      }

      if (month === '' && year !== '') {
        const result = data.filter(item => item._id.year === Number(year));
        return result;
      }

      if (month !== '' && year !== '') {
        const result = data.filter(
          item =>
            item._id.month === Number(month) && item._id.year === Number(year)
        );

        return result;
      }

      console.log('incorrect arguments');
    }

    const onDateFilteredData = onDateFilter({ month, year }, categories);

    const incomeCategories = incomeExpenseFilter('income', onDateFilteredData);
    const expenseCategories = incomeExpenseFilter(
      'expense',
      onDateFilteredData
    );

    const allCategoriesInOne = expenseCategories.reduce(
      (result, item) => (result = [...result, ...item.category]),
      []
    );

    const incomeCategoriesTotalSum = incomeCategories.reduce(
      (total, item) => (total += item.totalSum),
      0
    );
    const expenseCategoriesTotalSum = expenseCategories.reduce(
      (total, item) => (total += item.totalSum),
      0
    );

    const sumaryCategories = sumTheSameCategories(allCategoriesInOne);

    setTableCategories(sumaryCategories);
    setTableExpenseSum(expenseCategoriesTotalSum);
    setTableIncomeSum(incomeCategoriesTotalSum);
  }, [categories, month, year]);

  function incomeExpenseFilter(type, data) {
    switch (type) {
      case 'income':
        return data.filter(item => item && item._id.type === 'income');

      case 'expense':
        return data.filter(item => item && item._id.type === 'expense');

      default:
        console.log('incorrect type of operation');
    }
  }

  const handleMonthChange = event => {
    setMonth(event.currentTarget.value);
  };

  const handleYearChange = event => {
    setYear(event.currentTarget.value);
  };

  return (
    <StatisticsContainer>
      <Chart
        tableCategories={tableCategories}
        tableExpenseSum={tableExpenseSum}
      />
      <DiagramTabWrapper>
        <DiagramTableBar>
          <Form>
            <SelectWrapper>
              <Select name="month" value={month} onChange={handleMonthChange}>
                <SelectOption value="" hidden>
                  Month
                </SelectOption>
                <SelectOption value="1">January</SelectOption>
                <SelectOption value="2">February</SelectOption>
                <SelectOption value="3">March</SelectOption>
                <SelectOption value="4">April</SelectOption>
                <SelectOption value="5">May</SelectOption>
                <SelectOption value="6">June</SelectOption>
                <SelectOption value="7">July</SelectOption>
                <SelectOption value="8">August</SelectOption>
                <SelectOption value="9">September</SelectOption>
                <SelectOption value="10">October</SelectOption>
                <SelectOption value="11">November</SelectOption>
                <SelectOption value="12">December</SelectOption>
              </Select>
              <Select name="year" value={year} onChange={handleYearChange}>
                <SelectOption value="" hidden>
                  Year
                </SelectOption>
                <SelectOption value="2020">2020</SelectOption>
                <SelectOption value="2021">2021</SelectOption>
                <SelectOption value="2022">2022</SelectOption>
                <SelectOption value="2023">2023</SelectOption>
              </Select>
            </SelectWrapper>
          </Form>
          <ExpensesList
            tableCategories={tableCategories}
            tableExpenseSum={tableExpenseSum}
            tableIncomeSum={tableIncomeSum}
          />
        </DiagramTableBar>
      </DiagramTabWrapper>
    </StatisticsContainer>
  );
};
