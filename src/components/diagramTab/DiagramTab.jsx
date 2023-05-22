import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCategories } from 'redux/categories/operations';
import { useSelector } from 'react-redux';
import { selectCategories } from 'redux/categories/selectors';
import { colorCategory } from 'helpers/colorCategory';
import { Chart } from 'components/chart';
import {
  StatisticsContainer,
  DiagramTabWrapper,
  DiagramTableBar,
  Select,
  Form,
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
        console.log('RESULT', result);
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

        console.log('RESULT', result);
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

  console.log('MONTH', month);
  console.log('YEAR', year);

  return (
    <StatisticsContainer>
      <Chart
        tableCategories={tableCategories}
        tableExpenseSum={tableExpenseSum}
      />
      <DiagramTabWrapper>
        <DiagramTableBar>
          <Form>
            <Select name="month" value={month} onChange={handleMonthChange}>
              <option value="" hidden>
                Month
              </option>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </Select>
            <Select name="year" value={year} onChange={handleYearChange}>
              <option value="" hidden>
                Year
              </option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </Select>
          </Form>
          {/* <DiagramButtonsWrapper className="diagram-tab__buttons-wrapper">
            <CustomSelect
              items={yearDataSet}
              changeValue={setYearSelectedValue}
            />
            <CustomSelect
              items={monthDataSet}
              changeValue={setMonthSelectedValue}
            />
          </DiagramButtonsWrapper> */}

          {/* <Table
            tableCategories={tableCategories}
            tableIncomeSum={tableIncomeSum}
            tableExpenseSum={tableExpenseSum}
          /> */}
        </DiagramTableBar>
      </DiagramTabWrapper>
    </StatisticsContainer>
  );
};
